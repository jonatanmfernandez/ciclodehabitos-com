import Link from "next/link"
import { getSortedPostsData } from "@/lib/blog"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  const featuredArticles = getSortedPostsData().slice(0, 3)

  return (
    <div className="min-h-screen bg-paper text-ink font-serif text-[17px] leading-[1.8] overflow-x-hidden relative">
      {/* GRAIN EFFECT */}
      <div 
        className="fixed inset-0 pointer-events-none z-[200] opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`
        }}
      />

      {/* NAV */}
      <nav className="sticky top-0 z-[100] bg-ink flex justify-between items-center py-[18px] px-6 md:px-12 border-b border-warm/15">
        <Link href="/" className="font-playfair text-[15px] font-black tracking-[0.08em] uppercase text-warm hover:text-warm-dark transition-colors">
          Ciclo de Hábitos
        </Link>
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          <li><Link href="/blog" className="text-[12px] tracking-[0.12em] uppercase text-paper/55 font-mono hover:text-warm transition-colors">Blog</Link></li>
          <li><Link href="/blog?category=Ciencia+del+Comportamiento" className="text-[12px] tracking-[0.12em] uppercase text-paper/55 font-mono hover:text-warm transition-colors">Ciencia</Link></li>
          <li><Link href="/blog?category=Productividad" className="text-[12px] tracking-[0.12em] uppercase text-paper/55 font-mono hover:text-warm transition-colors">Productividad</Link></li>
          <li><Link href="/about" className="text-[12px] tracking-[0.12em] uppercase text-paper/55 font-mono hover:text-warm transition-colors">Sobre</Link></li>
        </ul>
        <Link href="#newsletter" className="font-mono text-[11px] tracking-[0.1em] uppercase bg-warm text-ink py-[9px] px-[22px] font-medium transition-colors hover:bg-[#dfc085]">
          Newsletter gratis
        </Link>
      </nav>

      {/* HERO */}
      <section className="min-h-[92vh] grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
        <div className="bg-ink py-20 px-8 lg:px-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -bottom-[80px] -left-[80px] w-[320px] h-[320px] rounded-full bg-neuro opacity-20" />
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm mb-8 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-8 h-px bg-warm" />
            Ciencia del Comportamiento · Desde Buenos Aires
          </div>
          <h1 className="font-playfair text-[clamp(38px,4.5vw,64px)] font-black leading-[1.08] tracking-[-0.03em] text-paper mb-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Tus hábitos no fallan<br/>por falta de <em className="text-warm italic">voluntad.</em><br/>Fallan por falta de sistema.
          </h1>
          <p className="text-[17px] text-paper/60 max-w-[460px] leading-[1.75] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Ciclo de Hábitos traduce la neurociencia y la psicología del comportamiento en estrategias que podés aplicar hoy. Sin motivación mágica. Sin promesas vacías. Solo ciencia aplicada a tu vida real.
          </p>
          <div className="flex flex-wrap gap-4 items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link href="/blog" className="bg-warm text-ink font-mono text-[12px] font-medium tracking-[0.1em] uppercase py-4 px-8 hover:bg-[#dfc085] hover:-translate-y-0.5 transition-all inline-block">
              Explorar el blog →
            </Link>
            <Link href="#sobre" className="font-mono text-[12px] tracking-[0.1em] uppercase text-paper/50 border-b border-paper/20 pb-0.5 hover:text-warm hover:border-warm transition-all">
              Qué es esto
            </Link>
          </div>
        </div>

        <div className="bg-surface py-16 px-8 lg:pl-16 lg:pr-12 flex flex-col justify-center lg:border-l border-t lg:border-t-0 border-light relative">
          <div className="grid grid-cols-3 gap-px bg-light mb-12">
            <div className="bg-surface py-6 px-5 flex flex-col gap-1">
              <div className="font-playfair text-4xl font-black text-neuro leading-none">2K+</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-text">Lectores semanales</div>
            </div>
            <div className="bg-surface py-6 px-5 flex flex-col gap-1">
              <div className="font-playfair text-4xl font-black text-neuro leading-none">20+</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-text">Artículos publicados</div>
            </div>
            <div className="bg-surface py-6 px-5 flex flex-col gap-1">
              <div className="font-playfair text-4xl font-black text-neuro leading-none">100%</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-text">Basado en ciencia</div>
            </div>
          </div>

          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-text mb-5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-light">
            Artículo destacado
          </div>

          {featuredArticles[0] && (
            <div className="bg-ink p-8 mb-5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-warm" />
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-warm mb-3">{featuredArticles[0].category}</div>
              <div className="font-playfair text-lg font-bold leading-tight text-paper mb-3 group-hover:text-warm transition-colors">
                <Link href={`/blog/${featuredArticles[0].slug}`}>{featuredArticles[0].title}</Link>
              </div>
              <div className="text-[13px] text-paper/50 leading-[1.65]">{featuredArticles[0].excerpt}</div>
              <div className="mt-4 flex justify-between font-mono text-[10px] text-paper/30 tracking-[0.08em]">
                <span>{featuredArticles[0].author || "Jonatan Fernandez"}</span>
                <span>⏱ {featuredArticles[0].readTime || "7 min"}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuredArticles.slice(1, 3).map((article, idx) => (
              <div key={idx} className="bg-paper border border-light p-[18px] hover:border-warm transition-colors group">
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-neuro mb-2">{article.category}</div>
                <div className="font-playfair text-[13px] font-bold leading-snug text-ink group-hover:text-neuro transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </div>
                <div className="font-mono text-[9px] text-muted-text mt-2">⏱ {article.readTime || "5 min"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE EL BLOG */}
      <section className="grid grid-cols-1 lg:grid-cols-[320px_1fr] border-y border-light" id="sobre">
        <div className="bg-ink py-16 px-8 lg:py-20 lg:px-12 relative overflow-hidden">
          <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-neuro opacity-30" />
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm mb-8">Acerca del blog</div>
          <h2 className="font-playfair text-4xl font-black leading-[1.15] text-paper mb-7">
            La ciencia del comportamiento, <em className="text-warm italic">sin filtro.</em>
          </h2>
          <div className="border-l-2 border-warm/40 pl-5 font-playfair text-[15px] italic text-paper/50 leading-[1.7] relative z-10">
            "No te elevas al nivel de tus metas. Caes al nivel de tus sistemas." La diferencia entre querer cambiar y cambiar de verdad está en entender cómo funciona tu cerebro.
          </div>
        </div>

        <div className="bg-surface py-16 px-8 lg:py-20 lg:px-20">
          <h2 className="font-playfair text-[28px] font-bold leading-[1.2] mb-5 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[5px] before:w-[3px] before:h-[calc(100%-6px)] before:bg-warm">
            ¿Qué es Ciclo de Hábitos?
          </h2>

          <p className="text-[#2a2018] mb-5 text-[17px] leading-[1.82]">Ciclo de Hábitos nació de una frustración simple: la industria del desarrollo personal vende motivación cuando la ciencia demuestra que la motivación es el recurso menos confiable para el cambio real. Los libros de autoayuda prometen transformaciones en 21 días. Los coaches hablan de mentalidad y actitud positiva. Y la mayoría de las personas termina exactamente donde empezó, creyendo que el problema es que no se esforzaron lo suficiente.</p>

          <p className="text-[#2a2018] mb-5 text-[17px] leading-[1.82]">El problema nunca fue el esfuerzo. Fue el diseño.</p>

          <div className="bg-[#f0ece4] border-l-[3px] border-warm py-5 px-6 my-7 text-[16px] text-[#3a3020] leading-[1.7]">
            La <strong className="text-ink font-semibold">neurociencia del comportamiento</strong> lleva décadas documentando cómo se forman, sostienen y modifican los hábitos. Esa investigación existe. Es accesible. Y tiene implicaciones prácticas concretas que casi nadie está traduciendo al español de forma rigurosa y honesta.
          </div>

          <p className="text-[#2a2018] mb-5 text-[17px] leading-[1.82]">Aquí analizamos cómo los <strong className="text-ink font-semibold">ganglios basales</strong> automatizan el comportamiento, por qué el <strong className="text-ink font-semibold">sistema dopaminérgico</strong> responde a la anticipación y no a la recompensa, y cómo aprovechar la <strong className="text-ink font-semibold">plasticidad neuronal</strong> para construir rutinas que se mantengan sin depender de la fuerza de voluntad. Cada artículo está respaldado por investigación real — con autor, institución y año, nunca con un genérico "estudios muestran".</p>

          <p className="text-[#2a2018] mb-5 text-[17px] leading-[1.82]">Pero Ciclo de Hábitos no es solo un repositorio de papers traducidos. Es un laboratorio de aplicación: cada concepto científico viene acompañado de ejemplos concretos, pasos accionables y una perspectiva honesta sobre qué funciona, qué no, y por qué. Porque entender la teoría sin poder aplicarla es tan inútil como la motivación vacía que criticamos.</p>

          <h2 className="font-playfair text-[28px] font-bold leading-[1.2] mb-5 mt-10 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[5px] before:w-[3px] before:h-[calc(100%-6px)] before:bg-warm">
            Para quién es este blog
          </h2>

          <p className="text-[#2a2018] mb-5 text-[17px] leading-[1.82]">Si ya intentaste cambiar hábitos y fallaste — más de una vez, con más de un método — este blog es para vos. No para darte otro sistema milagroso, sino para ayudarte a entender por qué los anteriores fallaron y qué podés hacer diferente desde la biología, no desde la culpa.</p>

          <p className="text-[#2a2018] mb-5 text-[17px] leading-[1.82]">Ciclo de Hábitos es para <strong className="text-ink font-semibold">profesionales y emprendedores</strong> que quieren construir rutinas sostenibles en medio de agendas reales. Para personas que ya pasaron la etapa de buscar motivación y ahora buscan mecanismos. Para quienes prefieren una respuesta incómoda pero verdadera a una respuesta cómoda pero inútil.</p>
        </div>
      </section>

      {/* QUÉ ENCONTRARÁS */}
      <section className="bg-paper py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline gap-5 mb-14">
          <h2 className="font-playfair text-4xl font-black leading-[1.15]">Qué encontrarás <em className="text-warm italic">aquí</em></h2>
          <div className="hidden md:block flex-1 h-px bg-light" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-light">
          <div className="bg-surface py-10 px-9 hover:bg-[#f0ece4] transition-colors">
            <div className="text-[32px] mb-5">🔬</div>
            <div className="font-playfair text-xl font-bold mb-3.5">Ciencia traducida, no resumida</div>
            <div className="text-[15px] text-muted-text leading-[1.75]">Cada artículo cita investigación real con autor, institución y año. Nunca "estudios muestran". Siempre la fuente, siempre la traducción práctica. La ciencia del comportamiento es accesible — solo hay que explicarla bien.</div>
          </div>
          <div className="bg-surface py-10 px-9 hover:bg-[#f0ece4] transition-colors">
            <div className="text-[32px] mb-5">🧭</div>
            <div className="font-playfair text-xl font-bold mb-3.5">Mitos desmontados, sin piedad</div>
            <div className="text-[15px] text-muted-text leading-[1.75]">Los 21 días para formar un hábito. La fuerza de voluntad como virtud moral. El poder del pensamiento positivo. Cada creencia popular sobre el cambio de comportamiento sometida al escrutinio de la evidencia. Sin condescendencia, sin eufemismos.</div>
          </div>
          <div className="bg-surface py-10 px-9 hover:bg-[#f0ece4] transition-colors">
            <div className="text-[32px] mb-5">⚙️</div>
            <div className="font-playfair text-xl font-bold mb-3.5">Sistemas, no propósitos</div>
            <div className="text-[15px] text-muted-text leading-[1.75]">La diferencia entre querer hacer algo y hacerlo sistemáticamente es el diseño. Aquí encontrarás marcos concretos para construir sistemas de hábitos, gestión del tiempo y toma de decisiones que funcionen cuando la motivación no está disponible.</div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-ink py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-4 mb-12">
            <h2 className="font-playfair text-3xl font-black text-paper">Explorá por <em className="text-warm italic">categoría</em></h2>
            <Link href="/blog" className="font-mono text-[11px] tracking-[0.1em] uppercase text-paper/35 border-b border-paper/15 pb-0.5 hover:text-warm hover:border-warm transition-all self-start md:self-auto">
              Ver todos los artículos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-white/5">
            <Link href="/blog?category=Ciencia+del+Comportamiento" className="bg-[#1a1410] py-10 px-8 flex flex-col gap-4 hover:bg-[#221c16] transition-colors border-t-2 border-transparent hover:border-t-warm no-underline group">
              <div className="text-3xl">🧠</div>
              <div className="font-playfair text-lg font-bold text-paper group-hover:text-warm transition-colors">Ciencia del Comportamiento</div>
              <div className="text-[13px] text-paper/40 leading-[1.65]">Neurociencia, psicología cognitiva y biología del cambio. El porqué detrás de cada hábito, explicado con evidencia real.</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-warm mt-auto pt-4">Ganglios basales · Dopamina · Plasticidad</div>
            </Link>
            <Link href="/blog?category=Productividad" className="bg-[#1a1410] py-10 px-8 flex flex-col gap-4 hover:bg-[#221c16] transition-colors border-t-2 border-transparent hover:border-t-warm no-underline group">
              <div className="text-3xl">⚡</div>
              <div className="font-playfair text-lg font-bold text-paper group-hover:text-warm transition-colors">Productividad</div>
              <div className="text-[13px] text-paper/40 leading-[1.65]">Gestión del tiempo, foco profundo y sistemas de organización basados en cómo funciona realmente la atención humana.</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-warm mt-auto pt-4">Deep work · Time blocking · GTD</div>
            </Link>
            <Link href="/blog?category=Desarrollo+Personal" className="bg-[#1a1410] py-10 px-8 flex flex-col gap-4 hover:bg-[#221c16] transition-colors border-t-2 border-transparent hover:border-t-warm no-underline group">
              <div className="text-3xl">🌱</div>
              <div className="font-playfair text-lg font-bold text-paper group-hover:text-warm transition-colors">Desarrollo Personal</div>
              <div className="text-[13px] text-paper/40 leading-[1.65]">Mentalidad, autoconocimiento y construcción de identidad. Mejora continua sin motivación mágica ni promesas vacías.</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-warm mt-auto pt-4">Identidad · Autocontrol · Mentalidad</div>
            </Link>
            <Link href="/blog?category=Estrategia" className="bg-[#1a1410] py-10 px-8 flex flex-col gap-4 hover:bg-[#221c16] transition-colors border-t-2 border-transparent hover:border-t-warm no-underline group">
              <div className="text-3xl">🎯</div>
              <div className="font-playfair text-lg font-bold text-paper group-hover:text-warm transition-colors">Estrategia</div>
              <div className="text-[13px] text-paper/40 leading-[1.65]">Diseño de entorno, sistemas de decisión y arquitectura del comportamiento para construir una vida más intencional.</div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-warm mt-auto pt-4">Diseño de entorno · Sistemas · Decisiones</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CIENCIA SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-[#f0ece4] py-20 px-8 lg:px-16 flex flex-col justify-center">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neuro mb-6">// Por qué la ciencia importa</div>
          <h2 className="font-playfair text-3xl font-black leading-[1.2] mb-6">El cambio real viene de entender tu cerebro, <em className="text-neuro italic">no de forzarlo.</em></h2>
          <p className="text-[16px] text-muted-text leading-[1.8] mb-4">La fuerza de voluntad es un recurso limitado y agotable. La motivación es fluctuante y poco confiable. Los ganglios basales, en cambio, trabajan las 24 horas, automatizan el 40% de tus acciones y no necesitan que te sientas "listo".</p>
          <p className="text-[16px] text-muted-text leading-[1.8] mb-4">Ciclo de Hábitos parte de esa premisa: el cambio de comportamiento efectivo no requiere superhéroes. Requiere buen diseño.</p>

          <div className="flex flex-col gap-[2px] mt-8 bg-light/50">
            <div className="grid grid-cols-[48px_1fr] gap-4 items-start bg-white py-5 px-6">
              <div className="font-playfair text-[28px] font-black text-neuro/15 leading-none">01</div>
              <div>
                <strong className="block text-[14px] text-ink mb-1">Neurociencia aplicada</strong>
                <span className="text-[13px] text-muted-text leading-[1.55]">Cómo los ganglios basales graban y ejecutan patrones automáticamente.</span>
              </div>
            </div>
            <div className="grid grid-cols-[48px_1fr] gap-4 items-start bg-white py-5 px-6">
              <div className="font-playfair text-[28px] font-black text-neuro/15 leading-none">02</div>
              <div>
                <strong className="block text-[14px] text-ink mb-1">Psicología del comportamiento</strong>
                <span className="text-[13px] text-muted-text leading-[1.55]">Sesgos cognitivos, bucles de hábito y arquitectura de decisiones.</span>
              </div>
            </div>
            <div className="grid grid-cols-[48px_1fr] gap-4 items-start bg-white py-5 px-6">
              <div className="font-playfair text-[28px] font-black text-neuro/15 leading-none">03</div>
              <div>
                <strong className="block text-[14px] text-ink mb-1">Diseño de entorno</strong>
                <span className="text-[13px] text-muted-text leading-[1.55]">Cómo tu contexto determina tu comportamiento — y cómo modificarlo.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neuro py-20 px-8 lg:px-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-[80px] -right-[80px] w-[280px] h-[280px] rounded-full bg-warm/10" />
          <div className="absolute -bottom-[60px] left-0 w-[200px] h-[200px] rounded-full bg-white/5" />
          
          <div className="font-playfair text-7xl md:text-[96px] font-black text-warm leading-none mb-3 relative z-10">40%</div>
          <div className="text-[15px] text-paper/65 leading-[1.7] max-w-[320px] relative z-10 mb-10">de las acciones que realizás cada día son hábitos automáticos ejecutados por los ganglios basales, sin intervención consciente. (Neal, Wood & Quinn · Duke University · 2006)</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] bg-white/10 relative z-10">
            <div className="bg-black/20 p-5">
              <div className="font-playfair text-3xl font-black text-warm leading-none">66</div>
              <div className="text-[12px] text-paper/40 mt-1">días promedio para automatizar un hábito (UCL, 2010)</div>
            </div>
            <div className="bg-black/20 p-5">
              <div className="font-playfair text-3xl font-black text-warm leading-none">≠21</div>
              <div className="text-[12px] text-paper/40 mt-1">días — el mito popular que la ciencia desmonta</div>
            </div>
            <div className="bg-black/20 p-5">
              <div className="font-playfair text-3xl font-black text-warm leading-none">3</div>
              <div className="text-[12px] text-paper/40 mt-1">componentes del bucle del hábito: señal, rutina, recompensa</div>
            </div>
            <div className="bg-black/20 p-5">
              <div className="font-playfair text-3xl font-black text-warm leading-none">∞</div>
              <div className="text-[12px] text-paper/40 mt-1">plasticidad neuronal — el cerebro cambia durante toda la vida</div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="bg-paper py-24 px-6 md:px-12 border-y border-light">
        <div className="max-w-[900px] mx-auto">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-text mb-8 flex items-center gap-3.5 after:content-[''] after:flex-1 after:h-px after:bg-light">Nuestra postura</div>
          <h2 className="font-playfair text-[clamp(32px,4vw,52px)] font-black leading-[1.15] tracking-[-0.02em] mb-10">Creemos que el desarrollo personal<br/><em className="text-warm italic">merece honestidad,</em> no esperanza.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[16px] text-[#2a2018] leading-[1.85] mb-5">La industria del desarrollo personal tiene un problema estructural: vende lo que la gente quiere escuchar, no lo que la evidencia demuestra. "Visualizá el éxito." "Cambiá tu mentalidad." "Solo necesitás querer lo suficiente." Estos mensajes son cómodos, emocionalmente satisfactorios y, para la mayoría de las personas, completamente inútiles como estrategia de cambio real.</p>
              <p className="text-[16px] text-[#2a2018] leading-[1.85] mb-5">No porque las personas que los compran sean débiles o estúpidas. Sino porque el cambio de comportamiento tiene una mecánica neurológica específica que ignora completamente la fuerza de voluntad como factor determinante.</p>
              <div className="border-t-2 border-warm pt-7 mt-5 font-playfair text-[19px] italic text-ink leading-[1.6]">
                "No te elevas al nivel de tus metas. Caes al nivel de tus sistemas." — James Clear
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#2a2018] leading-[1.85] mb-5">En Ciclo de Hábitos partimos de una premisa diferente: el cambio sostenible no se logra esforzándose más, sino diseñando mejor. Diseñando el entorno, la señal, la rutina y la recompensa de forma que el comportamiento deseado sea el camino de menor resistencia, no el de mayor disciplina.</p>
              <p className="text-[16px] text-[#2a2018] leading-[1.85] mb-5">Eso requiere entender cómo funciona el cerebro — y esa comprensión está disponible en la literatura científica. Solo necesitaba alguien dispuesto a traducirla sin simplificarla demasiado, sin romantizarla y sin convertirla en otro sistema de autoayuda con nombre pegadizo.</p>
              <p className="text-[16px] text-[#2a2018] leading-[1.85] mb-5">Ese es el trabajo que hacemos acá.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink py-24 px-6 md:px-12 text-center" id="newsletter">
        <div className="max-w-[680px] mx-auto">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm mb-6">// Newsletter semanal</div>
          <h2 className="font-playfair text-[38px] font-black leading-[1.15] text-paper mb-4">Una idea de ciencia.<br/><em className="text-warm italic">Cada martes.</em></h2>
          <p className="text-[16px] text-paper/50 leading-[1.75] mb-10">Sin spam. Sin motivación vacía. Solo una idea concreta de la neurociencia o psicología del comportamiento, aplicable a tu vida real, directa a tu bandeja de entrada. Más de 2.000 lectores ya la reciben.</p>
          
          <div className="max-w-[480px] mx-auto mb-5">
            <NewsletterForm variant="editorial" />
          </div>
          
          <div className="font-mono text-[11px] text-paper/25 tracking-[0.08em]">Sin spam · Podés darte de baja cuando quieras · 2.000+ lectores</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0c0a08] pt-14 pb-8 px-6 md:px-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-14">
          <div>
            <div className="font-playfair text-[16px] font-black text-warm uppercase tracking-[0.1em] mb-4">Ciclo de Hábitos</div>
            <p className="text-[13px] text-paper/30 leading-[1.75] max-w-[280px]">Ciencia del comportamiento aplicada. Artículos, ensayos y guías para profesionales que quieren construir una vida más intencional sin depender de la motivación.</p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/25 mb-5">Blog</div>
            <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
              <li><Link href="/blog?category=Ciencia+del+Comportamiento" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Ciencia del Comportamiento</Link></li>
              <li><Link href="/blog?category=Productividad" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Productividad</Link></li>
              <li><Link href="/blog?category=Desarrollo+Personal" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Desarrollo Personal</Link></li>
              <li><Link href="/blog?category=Estrategia" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Estrategia</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/25 mb-5">Recursos</div>
            <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
              <li><Link href="/directorio-ia" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Directorio IA</Link></li>
              <li><Link href="/landing" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Recursos gratuitos</Link></li>
              <li><Link href="#newsletter" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/25 mb-5">Legal</div>
            <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
              <li><Link href="/privacidad" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/terminos" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/cookies" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Política de Cookies</Link></li>
              <li><Link href="/aviso-legal" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Aviso Legal</Link></li>
              <li><Link href="/sobre" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Sobre Jonatan Fernandez</Link></li>
              <li><Link href="/contacto" className="text-[13px] text-paper/40 hover:text-warm transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 font-mono text-[10px] tracking-[0.08em] text-paper/20">
          <span>© 2026 Ciclo de Hábitos · ciclodehabitos.com</span>
          <span>Hecho en Buenos Aires, Argentina</span>
        </div>
      </footer>
    </div>
  )
}
