import { NextResponse } from 'next/server';
import { z } from 'zod';
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

        const email = result.data.email.toLowerCase();

        // Añadir a la audiencia y enviar Welcome Email via Resend
        try {
            const resendApiKey = process.env.RESEND_API_KEY;
            if (resendApiKey) {
                const resend = new Resend(resendApiKey);
                
                // 1. Añadir el contacto a Resend Audiences
                const audienceId = process.env.RESEND_AUDIENCE_ID;
                if (audienceId) {
                    const result = await resend.contacts.create({
                        email: email,
                        unsubscribed: false,
                        audienceId: audienceId,
                    });
                    
                    if (result.error) {
                        console.error('Error guardando contacto en resend:', result.error);
                    }
                }

                // 2. Enviar correo de bienvenida
                const { default: WelcomeEmail } = await import('@/components/emails/welcome-email');

                await resend.emails.send({
                    from: 'Ciclo de Hábitos <onboarding@resend.dev>', // Modificar al dominio verificado luego
                    to: email,
                    subject: 'Bienvenido a Ciclo de Hábitos',
                    react: WelcomeEmail({ email }),
                });
            }
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // No fallamos la petición si el email falla
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
