"use client"

import { ArrowRight, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Chatbot } from "@/components/chatbot"

export default function BlogPage() {
  const articles = [
    {
      slug: "metodo-anti-procrastinacion",
      emoji: "🧠",
      title: "El Método Anti-Procrastinación Que Funciona Cuando Nada Más Lo Hace",
      desc: "Descubre por qué la fuerza de voluntad NO es la respuesta y cómo construir sistemas que trabajan para ti automáticamente.",
      time: "7 min",
      category: "Productividad",
      date: "15 Ene 2025",
    },
    {
      slug: "habitos-fortaleza-emocional",
      emoji: "💪",
      title: "9 Hábitos Secretos de Personas con Fortaleza Emocional Inquebrantable",
      desc: "El sistema para no rendirte cuando todo se pone difícil. Aprende las estrategias que usan las personas más resilientes.",
      time: "10 min",
      category: "Mentalidad",
      date: "12 Ene 2025",
    },
    {
      slug: "construir-habito-30-dias",
      emoji: "🎯",
      title: "Cómo Construir Un Hábito Nuevo en 30 Días (Método Científicamente Probado)",
      desc: "La fórmula exacta que usan las personas exitosas para crear hábitos que duran toda la vida.",
      time: "8 min",
      category: "Hábitos",
      date: "10 Ene 2025",
    },
    {
      slug: "regla-dos-minutos",
      emoji: "⚡",
      title: "La Regla de los 2 Minutos: Cómo Vencer la Resistencia Inicial",
      desc: "El truco psicológico que hace que empezar sea 10 veces más fácil. Perfecto para procrastinadores crónicos.",
      time: "5 min",
      category: "Productividad",
      date: "8 Ene 2025",
    },
    {
      slug: "propositos-ano-nuevo",
      emoji: "🔥",
      title: "Por Qué Fallan Tus Propósitos de Año Nuevo (Y Cómo Arreglarlo)",
      desc: "El 92% de las personas abandonan sus propósitos. Descubre qué hace diferente al 8% que sí los cumple.",
      time: "9 min",
      category: "Motivación",
      date: "5 Ene 2025",
    },
    {
      slug: "habito-ancla",
      emoji: "🧘",
      title: "El Poder del Hábito Ancla: Tu Primer Paso Hacia la Transformación",
      desc: "Cómo un solo hábito puede desencadenar una cascada de cambios positivos en tu vida.",
      time: "6 min",
      category: "Hábitos",
      date: "3 Ene 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Ciclo de Hábitos Logo" width={40} height={40} className="w-10 h-10" />
              <span className="font-bold text-xl text-slate-800">Ciclo de Hábitos</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-slate-600 hover:text-blue-600 transition">
                Inicio
              </Link>
              <Link href="/blog" className="text-blue-600 font-semibold">
                Blog
              </Link>
              <Link href="/directorio-ia" className="text-slate-600 hover:text-blue-600 transition">
                Directorio IA
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">
                Contact
              </Link>
            </div>
            <MobileNav />
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Blog de Ciclo de Hábitos</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Contenido práctico y basado en ciencia para transformar tu vida, un hábito a la vez
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link key={idx} href={`/blog/${article.slug}`}>
              <article className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all border border-slate-200 group cursor-pointer h-full">
                <div className="text-5xl mb-4">{article.emoji}</div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.date}</span>
                </div>

                <h2 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{article.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.time} de lectura</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Quieres recibir los mejores artículos directo en tu email?
            </h2>
            <p className="text-blue-100 mb-6">
              Únete a más de 2,800 personas que reciben contenido exclusivo cada semana
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400 text-sm">
            <p>© 2025 Ciclo de Hábitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  )
}
