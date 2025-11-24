"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
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

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Algo salió mal")
            }

            toast.success("¡Suscripción exitosa!", {
                description: "Gracias por unirte. Pronto recibirás noticias nuestras."
            })
            setEmail("")
        } catch (error) {
            toast.error("Error al suscribirse", {
                description: error instanceof Error ? error.message : "Inténtalo de nuevo más tarde"
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12" onSubmit={handleSubscribe}>
                <input
                    type="email"
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
