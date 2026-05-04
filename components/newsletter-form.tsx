"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
    variant?: "default" | "editorial"
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
    const [isSuccess, setIsSuccess] = useState(false)
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            let data;
            try {
                const text = await response.text()
                try {
                    data = JSON.parse(text)
                } catch {
                    console.error("Failed to parse JSON response:", text)
                    throw new Error("El servidor devolvió una respuesta inválida (HTML en lugar de JSON).")
                }
            } catch (err) {
                console.error("Network or parsing error:", err)
                throw new Error("Error de conexión con el servidor.")
            }

            if (!response.ok) {
                const errorMessage = data?.error || "Error desconocido del servidor";
                console.error("Subscription failed:", errorMessage, data);
                throw new Error(errorMessage)
            }

            toast.success("¡Suscripción exitosa!", {
                description: data.message || "Gracias por unirte."
            })
            setIsSuccess(true)
            setEmail("")
        } catch (error) {
            console.error("Frontend Subscription Error:", error)
            toast.error("Error al suscribirse", {
                description: error instanceof Error ? error.message : "Inténtalo de nuevo más tarde"
            })
        } finally {
            setIsLoading(false)
        }
    }

    if (isSuccess) {
        if (variant === "editorial") {
            return (
                <div className="bg-green-500/10 border border-green-500/20 p-8 text-center max-w-md mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-4" />
                    <h3 className="font-playfair text-xl font-bold text-paper mb-2">¡Suscripción Confirmada!</h3>
                    <p className="text-[15px] text-paper/50">
                        Gracias por unirte a Ciclo de Hábitos.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 font-mono text-[11px] text-warm hover:text-[#dfc085] tracking-[0.1em] uppercase border-b border-warm/30 pb-1"
                    >
                        Suscribir otro correo
                    </button>
                </div>
            )
        }

        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center max-w-md mx-auto mb-12">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">¡Suscripción Confirmada!</h3>
                <p className="text-slate-300">
                    Gracias por unirte a Ciclo de Hábitos. Revisa tu bandeja de entrada para confirmar tu correo.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-blue-400 hover:text-blue-300 underline"
                >
                    Suscribir otro correo
                </button>
            </div>
        )
    }

    if (variant === "editorial") {
        return (
            <form className="flex flex-col sm:flex-row gap-0 w-full" onSubmit={handleSubscribe}>
                <input
                    type="email"
                    aria-label="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    placeholder="tu@email.com"
                    className="flex-1 bg-white/5 border border-white/10 sm:border-r-0 text-paper font-serif text-[15px] px-5 py-4 outline-none placeholder:text-paper/25 disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-warm text-ink border-none font-mono text-[12px] font-medium tracking-[0.1em] uppercase px-7 py-4 cursor-pointer hover:bg-[#dfc085] transition-colors whitespace-nowrap disabled:opacity-50"
                >
                    {isLoading ? "Suscribiendo..." : "Suscribirme →"}
                </button>
            </form>
        )
    }

    return (
        <>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12" onSubmit={handleSubscribe}>
                <input
                    type="email"
                    aria-label="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    placeholder="Tu mejor correo electrónico"
                    className="flex-1 px-6 py-4 rounded-xl border border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none disabled:opacity-50"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:hover:scale-100"
                >
                    {isLoading ? "Suscribiendo..." : "Suscribirse Gratis"}
                </button>
            </form>

            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>+2,000 lectores</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Gratis para siempre</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Darse de baja en 1 clic</span>
                </div>
            </div>
        </>
    )
}
