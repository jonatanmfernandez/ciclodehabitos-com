import crypto from 'crypto';

export const SITE_URL = 'https://ciclodehabitos.com';

// HMAC secret for unsubscribe links in the welcome-sequence emails.
// (Weekly broadcasts get their unsubscribe link injected by Resend.)
function unsubscribeSecret(): string | null {
    return process.env.UNSUBSCRIBE_SECRET || process.env.CRON_SECRET || null;
}

export function signUnsubscribeToken(email: string): string | null {
    const secret = unsubscribeSecret();
    if (!secret) return null;
    return crypto.createHmac('sha256', secret).update(email.toLowerCase()).digest('hex');
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
    const expected = signUnsubscribeToken(email);
    if (!expected || !token) return false;
    const a = Buffer.from(expected);
    const b = Buffer.from(token);
    return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function buildUnsubscribeUrl(email: string): string {
    const token = signUnsubscribeToken(email);
    if (!token) return `${SITE_URL}/contact`;
    return `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(email.toLowerCase())}&token=${token}`;
}

// Lead magnet: guía "El arte de diseñar hábitos". PDF_URL permite moverla a otro hosting.
export const GUIDE_PDF_URL = process.env.PDF_URL || `${SITE_URL}/el-arte-de-disenar-habitos.pdf`;

// NEURAL System (Gumroad). Con NEURAL_DISCOUNT_CODE definido, los correos del día 8
// y 10 ofrecen el precio especial y el link ya aplica el código; sin él, el día 8
// muestra el precio normal y el día 10 no se envía.
export const NEURAL_PRICE = 'USD 19';
export const NEURAL_DISCOUNT_CODE = process.env.NEURAL_DISCOUNT_CODE?.trim() || null;

export function neuralUrl(content: string): string {
    const base = 'https://jonfernandex.gumroad.com/l/neural-system-board';
    const path = NEURAL_DISCOUNT_CODE ? `${base}/${encodeURIComponent(NEURAL_DISCOUNT_CODE)}` : base;
    return `${path}?utm_source=email&utm_medium=email&utm_campaign=secuencia-guia&utm_content=${content}`;
}
