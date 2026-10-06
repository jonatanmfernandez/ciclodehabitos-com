import type { Metadata } from "next"
import { League_Spartan, Open_Sans } from "next/font/google"
import { GuideForm, GuideFormProvider } from "./guide-form"
import styles from "./landing.module.css"

const display = League_Spartan({ subsets: ["latin"], weight: ["700", "800"], variable: "--landing-display", display: "swap" })
const body = Open_Sans({ subsets: ["latin"], style: ["normal", "italic"], variable: "--landing-body", display: "swap" })

export const metadata: Metadata = {
    title: "El arte de diseñar hábitos · Guía gratuita · Ciclo de Hábitos",
    description:
        "Guía gratuita en PDF: por qué los hábitos más beneficiosos se rompen y cómo diseñar el próximo para que dure. Basada en ciencia del comportamiento.",
    alternates: { canonical: "https://ciclodehabitos.com/landing" },
    openGraph: {
        type: "website",
        title: "El arte de diseñar hábitos · Guía gratuita",
        description: "Por qué los hábitos más beneficiosos se rompen y cómo construir el próximo con éxito.",
        siteName: "Ciclo de Hábitos",
    },
}

function Logo({ size, stroke = "currentColor" }: { size: number; stroke?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            <path d="M33 11.5A16 16 0 1 0 33 28.5" />
            <path d="M28 15A10 10 0 1 0 28 25" />
            <path d="M23.5 18.5A4.5 4.5 0 1 0 23.5 21.5" />
        </svg>
    )
}

const CONTENTS = [
    ["El mito de los 21 días", "De dónde salió esa cifra y qué dice la investigación sobre el tiempo real que lleva automatizar un hábito."],
    ["El bucle que funciona", "Señal, rutina y recompensa: las tres piezas que hacen que un hábito se sostenga solo."],
    ["La versión mínima", "Cómo reducir cualquier hábito a la acción más pequeña que podés repetir incluso en días difíciles."],
    ["Las 4 semanas del hábito", "Qué esperar en cada etapa para no frustrarte cuando aparecen los baches."],
    ["Por qué los hábitos fallan", "Cómo detectar qué pieza del diseño se rompió y ajustarla sin empezar de cero."],
    ["Tu hoja de diseño", "Una plantilla editable para aplicar el método a un hábito concreto, más tres reglas para que perdure."],
]

const LOOP = [
    ["Señal", "El momento que dispara el hábito: algo que ya pasa en tu día.", "“Después de lavarme los dientes…”"],
    ["Rutina", "La acción que querés convertir en hábito, clara y pequeña.", "“…respiro profundo 3 veces.”"],
    ["Recompensa", "El cierre inmediato que hace que tu cerebro quiera repetirlo.", "“Lo marco como hecho.”"],
]

export default function LandingPage() {
    return (
        <div className={`${styles.root} ${display.variable} ${body.variable}`}>
            <GuideFormProvider>
                <div className={styles.wrap}>
                    <header className={styles.header}>
                        <a className={styles.brand} href="https://ciclodehabitos.com" aria-label="Ciclo de Hábitos, ir al blog">
                            <Logo size={34} />
                            <span>Ciclo de Hábitos</span>
                        </a>
                        <a className={styles.nav} href="https://ciclodehabitos.com">
                            Ir al blog
                        </a>
                    </header>

                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <div className={styles.eyebrow} style={{ color: "var(--accent)" }}>
                                Guía gratuita · PDF
                            </div>
                            <h1>El arte de diseñar hábitos</h1>
                            <p className={styles.lead}>
                                Por qué los hábitos más beneficiosos se rompen y cómo construir el próximo con éxito. Sin depender de la motivación: con un diseño que funcione en tu día a día.
                            </p>
                            <GuideForm
                                id="email-hero"
                                buttonLabel="Quiero la guía gratis"
                                fine="Te llega al instante a tu correo. Sin spam, y podés darte de baja cuando quieras."
                                okText="Te mandamos la guía. Si no la ves en unos minutos, fijate en Promociones o Spam."
                            />
                        </div>
                        <div className={styles.coverWrap} aria-hidden="true">
                            <div className={styles.cover}>
                                <div style={{ fontSize: 10, letterSpacing: ".4em", color: "#D5D8DE" }}>CICLO DE HÁBITOS</div>
                                <div className={styles.coverTitle}>
                                    EL ARTE DE
                                    <br />
                                    DISEÑAR
                                    <br />
                                    HÁBITOS
                                </div>
                                <svg width="96" height="96" viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="1.4">
                                    <ellipse cx="50" cy="50" rx="44" ry="40" />
                                    <ellipse cx="50" cy="50" rx="40" ry="44" transform="rotate(25 50 50)" />
                                    <ellipse cx="50" cy="52" rx="34" ry="38" transform="rotate(-30 50 50)" />
                                    <ellipse cx="48" cy="50" rx="26" ry="30" transform="rotate(60 50 50)" />
                                    <circle cx="50" cy="50" r="12" />
                                    <path d="M84 8C86 18 82 26 74 30" />
                                </svg>
                                <div className={styles.coverSub}>
                                    POR QUÉ LOS MÁS BENEFICIOSOS SE ROMPEN
                                    <br />Y CÓMO CONSTRUIR EL PRÓXIMO CON ÉXITO.
                                </div>
                                <Logo size={28} stroke="#fff" />
                            </div>
                        </div>
                    </section>
                </div>

                <section className={styles.light}>
                    <div className={`${styles.wrap} ${styles.split}`}>
                        <h2>No te falta fuerza de voluntad. Te falta diseño.</h2>
                        <div className={styles.prose}>
                            <p>La mayoría intenta cambiar sus hábitos apoyándose en la motivación. El problema es que la motivación sube, baja y casi siempre se agota.</p>
                            <p>Lo que sostiene a un hábito es su estructura: una señal clara, una acción pequeña y una recompensa inmediata. Cuando una de esas piezas falla, el ciclo se rompe, aunque tengas todas las ganas.</p>
                            <p style={{ fontWeight: 600, color: "var(--text)" }}>En esta guía aprendés a diseñar esa estructura, paso a paso.</p>
                        </div>
                    </div>
                    <div className={`${styles.wrap} ${styles.stat}`}>
                        <div style={{ flex: "0 1 360px", display: "flex", flexDirection: "column", gap: 4 }}>
                            <div className={styles.eyebrow} style={{ color: "#6B7280" }}>
                                No son 21 días
                            </div>
                            <div className={styles.num}>66</div>
                            <div style={{ fontSize: 20, fontWeight: 600 }}>días en promedio</div>
                        </div>
                        <div className={styles.prose}>
                            <p>El famoso &ldquo;un hábito se forma en 21 días&rdquo; no salió de un estudio: nació de una observación clínica del cirujano Maxwell Maltz en los años 60.</p>
                            <p>La investigación de Phillippa Lally (University College London) siguió a 96 personas durante 12 semanas y encontró que un hábito tarda en promedio 66 días en volverse automático. En la guía te explico qué significa eso para vos y cómo no abandonar en el camino.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.white}>
                    <div className={`${styles.wrap} ${styles.section}`}>
                        <div className={styles.sectionHead}>
                            <div className={styles.eyebrow} style={{ color: "#6B7280" }}>
                                Qué hay adentro
                            </div>
                            <h2 style={{ color: "#1F232B" }}>Todo lo que necesitás para diseñar tu próximo hábito</h2>
                        </div>
                        <div className={styles.grid}>
                            {CONTENTS.map(([title, desc], i) => (
                                <div className={styles.card} key={title}>
                                    <div className={styles.cardNum}>{String(i + 1).padStart(2, "0")}</div>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.loop}>
                    <div className={`${styles.wrap} ${styles.section}`}>
                        <div className={styles.sectionHead}>
                            <div className={styles.eyebrow} style={{ color: "var(--accent)" }}>
                                Un adelanto
                            </div>
                            <h2 style={{ color: "#fff" }}>El bucle que funciona</h2>
                            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted)" }}>
                                Todo hábito duradero se sostiene sobre tres piezas. Cuando encajan, el hábito se vuelve fácil de mantener y difícil de romper.
                            </p>
                        </div>
                        <div className={styles.grid}>
                            {LOOP.map(([title, desc, example], i) => (
                                <div className={styles.card} key={title}>
                                    <div style={{ fontSize: 14, color: "var(--dim)" }}>{i + 1}</div>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                    <p className={styles.example}>{example}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.final} id="descargar">
                    <div className={styles.finalInner}>
                        <h2>Empezá pequeño. Empezá esta semana.</h2>
                        <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--muted)" }}>
                            Bajate la guía, completá la hoja de diseño con un solo hábito y dale estructura a eso que tenés en mente hace tiempo.
                        </p>
                        <div className={styles.finalForm}>
                            <GuideForm
                                id="email-final"
                                buttonLabel="Descargar la guía gratis"
                                fine="Sin spam. Podés darte de baja cuando quieras."
                                okText="La guía ya va en camino."
                            />
                        </div>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <div className={styles.wrap}>
                        <div>Ciclo de Hábitos · Ciencia del comportamiento aplicada a tu día a día</div>
                        <a href="https://ciclodehabitos.com" style={{ textDecoration: "none" }}>
                            ciclodehabitos.com
                        </a>
                    </div>
                </footer>
            </GuideFormProvider>
        </div>
    )
}
