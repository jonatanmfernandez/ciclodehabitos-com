"use client"

import { createContext, useContext, useState } from "react"
import styles from "./landing.module.css"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

declare global {
    interface Window {
        pintrk?: (...args: unknown[]) => void
    }
}

// Los dos formularios de la landing comparten estado: si te suscribís en uno,
// ambos pasan a "¡Listo!".
type SentState = { pdfUrl: string | null } | null
const SentContext = createContext<[SentState, (s: SentState) => void]>([null, () => {}])

export function GuideFormProvider({ children }: { children: React.ReactNode }) {
    const state = useState<SentState>(null)
    return <SentContext.Provider value={state}>{children}</SentContext.Provider>
}

function getOrigen(): string {
    const utm = new URLSearchParams(window.location.search).get("utm_source")
    if (utm) return utm.slice(0, 60)
    return document.referrer.includes("pinterest") ? "pinterest" : "directo"
}

interface GuideFormProps {
    id: string
    buttonLabel: string
    fine: string
    okText: string
}

export function GuideForm({ id, buttonLabel, fine, okText }: GuideFormProps) {
    const [sent, setSent] = useContext(SentContext)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    if (sent) {
        return (
            <div className={styles.ok} role="status">
                <strong>¡Listo! Revisá tu correo.</strong>
                <p>{okText}</p>
                {sent.pdfUrl && (
                    <a className={styles.okBtn} href={sent.pdfUrl} target="_blank" rel="noopener">
                        O descargala ahora
                    </a>
                )}
            </div>
        )
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
        const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value
        setError("")
        if (!EMAIL_RE.test(email)) {
            setError("Revisá el email: parece que le falta algo.")
            return
        }

        setLoading(true)
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, empresa, origen: getOrigen() }),
            })
            const data = await res.json().catch(() => ({}))
            if (res.ok) {
                setSent({ pdfUrl: data.pdfUrl ?? null })
                window.pintrk?.("track", "lead")
            } else if (res.status === 400) {
                setError("Revisá el email: parece que le falta algo.")
            } else {
                setError("No pudimos enviarla en este momento. Probá de nuevo en unos minutos.")
            }
        } catch {
            setError("Parece que hubo un problema de conexión. Probá de nuevo.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label htmlFor={id}>Tu email</label>
            <div className={styles.row}>
                <input id={id} name="email" type="email" autoComplete="email" placeholder="nombre@email.com" required />
                <button type="submit" disabled={loading}>
                    {loading ? "Enviando…" : buttonLabel}
                </button>
            </div>
            <div className={styles.hp} aria-hidden="true">
                <label>
                    Empresa <input name="empresa" tabIndex={-1} autoComplete="off" />
                </label>
            </div>
            {error && (
                <p className={styles.err} role="alert">
                    {error}
                </p>
            )}
            <p className={styles.fine}>{fine}</p>
        </form>
    )
}
