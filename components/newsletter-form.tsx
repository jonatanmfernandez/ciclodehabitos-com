"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
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
                // Safe access to error message
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
