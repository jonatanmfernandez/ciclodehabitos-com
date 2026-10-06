import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import type { ReactElement } from 'react';
import WelcomeLeadMagnetEmail from '@/emails/welcome-lead-magnet';
import WelcomeScience66Email from '@/emails/welcome-science-66';
import WelcomeDesignSheetEmail from '@/emails/welcome-design-sheet';
import WelcomeSystemEmail from '@/emails/welcome-system';
import WelcomeNeuralEmail from '@/emails/welcome-neural';
import WelcomeLastCallEmail from '@/emails/welcome-last-call';
import {
    GUIDE_PDF_URL,
    NEURAL_DISCOUNT_CODE,
    NEURAL_PRICE,
    buildUnsubscribeUrl,
    neuralUrl,
} from '@/lib/newsletter';

const EmailSchema = z.object({
    email: z.string().email({ message: "Por favor ingresa un correo electrónico válido" }),
    // Honeypot anti-bots: el campo está oculto en la landing, una persona nunca lo completa.
    empresa: z.string().optional(),
    // Origen del suscriptor (utm_source en la landing, ej. "pinterest"). Los formularios del blog no lo mandan.
    origen: z.string().optional(),
});

const FROM = 'Joni de Ciclo de Hábitos <hola@ciclodehabitos.com>';
const DAY_MS = 24 * 60 * 60 * 1000;

type WelcomeStep = { delayDays: number; subject: string; react: ReactElement };

// Secuencia de bienvenida de 10 días para el Lead Magnet (PDF: El arte de diseñar hábitos)
// Día 0: Entrega del PDF + "respondé con el hábito que querés crear"
// Día 2: El mito de los 21 días vs. los 66 días
// Día 4: La hoja de diseño completa con un ejemplo
// Día 6: Un hábito solo no alcanza (el problema que resuelve NEURAL System)
// Día 8: NEURAL System por dentro (oferta)
// Día 10: Último día del precio especial (solo si hay código de descuento)
function welcomeSequence(unsubscribeUrl: string): WelcomeStep[] {
    const steps: WelcomeStep[] = [
        { delayDays: 0, subject: 'Tu guía: El arte de diseñar hábitos', react: WelcomeLeadMagnetEmail({ unsubscribeUrl, pdfUrl: GUIDE_PDF_URL }) },
        { delayDays: 2, subject: 'El número que cambia cómo ves tus hábitos', react: WelcomeScience66Email({ unsubscribeUrl }) },
        { delayDays: 4, subject: 'Un hábito diseñado de punta a punta', react: WelcomeDesignSheetEmail({ unsubscribeUrl }) },
        { delayDays: 6, subject: 'Un hábito solo no alcanza', react: WelcomeSystemEmail({ unsubscribeUrl }) },
        {
            delayDays: 8,
            subject: 'Te muestro NEURAL System por dentro',
            react: WelcomeNeuralEmail({ unsubscribeUrl, neuralUrl: neuralUrl('dia8'), price: NEURAL_PRICE, discountCode: NEURAL_DISCOUNT_CODE }),
        },
    ];
    if (NEURAL_DISCOUNT_CODE) {
        steps.push({
            delayDays: 10,
            subject: 'Último día del precio especial',
            react: WelcomeLastCallEmail({ unsubscribeUrl, neuralUrl: neuralUrl('dia10'), discountCode: NEURAL_DISCOUNT_CODE }),
        });
    }
    return steps;
}

function tagValue(origen: string | undefined): string {
    // Resend solo acepta letras, números, _ y - en los tags.
    return (origen || 'blog').slice(0, 60).replace(/[^a-zA-Z0-9_-]/g, '_') || 'blog';
}

const SUCCESS = { message: "¡Suscripción exitosa! Revisa tu correo pronto.", pdfUrl: GUIDE_PDF_URL };

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const result = EmailSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: result.error.errors[0].message },
                { status: 400 }
            );
        }

        if (result.data.empresa) {
            // Bot: fingimos éxito y no hacemos nada.
            return NextResponse.json(SUCCESS, { status: 200 });
        }

        const email = result.data.email.toLowerCase();
        const origen = tagValue(result.data.origen);

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            // Entorno sin clave (dev local): no fallamos el formulario.
            console.warn('RESEND_API_KEY no configurada; suscripción no procesada para', email);
            return NextResponse.json(SUCCESS, { status: 200 });
        }

        const resend = new Resend(resendApiKey);

        const audienceId = process.env.RESEND_AUDIENCE_ID;
        if (audienceId) {
            // contacts.create es idempotente en Resend (no falla si el contacto ya
            // existe), así que la deduplicación se hace consultando antes de crear.
            const existing = await resend.contacts.get({ email, audienceId });

            if (existing.data && existing.data.unsubscribed === false) {
                // Suscriptor activo: le reenviamos la guía (día 0) pero no
                // re-disparamos la secuencia de bienvenida.
                const [guide] = welcomeSequence(buildUnsubscribeUrl(email));
                const { error } = await resend.emails.send(
                    {
                        from: FROM,
                        to: email,
                        subject: guide.subject,
                        react: guide.react,
                        tags: [{ name: 'origen', value: origen }],
                    },
                    { idempotencyKey: `guide-resend-${email}` }
                );
                if (error) {
                    console.error(`Error reenviando la guía a ${email}:`, error);
                }
                return NextResponse.json(
                    { message: "Ya estabas suscrito. Te reenviamos la guía a tu correo.", pdfUrl: GUIDE_PDF_URL },
                    { status: 200 }
                );
            }

            if (existing.data) {
                // Estaba dado de baja y vuelve: lo reactivamos y recibe la secuencia.
                const updated = await resend.contacts.update({ audienceId, email, unsubscribed: false });
                if (updated.error) {
                    console.error('Error reactivando contacto en Resend:', updated.error);
                }
            } else {
                const contact = await resend.contacts.create({
                    email,
                    unsubscribed: false,
                    audienceId,
                });
                if (contact.error) {
                    console.error('Error guardando contacto en Resend:', contact.error);
                }
            }
        }

        const unsubscribeUrl = buildUnsubscribeUrl(email);

        for (const step of welcomeSequence(unsubscribeUrl)) {
            // Clave de idempotencia: si el formulario se reenvía (doble clic,
            // reintento, o una segunda suscripción antes de que Resend expire la
            // clave a las 24 h) el envío duplicado se descarta en lugar de mandar
            // dos veces el mismo email de la secuencia de bienvenida.
            const idempotencyKey = `welcome-${step.delayDays}-${email}`;
            const { error } = await resend.emails.send(
                {
                    from: FROM,
                    to: email,
                    subject: step.subject,
                    react: step.react,
                    scheduledAt: step.delayDays > 0
                        ? new Date(Date.now() + step.delayDays * DAY_MS).toISOString()
                        : undefined,
                    tags: [{ name: 'origen', value: origen }],
                },
                { idempotencyKey }
            );
            if (error) {
                console.error(`Error enviando "${step.subject}" a ${email}:`, error);
            }
        }

        return NextResponse.json(SUCCESS, { status: 200 });
    } catch (error) {
        console.error('Subscription Fatal Error:', error);
        return NextResponse.json(
            { error: "Hubo un error al procesar tu solicitud." },
            { status: 500 }
        );
    }
}
