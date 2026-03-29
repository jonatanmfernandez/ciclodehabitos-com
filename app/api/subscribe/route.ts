import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';
import { Resend } from 'resend';

const EmailSchema = z.object({
    email: z.string().email({ message: "Por favor ingresa un correo electrónico válido" }),
});

export async function POST(request: Request) {
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
        return NextResponse.json(
            { error: "Configuration error on server" },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();

        // Validate email
        const result = EmailSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: result.error.errors[0].message },
                { status: 400 }
            );
        }

        const email = result.data.email.toLowerCase();

        // Insert into Supabase
        const { error: supabaseError } = await supabaseAdmin
            .from('subscribers')
            .insert([{ email, created_at: new Date().toISOString() }]);

        if (supabaseError) {
            console.error('Supabase error:', supabaseError);
            if (supabaseError.code === '23505') {
                // Duplicate
                return NextResponse.json(
                    { message: "¡Ya estás suscrito! Gracias por tu interés." },
                    { status: 200 } // Treat as success for UX
                );
            }
            throw new Error(`DB Error: ${supabaseError.message}`);
        }

        // Send Welcome Email via Resend
        try {
            const resendApiKey = process.env.RESEND_API_KEY;
            if (resendApiKey) {
                const resend = new Resend(resendApiKey);
                const { default: WelcomeEmail } = await import('@/components/emails/welcome-email');

                await resend.emails.send({
                    from: 'Ciclo de Hábitos <onboarding@resend.dev>', // Update this with your verified domain later
                    to: email,
                    subject: 'Bienvenido a Ciclo de Hábitos',
                    react: WelcomeEmail({ email }),
                });
            }
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // We don't fail the request if email fails, but we log it
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
