import { ArrowRight, BookOpen, Mail, Clock, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Chatbot } from "@/components/chatbot"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getSortedPostsData } from "@/lib/blog"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  const featuredArticles = getSortedPostsData().slice(0, 6)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
            Ciclo de Hábitos: El Sistema Científico para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Construir Rutinas Inquebrantables.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            Deja de depender de la motivación. Implementa sistemas basados en neurociencia y diseño de entorno para transformar tu productividad de forma sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 shadow-lg">
              Comienza Aquí / Explora el Blog
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. El Problema */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">¿Por qué la mayoría de los hábitos fallan?</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              La industria del desarrollo personal vende soluciones rápidas basadas en la fuerza de voluntad. Pero la ciencia demuestra que la voluntad es un recurso finito.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fricción ambiental</h3>
              <p className="text-slate-600 leading-relaxed">Tu entorno trabaja en tu contra.</p>
            </div>
            <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cerebro reactivo</h3>
              <p className="text-slate-600 leading-relaxed">Luchas contra tus propios ganglios basales.</p>
            </div>
            <div className="bg-slate-100/50 p-8 rounded-2xl border border-slate-200">
              <div className="text-4xl mb-4">🏚️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Falta de sistema</h3>
              <p className="text-slate-600 leading-relaxed">Confías en el entusiasmo, no en la estructura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. La Solución */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Transformación estructural, no motivacional.</h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              Aquí no encontrarás misticismo. Traducimos la complejidad de la plasticidad neuronal en pasos prácticos:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur">
              <div className="text-3xl mb-4">📐</div>
              <h3 className="text-xl font-bold text-white mb-3">Diseño de Entorno</h3>
              <p className="text-slate-300 leading-relaxed text-sm">Cambiamos tu entorno para que no tengas que cambiar tu mente.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Optimización Dopaminérgica</h3>
              <p className="text-slate-300 leading-relaxed text-sm">Entiende cómo tu cerebro responde a la anticipación.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Sistemas de Gestión</h3>
              <p className="text-slate-300 leading-relaxed text-sm">Metodologías como GTD y Second Brain adaptadas a la biología humana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Secciones de Contenido / Categorías */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explora Nuestro Contenido</h2>
            <p className="text-slate-600 text-lg">Sumérgete en nuestras categorías principales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Neurociencia Aplicada', icon: '🔬', color: 'bg-purple-100 text-purple-700', link: '/blog?category=Ciencia+del+Comportamiento', desc: 'Artículos sobre el funcionamiento del cerebro y la conducta.' },
              { name: 'Guías de Productividad', icon: '🛠️', color: 'bg-blue-100 text-blue-700', link: '/blog?category=Productividad', desc: 'Sistemas prácticos para profesionales y creativos.' },
              { name: 'Mentalidad y Sistemas', icon: '🌱', color: 'bg-green-100 text-green-700', link: '/blog?category=Estrategia', desc: 'Cómo construir una vida intencional paso a paso.' },
            ].map((cat, idx) => (
              <Link key={idx} href={cat.link} className="block group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto transition-transform group-hover:scale-110 ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Últimos Artículos (Ahora son 6) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Artículos Recientes</h2>
              <p className="text-slate-600 text-lg">Lo último en nuestro blog.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-700 transition px-6 py-3 bg-blue-50 hover:bg-blue-100 rounded-full">
              Ver todo el blog <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, idx) => (
              <article key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="h-48 bg-slate-200 relative overflow-hidden flex-shrink-0">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-slate-500">
                      <span className="text-4xl opacity-20">Imagen</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{article.readTime} de lectura</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group/link mt-auto">
                    Leer artículo <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 w-full text-lg font-bold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              Ver todo el blog <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. El "Footer" de Confianza */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Sobre Ciclo de Hábitos</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Somos una plataforma dedicada a democratizar la ciencia del comportamiento. Nuestro contenido está rigurosamente investigado para ofrecerte victorias diarias que se acumulan en grandes resultados.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Tu dosis semanal de claridad mental.
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Cada martes, recibe un correo corto con 3 ideas prácticas, 2 citas inspiradoras y 1 pregunta para reflexionar.
            Sin spam, solo valor condensado para mejorar tus hábitos.
          </p>

          <NewsletterForm />
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
