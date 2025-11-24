import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const EmailSchema = z.object({
    email: z.string().email({ message: "Por favor ingresa un correo electrónico válido" }),
});

export async function POST(request: Request) {
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

        const { email } = result.data;

        // Insert into Supabase
        const { error: supabaseError } = await supabase
            .from('subscribers')
            .insert([{ email, created_at: new Date().toISOString() }]);

        if (supabaseError) {
            // Check for duplicate email error (Postgres unique constraint violation code is usually 23505)
            if (supabaseError.code === '23505') {
                return NextResponse.json(
                    { message: "¡Ya estás suscrito! Gracias por tu interés." },
                    { status: 200 } // Treat as success for UX
                );
            }

            console.error('Supabase error:', supabaseError);
            throw new Error('Error saving to database');
        }

        // Send Welcome Email via Resend
        try {
            const resend = new Resend(process.env.RESEND_API_KEY || '');
            const { default: WelcomeEmail } = await import('@/components/emails/welcome-email');
            await resend.emails.send({
                from: 'Ciclo de Hábitos <onboarding@resend.dev>', // Update this with your verified domain later
                to: email,
                subject: 'Bienvenido a Ciclo de Hábitos',
                react: WelcomeEmail({ email }),
            });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // We don't fail the request if email fails, but we log it
        }

        return NextResponse.json(
            { message: "¡Gracias por suscribirte! Revisa tu correo pronto." },
            { status: 200 }
        );
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: "Hubo un error al procesar tu solicitud. Intenta nuevamente." },
            { status: 500 }
        );
    }
}
