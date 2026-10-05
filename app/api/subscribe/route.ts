import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import WelcomeLeadMagnetEmail from '@/emails/welcome-lead-magnet';
import WelcomeScience66Email from '@/emails/welcome-science-66';
import WelcomeLoopDesignEmail from '@/emails/welcome-loop-design';
import WelcomeEnvironmentEmail from '@/emails/welcome-environment';
import WelcomeCompleteSystemEmail from '@/emails/welcome-complete-system';
import { buildUnsubscribeUrl } from '@/lib/newsletter';

const EmailSchema = z.object({
    email: z.string().email({ message: "Por favor ingresa un correo electrónico válido" }),
});

const FROM = 'Jonatan de Ciclo de Hábitos <hola@ciclodehabitos.com>';
const DAY_MS = 24 * 60 * 60 * 1000;

// Secuencia de bienvenida de 10 días para el Lead Magnet (PDF: El Arte de Diseñar Hábitos)
// Día 0: Entrega del PDF + gancho de respuesta
// Día 2: Mito de los 21 días vs 66 días + Versión Mínima
// Día 4: El bucle de 3 piezas (Señal, Rutina, Recompensa)
// Día 7: El diseño de entorno le gana a la disciplina
// Día 10: Pasando al sistema completo (Conversión a Ciclo de Hábitos)
const WELCOME_SEQUENCE = [
    { delayDays: 0, subject: 'Acá está tu guía: El Arte de Diseñar Hábitos 🎁', render: WelcomeLeadMagnetEmail },
    { delayDays: 2, subject: 'Por qué el 92% fracasa el día 14 (y la regla de los 66 días)', render: WelcomeScience66Email },
    { delayDays: 4, subject: 'Las 3 piezas que hacen que un hábito se sostenga solo', render: WelcomeLoopDesignEmail },
    { delayDays: 7, subject: 'El diseño de entorno le gana a la disciplina (siempre)', render: WelcomeEnvironmentEmail },
    { delayDays: 10, subject: 'De la guía al sistema completo: Tu mapa de 30 días 🚀', render: WelcomeCompleteSystemEmail },
];

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

        const email = result.data.email.toLowerCase();

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            // Entorno sin clave (dev local): no fallamos el formulario.
            console.warn('RESEND_API_KEY no configurada; suscripción no procesada para', email);
            return NextResponse.json(
                { message: "¡Suscripción exitosa! Revisa tu correo pronto." },
                { status: 200 }
            );
        }

        const resend = new Resend(resendApiKey);

        const audienceId = process.env.RESEND_AUDIENCE_ID;
        if (audienceId) {
            // contacts.create es idempotente en Resend (no falla si el contacto ya
            // existe), así que la deduplicación se hace consultando antes de crear.
            const existing = await resend.contacts.get({ email, audienceId });

            if (existing.data && existing.data.unsubscribed === false) {
                // Suscriptor activo: no re-disparamos la secuencia de bienvenida.
                return NextResponse.json(
                    { message: "Ya estabas suscrito. ¡Gracias por estar ahí!" },
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

        for (const step of WELCOME_SEQUENCE) {
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
                    react: step.render({ unsubscribeUrl }),
                    scheduledAt: step.delayDays > 0
                        ? new Date(Date.now() + step.delayDays * DAY_MS).toISOString()
                        : undefined,
                },
                { idempotencyKey }
            );
            if (error) {
                console.error(`Error enviando "${step.subject}" a ${email}:`, error);
            }
        }

        return NextResponse.json(
            { message: "¡Suscripción exitosa! Revisa tu correo pronto." },
            { status: 200 }
        );
    } catch (error) {
        console.error('Subscription Fatal Error:', error);
        return NextResponse.json(
            { error: "Hubo un error al procesar tu solicitud." },
            { status: 500 }
        );
    }
}
