"use client"

import { Target, Users, TrendingUp, Heart, BookOpen, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
              <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition">
                Blog
              </Link>
              <Link href="/directorio-ia" className="text-slate-600 hover:text-blue-600 transition">
                Directorio IA
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Sobre Ciclo de Hábitos</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ayudamos a personas como tú a romper el ciclo de la procrastinación y construir hábitos que realmente duran
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Historia</h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              Ciclo de Hábitos nació de una frustración personal: después de años intentando "cambiar mi vida" con
              motivación y fuerza de voluntad, me di cuenta de que el problema no era yo.
            </p>
            <p>
              El problema era el <span className="font-bold text-slate-900">sistema</span>.
            </p>
            <p>
              Estudié psicología del comportamiento, neurociencia de hábitos, y probé cada método que encontré. Algunos
              funcionaron. Muchos no. Pero eventualmente descubrí patrones que realmente generaban cambios duraderos.
            </p>
            <p>
              Hoy, más de 2,800 personas han usado estos sistemas para transformar sus vidas. No con motivación
              temporal, sino con estructuras que funcionan incluso en los días difíciles.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-slate-900 mb-2">2,800+</div>
            <div className="text-slate-600">Vidas transformadas</div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
            <div className="text-slate-600">Artículos publicados</div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
            <div className="text-slate-600">Valoración promedio</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-6">
            Democratizar el conocimiento sobre construcción de hábitos y hacer que las estrategias que funcionan estén
            disponibles para todos, no solo para quienes pueden pagar coaches caros o programas de miles de dólares.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 flex-shrink-0 text-blue-200" />
              <div>
                <h3 className="font-bold text-lg mb-2">Contenido Basado en Ciencia</h3>
                <p className="text-blue-100">
                  Todo lo que compartimos está respaldado por investigación y probado en la práctica.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 flex-shrink-0 text-blue-200" />
              <div>
                <h3 className="font-bold text-lg mb-2">Sin Trucos ni Promesas Vacías</h3>
                <p className="text-blue-100">
                  No vendemos soluciones mágicas. Compartimos sistemas que requieren trabajo, pero que funcionan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-10 h-10 text-yellow-500" />
            <h2 className="text-3xl font-bold text-slate-900">Nuestros Valores</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Honestidad Radical",
                desc: "Te decimos la verdad, incluso cuando no es lo que quieres escuchar.",
              },
              {
                title: "Resultados Reales",
                desc: "Nos importan los cambios duraderos, no las métricas de vanidad.",
              },
              {
                title: "Accesibilidad",
                desc: "El conocimiento que cambia vidas debe estar al alcance de todos.",
              },
              {
                title: "Comunidad",
                desc: "Crecemos juntos. Tu éxito es nuestro éxito.",
              },
            ].map((value, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{value.title}</h3>
                  <p className="text-slate-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Listo para empezar?</h2>
          <p className="text-xl text-slate-600 mb-8">Únete a miles de personas que ya están transformando sus vidas</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-xl"
          >
            <span>Descarga la Guía Gratuita</span>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400 text-sm">
            <p>© 2025 Ciclo de Hábitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
