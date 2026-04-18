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

        // Aquí más adelante conectaremos tu nuevo proveedor de mailing
        // (ConvertKit, Beehiiv, MailerLite, o Resend Audiences)

        // Send Welcome Email via Resend
        try {
            const resendApiKey = process.env.RESEND_API_KEY;
            if (resendApiKey) {
                const resend = new Resend(resendApiKey);
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
            { message: "¡Suscripción confirmada temporalmente!" },
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
