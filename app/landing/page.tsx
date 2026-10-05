"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Download, BookOpen, Sparkles, AlertCircle, Check, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LandingPage() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !email.includes("@")) {
            setStatus("error")
            setMessage("Por favor ingresá un email válido.")
            return
        }

        setStatus("loading")
        setMessage("")

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (res.ok) {
                setStatus("success")
                setMessage("¡Excelente! Te enviamos la guía a tu correo. Podés descargarla abajo directamente.")
            } else {
                setStatus("error")
                setMessage(data.error || "Hubo un problema. Intentá nuevamente.")
            }
        } catch (err) {
            setStatus("error")
            setMessage("Ocurrió un error al enviar tu solicitud. Reintentalo en unos momentos.")
        }
    }

    return (
        <div className="min-h-screen bg-[#FEFEFE] dark:bg-[#090A0D] text-[#090A0D] dark:text-[#FEFEFE] font-sans antialiased selection:bg-[#F2884B] selection:text-white">
            <Header />

            {/* HERO SECTION - DARK OBSIDIAN STYLE FROM PDF */}
            <section className="relative py-16 md:py-24 bg-[#090A0D] text-[#FEFEFE] overflow-hidden border-b border-white/10">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#F2884B]/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Copy Column */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2884B]/15 border border-[#F2884B]/30 text-[#F2884B] text-xs font-bold tracking-widest uppercase">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Guía Gratuita · PDF</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] uppercase">
                                El Arte de <br />
                                <span className="text-[#F2884B]">Diseñar Hábitos</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                                Por qué los hábitos más beneficiosos se rompen y cómo construir el próximo con éxito. Sin depender de la motivación: con un diseño que funcione en tu día a día.
                            </p>

                            {/* Lead Capture Form */}
                            <div className="pt-4 max-w-xl">
                                {status === "success" ? (
                                    <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 p-6 rounded-2xl space-y-4 animate-in fade-in">
                                        <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
                                            <CheckCircle2 className="w-6 h-6 shrink-0" />
                                            ¡Guía enviada con éxito!
                                        </div>
                                        <p className="text-sm text-emerald-300/90 leading-relaxed">
                                            Revisá tu bandeja de entrada en <strong>{email}</strong> (y la carpeta de promociones por las dudas). También podés descargar el PDF directamente haciendo clic acá:
                                        </p>
                                        <a
                                            href="#descarga-directa"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                alert("¡Descargando guía! Gracias por sumarte a Ciclo de Hábitos.")
                                            }}
                                            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition-all shadow-lg text-sm"
                                        >
                                            <Download className="w-4 h-4" />
                                            Descargar PDF Gratis Ahora
                                        </a>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <label htmlFor="hero-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                            Tu email
                                        </label>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <input
                                                id="hero-email"
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="nombre@email.com"
                                                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#F2884B] focus:ring-1 focus:ring-[#F2884B] text-base transition-all"
                                            />
                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="bg-[#F2884B] hover:bg-[#e07538] text-white font-bold px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#F2884B]/25 hover:shadow-[#F2884B]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-base shrink-0 disabled:opacity-50"
                                            >
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        <span>Enviando...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Quiero la guía gratis</span>
                                                        <ArrowRight className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        {status === "error" && (
                                            <p className="text-red-400 text-sm flex items-center gap-1.5 pt-1">
                                                <AlertCircle className="w-4 h-4" />
                                                {message}
                                            </p>
                                        )}

                                        <p className="text-xs text-slate-400 pt-1">
                                            Te llega al instante a tu correo. Sin spam, y podés darte de baja cuando quieras.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* PDF Cover Book Mockup Visual */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#F2884B]/30 to-blue-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000" />
                                
                                <div className="relative w-[280px] sm:w-[320px] aspect-[1/1.4] bg-gradient-to-b from-[#16181f] via-[#0d0e14] to-[#1a0f0a] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transform group-hover:-translate-y-1 transition duration-500">
                                    {/* Book Spine Edge Effect */}
                                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-white/15 to-transparent border-r border-white/10" />

                                    <div className="space-y-4 pt-2">
                                        <div className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                                            Ciclo de Hábitos
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-none">
                                            El Arte de <br />
                                            <span className="text-[#F2884B]">Diseñar</span> <br />
                                            Hábitos
                                        </h2>
                                    </div>

                                    {/* Spiral Habit Symbol */}
                                    <div className="my-auto flex justify-center py-6">
                                        <div className="relative w-20 h-20 rounded-full border border-white/20 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-full border border-[#F2884B]/60 flex items-center justify-center">
                                                <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 bg-[#F2884B] rounded-full animate-ping" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pb-2">
                                        <p className="text-[10px] sm:text-[11px] text-slate-400 leading-snug tracking-wider uppercase font-medium">
                                            Por qué los más beneficiosos se rompen y cómo construir el próximo con éxito.
                                        </p>
                                        <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                            <span className="text-[9px] tracking-widest text-[#F2884B] uppercase font-bold">Guía Práctica</span>
                                            <span className="text-xs text-white/40 font-mono">PDF</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 1 - NO TE FALTA FUERZA DE VOLUNTAD */}
            <section className="py-20 md:py-28 bg-[#f8fafc] dark:bg-[#0d0e12] border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c85a28] dark:text-[#F2884B] leading-tight tracking-tight uppercase">
                                No te falta fuerza de voluntad. <br />
                                <span className="text-slate-900 dark:text-white">Te falta diseño.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 space-y-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                            <p>
                                La mayoría intenta cambiar sus hábitos apoyándose en la motivación. El problema es que la motivación sube, baja y casi siempre se agota.
                            </p>
                            <p>
                                Lo que sostiene a un hábito es su estructura: <strong className="font-semibold text-slate-900 dark:text-white">una señal clara, una acción pequeña y una recompensa inmediata</strong>. Cuando una de esas piezas falla, el ciclo se rompe, aunque tengas todas las ganas.
                            </p>
                            <div className="p-6 bg-orange-500/10 border-l-4 border-[#F2884B] rounded-r-2xl font-semibold text-slate-900 dark:text-white">
                                En esta guía aprendés a diseñar esa estructura, paso a paso.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 - NO SON 21 DÍAS / 66 DÍAS STAT */}
            <section className="py-20 md:py-28 bg-white dark:bg-[#090A0D] border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-5 bg-[#f8fafc] dark:bg-[#13151c] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center lg:text-left shadow-sm">
                            <div className="text-xs font-bold tracking-widest text-[#F2884B] uppercase mb-2">
                                No son 21 días
                            </div>
                            <div className="text-7xl sm:text-8xl font-black text-[#ba471b] dark:text-[#F2884B] leading-none mb-3">
                                66
                            </div>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                días en promedio
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                            <p>
                                El famoso "un hábito se forma en 21 días" no salió de un estudio: nació de una observación clínica del cirujano Maxwell Maltz en los años 60 sobre cuánto tardaban sus pacientes en acostumbrarse a su nuevo aspecto.
                            </p>
                            <p>
                                La investigación rigurosa de <strong className="font-semibold text-slate-900 dark:text-white">Phillippa Lally (University College London)</strong> siguió a 96 personas durante 12 semanas y encontró que un hábito tarda en promedio <strong className="font-semibold text-slate-900 dark:text-white">66 días</strong> en volverse automático.
                            </p>
                            <p className="text-base sm:text-lg italic text-slate-500 dark:text-slate-400">
                                En la guía te explico qué significa eso para vos y cómo estructurar tu proceso para no abandonar en el camino.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 - QUÉ HAY ADENTRO (6 MODULES GRID) */}
            <section className="py-20 md:py-28 bg-[#f8fafc] dark:bg-[#0d0e12] border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <div className="text-xs font-bold tracking-widest text-[#F2884B] uppercase">
                            Qué hay adentro
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                            Todo lo que necesitás para diseñar tu próximo hábito
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                num: "01",
                                title: "El mito de los 21 días",
                                desc: "De dónde salió esa cifra y qué dice la investigación sobre el tiempo real que lleva automatizar un hábito.",
                            },
                            {
                                num: "02",
                                title: "El bucle que funciona",
                                desc: "Señal, rutina y recompensa: las tres piezas que hacen que un hábito se sostenga solo.",
                            },
                            {
                                num: "03",
                                title: "La versión mínima",
                                desc: "Cómo reducir cualquier hábito a la acción más pequeña que podés repetir incluso en días difíciles.",
                            },
                            {
                                num: "04",
                                title: "Las 4 semanas del hábito",
                                desc: "Qué esperar en cada etapa para no frustrarte cuando aparecen los baches inevitables.",
                            },
                            {
                                num: "05",
                                title: "Por qué los hábitos fallan",
                                desc: "Cómo detectar qué pieza del diseño se rompió y ajustarla sin empezar de cero.",
                            },
                            {
                                num: "06",
                                title: "Tu hoja de diseño",
                                desc: "Una plantilla editable para aplicar el método a un hábito concreto, más tres reglas para que perdure.",
                            },
                        ].map((module, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-[#13151c] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#F2884B]/40 transition-all group flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <span className="text-3xl font-black text-[#F2884B] tracking-wider block">
                                        {module.num}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#F2884B] transition-colors">
                                        {module.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                                        {module.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 - UN ADELANTO: EL BUCLE QUE FUNCIONA */}
            <section className="py-20 md:py-28 bg-[#090A0D] text-white border-b border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F2884B]/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <div className="text-xs font-bold tracking-widest text-[#F2884B] uppercase">
                            Un Adelanto
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
                            El Bucle que Funciona
                        </h2>
                        <p className="text-lg text-slate-400 font-light">
                            Todo hábito duradero se sostiene sobre tres piezas. Cuando encajan, el hábito se vuelve fácil de mantener y difícil de romper.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "1",
                                name: "Señal",
                                desc: "El momento que dispara el hábito: algo que ya pasa en tu día a día.",
                                quote: '"Después de lavarme los dientes..."',
                            },
                            {
                                step: "2",
                                name: "Rutina",
                                desc: "La acción que querés convertir en hábito, clara y ridículamente pequeña.",
                                quote: '"...respiro profundo 3 veces."',
                            },
                            {
                                step: "3",
                                name: "Recompensa",
                                desc: "El cierre inmediato que hace que tu cerebro quiera repetirlo mañana.",
                                quote: '"Lo marco como hecho."',
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-[#13151c] p-8 rounded-3xl border border-white/10 hover:border-[#F2884B]/50 transition-all space-y-6 relative flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2884B]/20 text-[#F2884B] font-bold flex items-center justify-center text-sm border border-[#F2884B]/30">
                                        {card.step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {card.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                                        {card.desc}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/10 text-[#F2884B] italic text-sm font-medium">
                                    {card.quote}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 - FINAL CTA FORM */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-[#090A0D] to-[#12141c] text-white relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                    <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight">
                        Empezá pequeño. <br />
                        <span className="text-[#F2884B]">Empezá esta semana.</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Bajate la guía, completá la hoja de diseño con un solo hábito y dale estructura a eso que tenés en mente hace tiempo.
                    </p>

                    <div className="bg-[#181a24] p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl max-w-2xl mx-auto">
                        {status === "success" ? (
                            <div className="space-y-4 text-emerald-300">
                                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                                <h3 className="text-2xl font-bold text-white">¡Guía Lista para Descargar!</h3>
                                <p className="text-sm text-slate-300">
                                    Enviamos la copia a tu casilla de correo. Podés abrir tu guía en PDF en este botón:
                                </p>
                                <button
                                    onClick={() => alert("¡Descargando guía en PDF! Gracias por confiar en Ciclo de Hábitos.")}
                                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center gap-2 text-base"
                                >
                                    <Download className="w-5 h-5" />
                                    Descargar Guía PDF
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                <label htmlFor="footer-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Tu email
                                </label>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        id="footer-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="nombre@email.com"
                                        className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#F2884B] focus:ring-1 focus:ring-[#F2884B] text-base"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="bg-[#F2884B] hover:bg-[#e07538] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                                    >
                                        {status === "loading" ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                <span>Descargar la guía gratis</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm flex items-center gap-1.5 pt-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {message}
                                    </p>
                                )}

                                <p className="text-xs text-slate-400 text-center sm:text-left pt-2">
                                    Sin spam. Podés darte de baja cuando quieras.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
