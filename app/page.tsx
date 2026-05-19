import { BookOpen, Brain, Zap, Target, ArrowRight, Clock, ShieldCheck, Rocket, Sparkles, Mail } from "lucide-react"
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
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-white dark:from-blue-900/20 dark:via-background dark:to-background -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Ciencia del Comportamiento
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Tus hábitos no fallan por falta de <span className="text-blue-600 dark:text-blue-500">voluntad.</span><br />
              Fallan por falta de sistema.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
              Ciclo de Hábitos traduce la neurociencia y la psicología del comportamiento en estrategias que podés aplicar hoy. Sin motivación mágica. Sin promesas vacías. Solo ciencia aplicada a tu vida real.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/20">
                Explorar el blog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#sobre" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-slate-100 rounded-full hover:bg-slate-200">
                Qué es esto
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-1">2K+</div>
                <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">Lectores semanales</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-1">20+</div>
                <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">Artículos publicados</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-500 mb-1">100%</div>
                <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">Basado en ciencia</div>
              </div>
            </div>

            {/* Featured Article */}
            {featuredArticles[0] && (
              <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110" />
                <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">Artículo Destacado</div>
                <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-blue-300 transition-colors">
                  <Link href={`/blog/${featuredArticles[0].slug}`}>{featuredArticles[0].title}</Link>
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{featuredArticles[0].excerpt}</p>
                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredArticles[0].readTime}</span>
                  <Link href={`/blog/${featuredArticles[0].slug}`} className="text-blue-400 hover:text-blue-300 flex items-center">Leer más <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Sobre El Blog */}
      <section id="sobre" className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div className="relative">
              <div className="sticky top-24">
                <div className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase mb-4">Acerca del blog</div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">La ciencia del comportamiento, <span className="text-blue-600 dark:text-blue-500">sin filtro.</span></h2>
                <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl text-slate-700 italic font-medium leading-relaxed">
                  "No te elevas al nivel de tus metas. Caes al nivel de tus sistemas." La diferencia entre querer cambiar y cambiar de verdad está en entender cómo funciona tu cerebro.
                </div>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></span> ¿Qué es Ciclo de Hábitos?
              </h3>
              <p>
                Ciclo de Hábitos nació de una frustración simple: la industria del desarrollo personal vende motivación cuando la ciencia demuestra que la motivación es el recurso menos confiable para el cambio real. Los libros de autoayuda prometen transformaciones en 21 días. Los coaches hablan de mentalidad y actitud positiva. Y la mayoría de las personas termina exactamente donde empezó, creyendo que el problema es que no se esforzaron lo suficiente.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">El problema nunca fue el esfuerzo. Fue el diseño.</p>
              
              <div className="my-8 p-8 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-800 dark:text-slate-200">
                La <strong className="font-semibold">neurociencia del comportamiento</strong> lleva décadas documentando cómo se forman, sostienen y modifican los hábitos. Esa investigación existe. Es accesible. Y tiene implicaciones prácticas concretas que casi nadie está traduciendo al español de forma rigurosa y honesta.
              </div>

              <p>
                Aquí analizamos cómo los <strong className="font-semibold">ganglios basales</strong> automatizan el comportamiento, por qué el <strong className="font-semibold">sistema dopaminérgico</strong> responde a la anticipación y no a la recompensa, y cómo aprovechar la <strong className="font-semibold">plasticidad neuronal</strong> para construir rutinas que se mantengan sin depender de la fuerza de voluntad. Cada artículo está respaldado por investigación real — con autor, institución y año, nunca con un genérico "estudios muestran".
              </p>
              <p>
                Pero Ciclo de Hábitos no es solo un repositorio de papers traducidos. Es un laboratorio de aplicación: cada concepto científico viene acompañado de ejemplos concretos, pasos accionables y una perspectiva honesta sobre qué funciona, qué no, y por qué. Porque entender la teoría sin poder aplicarla es tan inútil como la motivación vacía que criticamos.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-12 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span> Para quién es este blog
              </h3>
              <p>
                Si ya intentaste cambiar hábitos y fallaste — más de una vez, con más de un método — este blog es para vos. No para darte otro sistema milagroso, sino para ayudarte a entender por qué los anteriores fallaron y qué podés hacer diferente desde la biología, no desde la culpa.
              </p>
              <p>
                Ciclo de Hábitos es para <strong className="font-semibold">profesionales y emprendedores</strong> que quieren construir rutinas sostenibles en medio de agendas reales. Para personas que ya pasaron la etapa de buscar motivación y ahora buscan mecanismos. Para quienes prefieren una respuesta incómoda pero verdadera a una respuesta cómoda pero inútil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Qué encontrarás */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Qué encontrarás <span className="text-blue-600 dark:text-blue-500">aquí</span></h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🔬</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Ciencia traducida, no resumida</h3>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">Cada artículo cita investigación real con autor, institución y año. Nunca "estudios muestran". Siempre la fuente, siempre la traducción práctica. La ciencia del comportamiento es accesible — solo hay que explicarla bien.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center text-3xl mb-6">🧭</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Mitos desmontados, sin piedad</h3>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">Los 21 días para formar un hábito. La fuerza de voluntad como virtud moral. El poder del pensamiento positivo. Cada creencia popular sobre el cambio de comportamiento sometida al escrutinio de la evidencia.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center text-3xl mb-6">⚙️</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Sistemas, no propósitos</h3>
              <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">La diferencia entre querer hacer algo y hacerlo sistemáticamente es el diseño. Aquí encontrarás marcos concretos para construir sistemas de hábitos, gestión del tiempo y toma de decisiones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categorías */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Explorá por <span className="text-blue-400">categoría</span></h2>
            <Link href="/blog" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all inline-flex items-center backdrop-blur">
              Ver todos los artículos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog?category=Ciencia+del+Comportamiento" className="group bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all backdrop-blur">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">🧠</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Ciencia del Comportamiento</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Neurociencia, psicología cognitiva y biología del cambio. El porqué detrás de cada hábito, explicado con evidencia real.</p>
              <div className="text-xs font-bold text-blue-400/70 tracking-widest uppercase">Ganglios basales · Dopamina</div>
            </Link>
            <Link href="/blog?category=Productividad" className="group bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all backdrop-blur">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">⚡</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Productividad</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Gestión del tiempo, foco profundo y sistemas de organización basados en cómo funciona realmente la atención humana.</p>
              <div className="text-xs font-bold text-blue-400/70 tracking-widest uppercase">Deep work · Time blocking</div>
            </Link>
            <Link href="/blog?category=Desarrollo+Personal" className="group bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all backdrop-blur">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">🌱</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Desarrollo Personal</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Mentalidad, autoconocimiento y construcción de identidad. Mejora continua sin motivación mágica ni promesas vacías.</p>
              <div className="text-xs font-bold text-blue-400/70 tracking-widest uppercase">Identidad · Autocontrol</div>
            </Link>
            <Link href="/blog?category=Estrategia" className="group bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all backdrop-blur">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">🎯</div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Estrategia</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Diseño de entorno, sistemas de decisión y arquitectura del comportamiento para construir una vida más intencional.</p>
              <div className="text-xs font-bold text-blue-400/70 tracking-widest uppercase">Diseño de entorno · Sistemas</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Ciencia Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-500 uppercase mb-4">Por qué la ciencia importa</div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">El cambio real viene de entender tu cerebro, <span className="text-blue-600 dark:text-blue-500">no de forzarlo.</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 font-light leading-relaxed">
                La fuerza de voluntad es un recurso limitado y agotable. La motivación es fluctuante y poco confiable. Los ganglios basales, en cambio, trabajan las 24 horas, automatizan el 40% de tus acciones y no necesitan que te sientas "listo".
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 font-light leading-relaxed">
                Ciclo de Hábitos parte de esa premisa: el cambio de comportamiento efectivo no requiere superhéroes. Requiere buen diseño.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center font-black text-xl shrink-0">01</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Neurociencia aplicada</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Cómo los ganglios basales graban y ejecutan patrones automáticamente.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center font-black text-xl shrink-0">02</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Psicología del comportamiento</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Sesgos cognitivos, bucles de hábito y arquitectura de decisiones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center font-black text-xl shrink-0">03</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Diseño de entorno</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Cómo tu contexto determina tu comportamiento — y cómo modificarlo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20" />
              
              <div className="text-7xl lg:text-8xl font-black text-blue-400 mb-4 relative z-10">40%</div>
              <p className="text-lg text-slate-300 mb-12 relative z-10 leading-relaxed">
                de las acciones que realizás cada día son hábitos automáticos ejecutados por los ganglios basales, sin intervención consciente. <span className="block text-sm text-slate-500 mt-2">(Neal, Wood & Quinn · Duke University · 2006)</span>
              </p>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-black text-white mb-2">66</div>
                  <div className="text-xs text-slate-400">días promedio para automatizar un hábito (UCL)</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-black text-white mb-2">≠21</div>
                  <div className="text-xs text-slate-400">días — el mito popular que la ciencia desmonta</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-black text-white mb-2">3</div>
                  <div className="text-xs text-slate-400">componentes del bucle: señal, rutina, recompensa</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <div className="text-3xl font-black text-white mb-2">∞</div>
                  <div className="text-xs text-slate-400">plasticidad neuronal — el cerebro cambia siempre</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Manifiesto */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Nuestra postura</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 leading-tight">
            Creemos que el desarrollo personal <br className="hidden md:block" />
            <span className="text-blue-600 dark:text-blue-500">merece honestidad,</span> no esperanza.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              <p>La industria del desarrollo personal tiene un problema estructural: vende lo que la gente quiere escuchar, no lo que la evidencia demuestra. "Visualizá el éxito." "Cambiá tu mentalidad." "Solo necesitás querer lo suficiente." Estos mensajes son cómodos, emocionalmente satisfactorios y, para la mayoría de las personas, completamente inútiles como estrategia de cambio real.</p>
              <p>No porque las personas que los compran sean débiles o estúpidas. Sino porque el cambio de comportamiento tiene una mecánica neurológica específica que ignora completamente la fuerza de voluntad como factor determinante.</p>
            </div>
            <div className="space-y-6 text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              <p>En Ciclo de Hábitos partimos de una premisa diferente: el cambio sostenible no se logra esforzándose más, sino diseñando mejor. Diseñando el entorno, la señal, la rutina y la recompensa de forma que el comportamiento deseado sea el camino de menor resistencia, no el de mayor disciplina.</p>
              <p>Eso requiere entender cómo funciona el cerebro — y esa comprensión está disponible en la literatura científica. Solo necesitaba alguien dispuesto a traducirla sin simplificarla demasiado, sin romantizarla y sin convertirla en otro sistema de autoayuda con nombre pegadizo. Ese es el trabajo que hacemos acá.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter */}
      <section id="newsletter" className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Una idea de ciencia. <br/> <span className="text-blue-600 dark:text-blue-500">Cada martes.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Sin spam. Sin motivación vacía. Solo una idea concreta de la neurociencia o psicología del comportamiento, aplicable a tu vida real, directa a tu bandeja de entrada.
          </p>

          <NewsletterForm />
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
