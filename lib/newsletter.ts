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
