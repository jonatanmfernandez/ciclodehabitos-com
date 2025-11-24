import { ArrowRight, BookOpen, Mail, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Chatbot } from "@/components/chatbot"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getSortedPostsData } from "@/lib/blog"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  const featuredArticles = getSortedPostsData().slice(0, 3)


  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Comunidad & Crecimiento
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
            Más que hábitos, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              construimos un estilo de vida.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Un espacio dedicado a la ciencia del comportamiento, el crecimiento personal y la comunidad.
            Sin fórmulas mágicas, solo estrategias reales para personas reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 shadow-lg">
              Leer Artículos
              <BookOpen className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#newsletter" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300">
              Suscribirse Gratis
              <Mail className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Últimas Publicaciones</h2>
              <p className="text-slate-600 text-lg">Explora nuestros artículos más recientes sobre hábitos y productividad.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
              Ver todo el blog <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, idx) => (
              <article key={idx} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
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
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} de lectura</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-blue-600 font-medium hover:underline">
                    Leer más <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition">
              Ver todo el blog <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tu dosis semanal de claridad mental.
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Cada martes, recibe un correo corto con 3 ideas prácticas, 2 citas inspiradoras y 1 pregunta para reflexionar.
            Sin spam, solo valor condensado para mejorar tus hábitos.
          </p>

          <NewsletterForm />
        </div>
      </section>

      {/* Join Conversation Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Únete a la conversación
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Síguenos en nuestras redes sociales y no te pierdas ningún consejo para mejorar tu vida.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="#" className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2">
              Seguir en Instagram
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <Chatbot />
    </div>
  )
}
