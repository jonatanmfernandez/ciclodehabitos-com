import { Resend } from 'resend';
import { verifyUnsubscribeToken } from '@/lib/newsletter';

// Página de baja para los links de la secuencia de bienvenida.
// (El newsletter semanal usa el link de baja propio de Resend Broadcasts.)

function htmlPage(title: string, message: string, status = 200) {
    return new Response(
        `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title} — Ciclo de Hábitos</title>
<style>
  body { font-family: -apple-system, "Segoe UI", Roboto, sans-serif; background: #f5f5f5; color: #090A0D; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 24px; }
  main { background: #FEFEFE; border-radius: 12px; padding: 40px; max-width: 480px; text-align: center; }
  h1 { font-size: 22px; margin: 0 0 12px; }
  p { color: #333640; line-height: 1.6; margin: 0 0 20px; }
  a { color: #F2884B; font-weight: bold; }
</style>
</head>
<body>
<main>
<h1>${title}</h1>
<p>${message}</p>
<a href="https://ciclodehabitos.com">Volver a ciclodehabitos.com</a>
</main>
</body>
</html>`,
        { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const email = (url.searchParams.get('email') || '').toLowerCase();
    const token = url.searchParams.get('token') || '';

    if (!email || !verifyUnsubscribeToken(email, token)) {
        return htmlPage('Enlace inválido', 'Este enlace de baja no es válido o expiró. Si querés darte de baja, respondé cualquiera de nuestros correos y lo hacemos manualmente.', 400);
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    try {
        if (resendApiKey && audienceId) {
            const resend = new Resend(resendApiKey);
            const result = await resend.contacts.update({
                audienceId,
                email,
                unsubscribed: true,
            });
            if (result.error) {
                console.error('Error dando de baja a', email, result.error);
                return htmlPage('Algo salió mal', 'No pudimos procesar la baja automáticamente. Respondé cualquiera de nuestros correos y lo resolvemos.', 502);
            }
        }
        return htmlPage('Baja confirmada', 'No vas a recibir más correos de Ciclo de Hábitos. Gracias por habernos acompañado — la puerta queda abierta.');
    } catch (error) {
        console.error('Unsubscribe fatal error:', error);
        return htmlPage('Algo salió mal', 'No pudimos procesar la baja automáticamente. Respondé cualquiera de nuestros correos y lo resolvemos.', 500);
    }
}
