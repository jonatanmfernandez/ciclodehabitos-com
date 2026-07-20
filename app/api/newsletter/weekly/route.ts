import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSortedPostsData } from '@/lib/blog';
import WeeklyEmail from '@/emails/weekly';
import { SITE_URL } from '@/lib/newsletter';

const FROM = 'Ciclo de Hábitos <newsletter@ciclodehabitos.com>';

// Rotación semanal de reflexiones y hábitos (índice = número de semana).
const REFLECTIONS = [
    'No necesitás más disciplina; necesitás menos fricción. Lo que hacés fácil, lo hacés siempre.',
    'La identidad se construye con votos: cada repetición es un voto por la persona que querés ser.',
    'El mejor momento para empezar fue hace un año. El segundo mejor es hoy, en versión de 2 minutos.',
    'No rompas la cadena dos veces: fallar un día es humano, fallar dos es empezar un hábito nuevo.',
    'Tu entorno vota más que tu voluntad. Acomodá la cancha antes de jugar el partido.',
    'Lo que se mide, mejora. Lo que se celebra, se repite.',
    'Un sistema mediocre que ejecutás le gana a un plan perfecto que postergás.',
    'Bajá la vara hasta que sea imposible fallar. La consistencia crea la ambición, no al revés.',
];

const HABITS = [
    '→ Dejá la ropa de entrenar preparada la noche anterior. Reducí la fricción de tu hábito clave.',
    '→ 2 minutos de lectura apenas te sentás a desayunar. El ancla hace al hábito.',
    '→ Apagá las notificaciones una hora por día. Una. Empezá hoy.',
    '→ Escribí una línea en un diario antes de dormir: "hoy salió bien ___".',
    '→ Tomá un vaso de agua apenas te levantás, antes del café.',
    '→ Caminá 10 minutos después de almorzar, sin teléfono.',
    '→ Elegí la fruta visible: poné una frutera donde apoyás las llaves.',
    '→ 1 minuto de orden antes de dormir: guardá algo, acomodá algo, dejá algo listo.',
];

function pickWeekly<T>(items: T[]): T {
    const week = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    return items[week % items.length];
}

export async function GET(request: Request) {
    const cronSecret = process.env.CRON_SECRET;
    if (!cronSecret) {
        return NextResponse.json({ error: 'CRON_SECRET no configurada' }, { status: 500 });
    }
    if (request.headers.get('authorization') !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!resendApiKey || !audienceId) {
        return NextResponse.json({ error: 'RESEND_API_KEY o RESEND_AUDIENCE_ID no configuradas' }, { status: 500 });
    }

    try {
        const latest = getSortedPostsData()[0];
        if (!latest) {
            return NextResponse.json({ ok: true, skipped: 'sin posts en el blog' });
        }

        const resend = new Resend(resendApiKey);
        const broadcastName = `newsletter-semanal-${latest.slug}`;
        const idempotencyKey = `newsletter-semanal-${latest.slug}`;
        const url = new URL(request.url);
        const force = url.searchParams.get('force') === '1';
        const dryRun = url.searchParams.get('dryRun') === '1';

        // Idempotencia sin base de datos: si ya existe un broadcast para este
        // post, el último artículo no cambió desde el envío anterior — no
        // repetimos el mismo newsletter.
        if (!force) {
            const existing = await resend.broadcasts.list();
            const alreadySent = existing.data?.data?.some((b) => b.name === broadcastName);
            if (alreadySent) {
                return NextResponse.json({ ok: true, skipped: `ya se envió "${latest.title}"`, broadcastName });
            }
        }

        const payload = {
            title: latest.title,
            excerpt: latest.excerpt,
            url: `${SITE_URL}/blog/${latest.slug}`,
            reflection: pickWeekly(REFLECTIONS),
            habit: pickWeekly(HABITS),
            // Placeholder que Resend reemplaza por el link real de baja de cada contacto.
            unsubscribeUrl: '{{{RESEND_UNSUBSCRIBE_URL}}}',
        };

        if (dryRun) {
            return NextResponse.json({ ok: true, dryRun: true, broadcastName, payload });
        }

        const created = await resend.broadcasts.create({
            audienceId,
            from: FROM,
            subject: latest.title,
            name: broadcastName,
            react: WeeklyEmail(payload),
        }, { idempotencyKey });
        if (created.error || !created.data) {
            console.error('Error creando broadcast:', created.error);
            return NextResponse.json({ error: created.error?.message || 'Error creando broadcast' }, { status: 502 });
        }

        const sent = await resend.broadcasts.send(created.data.id);
        if (sent.error) {
            console.error('Error enviando broadcast:', sent.error);
            return NextResponse.json({ error: sent.error.message }, { status: 502 });
        }

        return NextResponse.json({ ok: true, sent: broadcastName, broadcastId: created.data.id });
    } catch (error) {
        console.error('Weekly newsletter fatal error:', error);
        return NextResponse.json({ error: 'Error enviando el newsletter' }, { status: 500 });
    }
}
