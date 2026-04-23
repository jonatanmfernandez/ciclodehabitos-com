"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle2, Users, TrendingUp, Target, X, Clock, Gift, AlertCircle, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Chatbot } from "@/components/chatbot"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LandingPage() {
    const [userCount, setUserCount] = useState(2847)
    const [recentDownloads, setRecentDownloads] = useState(348)
    const [isVisible, setIsVisible] = useState(false)
    const [showExitPopup, setShowExitPopup] = useState(false)
    const [showBanner, setShowBanner] = useState(true)
    const [email, setEmail] = useState("")

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setUserCount((prev) => prev + Math.floor(Math.random() * 3))
            setRecentDownloads((prev) => prev + Math.floor(Math.random() * 2))
        }, 5000)

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                setShowExitPopup(true)
            }
        }
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            clearInterval(interval)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    const handleDownload = () => {
        if (email && email.includes("@")) {
            alert(`¡Gracias! Te enviaremos la guía a: ${email}`)
            setEmail("")
            setShowExitPopup(false)
        } else {
            alert("Por favor ingresa un email válido")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {showBanner && (
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 relative">
                    <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
                        <Gift className="w-5 h-5 flex-shrink-0" />
                        <span className="font-semibold">NUEVO: Descarga gratis "El Sistema de 30 Días"</span>
                        <button className="ml-2 bg-white text-blue-600 px-4 py-1 rounded-full font-bold hover:bg-blue-50 transition">
                            Obtener Ahora
                        </button>
                    </div>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-100"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            <Header />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16">
                <div
                    className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            <span>✨ Ya han transformado su vida: {userCount.toLocaleString()} personas</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-slate-900 leading-tight mb-6">
                        🔥 ¿Cuántas veces has
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                            prometido cambiar...
                        </span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-center text-slate-600 mb-12 font-light">
                        y terminaste igual que siempre?
                    </p>

                    <div className="max-w-3xl mx-auto mb-12">
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed">
                                Ya sabes lo que tienes que hacer.
                            </p>
                            <p className="text-base md:text-lg text-slate-500 italic mb-8">
                                Ir al gym. Leer más. Comer mejor. Ser más productivo.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                                <p className="text-lg font-semibold text-red-900 mb-2">El problema NO es la falta de información.</p>
                                <p className="text-red-800">Es que tus hábitos actuales te mantienen atrapado en el mismo ciclo.</p>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                                <p className="text-lg font-semibold text-green-900 mb-3">Pero aquí está la buena noticia:</p>
                                <p className="text-green-800 mb-4">No necesitas fuerza de voluntad sobrehumana.</p>
                                <p className="text-xl font-bold text-green-900">Solo necesitas el SISTEMA correcto.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto mb-8">
                        <button
                            onClick={handleDownload}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg md:text-xl py-6 px-8 rounded-2xl shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 flex items-center justify-center gap-3 group"
                        >
                            <span>Descarga Gratis "Los 7 Hábitos Que Cambiarán Tu Vida en 30 Días"</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-center text-slate-500 mt-4 text-sm">
                            ✓ Sin tarjeta de crédito • ✓ Descarga instantánea • ✓ 100% Gratis
                        </p>
                    </div>

                    <div className="text-center mb-16">
                        <Link
                            href="#problema"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            Ver Cómo Funciona
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                                <div className="flex justify-center mb-3">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">{userCount.toLocaleString()}+</div>
                                <div className="text-slate-600 text-sm">Vidas transformadas</div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                                <div className="flex justify-center mb-3">
                                    <TrendingUp className="w-8 h-8 text-green-600" />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">4.9/5</div>
                                <div className="text-slate-600 text-sm">⭐⭐⭐⭐⭐ Valoración</div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                                <div className="flex justify-center mb-3">
                                    <Target className="w-8 h-8 text-purple-600" />
                                </div>
                                <div className="text-3xl font-bold text-slate-900 mb-1">30 días</div>
                                <div className="text-slate-600 text-sm">Para ver resultados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="problema" className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-6">
                        Por qué SIGUES en el mismo lugar
                        <br />
                        año tras año
                    </h2>

                    <div className="space-y-4 mb-12">
                        {[
                            "No es porque seas flojo",
                            "No es porque no tengas fuerza de voluntad",
                            "No es porque 'no seas disciplinado'",
                        ].map((text, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                                <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                                <p className="text-lg text-red-900 font-medium">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-12 mb-8">
                        <p className="text-2xl font-bold mb-6">
                            El verdadero problema es que estás luchando contra el CICLO DE HÁBITOS equivocado.
                        </p>

                        <div className="space-y-4 text-lg text-slate-300">
                            <p>Cada mañana que presionas "snooze"...</p>
                            <p>Cada noche que prometes "mañana empiezo"...</p>
                            <p>Cada vez que abandonas a la semana...</p>
                        </div>

                        <p className="text-xl font-semibold mt-8 text-blue-300">
                            Estás reforzando el ciclo que te mantiene atrapado.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                        <p className="text-2xl font-bold text-green-900 mb-4">
                            La buena noticia: Los ciclos de hábitos se pueden ROMPER y RECONSTRUIR.
                        </p>
                        <p className="text-xl text-green-800">Y es más fácil de lo que piensas.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">El Sistema de Ciclo de Hábitos:</h2>
                        <p className="text-xl md:text-2xl text-slate-600">Tu mapa para escapar del ciclo de la procrastinación</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                        <p className="text-xl text-center text-slate-700 mb-12 max-w-3xl mx-auto">
                            En lugar de depender de motivación que desaparece...
                            <br />
                            <span className="font-bold text-slate-900">Construyes SISTEMAS que trabajan para ti 24/7.</span>
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Método de los Pequeños Cambios Compuestos",
                                    desc: "Resultados exponenciales en 30 días",
                                },
                                {
                                    title: "Framework Anti-Procrastinación",
                                    desc: "Diseñado para personas ocupadas",
                                },
                                {
                                    title: "Estrategias de Fortaleza Emocional",
                                    desc: "Para los días difíciles que SIEMPRE llegan",
                                },
                                {
                                    title: "Plantillas Plug & Play",
                                    desc: "Empieza hoy, sin excusas",
                                },
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-4 items-start p-6 rounded-2xl hover:bg-blue-50 transition-colors group border border-slate-100"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button
                                onClick={handleDownload}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all hover:scale-105 inline-flex items-center gap-3 shadow-xl"
                            >
                                <span>Accede Gratis a la Guía Completa</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-4">
                        Personas reales. Resultados reales.
                    </h2>
                    <p className="text-xl text-center text-slate-600 mb-16">
                        Lee lo que dicen quienes ya transformaron sus vidas
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "Después de 10 años intentando ser constante con el gym, finalmente lo logré. El truco estaba en el sistema de hábitos encadenados. 90 días sin fallar.",
                                name: "María G.",
                                location: "México",
                            },
                            {
                                text: "Dejé de procrastinar mi proyecto. Lo terminé en 3 semanas usando el método de micro-tareas. Cambió todo.",
                                name: "Carlos R.",
                                location: "España",
                            },
                            {
                                text: "Pensaba que era mi personalidad ser desorganizado. Ahora tengo 5 hábitos sólidos que mantienen mi vida en orden.",
                                name: "Andrea M.",
                                location: "Colombia",
                            },
                        ].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
                                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                                <div className="border-t border-slate-200 pt-4">
                                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={handleDownload}
                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all hover:scale-105 inline-flex items-center gap-3"
                        >
                            <span>Empieza Tu Transformación Ahora</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Tu vida dentro de 30 días puede ser COMPLETAMENTE diferente
                    </h2>
                    <p className="text-2xl mb-4 font-light">O puedes seguir igual.</p>
                    <p className="text-xl mb-12">
                        La diferencia está en la decisión que tomes <span className="font-bold">HOY</span>.
                    </p>

                    <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Gift className="w-10 h-10 text-blue-600" />
                            <h3 className="text-2xl md:text-3xl font-bold">Descarga GRATIS:</h3>
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-8">
                            "Guía Completa: El Sistema de los 30 Días para Construir Hábitos Inquebrantables"
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                            {[
                                "El framework completo paso a paso",
                                "Plantillas de seguimiento diario",
                                "Checklist de implementación inmediata",
                                "Casos de estudio reales",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-600 mb-8">
                            No necesitas tu tarjeta de crédito.
                            <br />
                            Solo tu email y 30 días de compromiso contigo mismo.
                        </p>

                        <div className="max-w-md mx-auto mb-6">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-900"
                                />
                                <button
                                    onClick={handleDownload}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
                                >
                                    Descargar
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            <span>⏰ Más de {recentDownloads} personas descargaron esto en las últimas 24h</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {showExitPopup && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-md relative">
                        <button
                            onClick={() => setShowExitPopup(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <AlertCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                            ❗ ESPERA - ¿Te vas sin tu guía gratuita?
                        </h3>
                        <p className="text-slate-600 mb-6 text-center">
                            Antes de irte, descarga:
                            <br />
                            <span className="font-semibold">"5 Hábitos Que Puedes Empezar HOY (Y Ver Resultados Esta Semana)"</span>
                        </p>

                        <div className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Tu mejor email"
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            />
                            <button
                                onClick={handleDownload}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
                            >
                                Descargar Ahora
                            </button>
                        </div>

                        <p className="text-xs text-slate-400 mt-4 text-center">
                            P.D. Odiamos el spam tanto como tú. Solo contenido de valor, sin relleno.
                        </p>
                    </div>
                </div>
            )}

            <div className="fixed bottom-6 right-6 z-40">
                <div className="relative group">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110">
                        <Brain className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-full right-0 mb-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        ¿No sabes por dónde empezar?
                    </div>
                </div>
            </div>

            <Chatbot />
        </div>
    )
}
