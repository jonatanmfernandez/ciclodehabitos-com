"use client"

import { ArrowLeft, Clock, Share2, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const articlesData = {
  "metodo-anti-procrastinacion": {
    emoji: "🧠",
    title: "El Método Anti-Procrastinación Que Funciona Cuando Nada Más Lo Hace",
    desc: "Descubre por qué la fuerza de voluntad NO es la respuesta y cómo construir sistemas que trabajan para ti automáticamente.",
    date: "2025-01-15",
    category: "Productividad",
    time: "7 min",
    content: {
      intro:
        "La procrastinación no es un problema de fuerza de voluntad. Es un problema de diseño. Después de años estudiando la ciencia del comportamiento, he descubierto que las personas más productivas no tienen más disciplina que tú, simplemente han diseñado sistemas que hacen que la acción correcta sea inevitable.",
      sections: [
        {
          title: "Por Qué Falla la Fuerza de Voluntad",
          content:
            "La fuerza de voluntad es como un músculo que se agota. Cada decisión que tomas durante el día consume una pequeña cantidad de tu reserva mental. Para cuando llegas a la tarde, tu capacidad de resistir la tentación está prácticamente agotada. Por eso es tan fácil procrastinar en las tareas importantes que requieren esfuerzo mental.",
        },
        {
          title: "El Sistema de Fricción Inversa",
          content:
            "En lugar de depender de la motivación, necesitas crear un entorno donde hacer lo correcto sea más fácil que procrastinar. Esto significa aumentar la fricción para las distracciones y reducirla para las acciones productivas. Por ejemplo, si quieres escribir más, deja tu computadora abierta en tu escritorio con el documento ya abierto. Si quieres evitar las redes sociales, desinstala las apps de tu teléfono.",
        },
        {
          title: "La Regla de los 2 Minutos",
          content:
            "Cuando una tarea te parezca abrumadora, comprométete a trabajar en ella solo 2 minutos. La resistencia inicial es el mayor obstáculo. Una vez que empiezas, el impulso te lleva naturalmente a continuar. Esta técnica aprovecha la ley de inercia: un objeto en movimiento tiende a permanecer en movimiento.",
        },
        {
          title: "Implementación Práctica",
          content:
            "Identifica tu tarea más importante del día. Elimina todas las distracciones de tu entorno. Configura un temporizador de 2 minutos. Empieza sin expectativas de terminar. Celebra el simple hecho de haber comenzado. Repite este proceso hasta que se convierta en automático.",
        },
      ],
      conclusion:
        "El secreto no está en tener más disciplina, sino en diseñar un sistema donde la procrastinación sea más difícil que la acción. Empieza hoy con una sola tarea y aplica el método de fricción inversa. Los resultados te sorprenderán.",
    },
  },
  "habitos-fortaleza-emocional": {
    emoji: "💪",
    title: "9 Hábitos Secretos de Personas con Fortaleza Emocional Inquebrantable",
    desc: "El sistema para no rendirte cuando todo se pone difícil. Aprende las estrategias que usan las personas más resilientes.",
    date: "2025-01-12",
    category: "Mentalidad",
    time: "10 min",
    content: {
      intro:
        "La fortaleza emocional no es algo con lo que naces, es algo que construyes. Las personas más resilientes del mundo no tienen menos problemas que tú, simplemente han desarrollado hábitos mentales que les permiten navegar las tormentas de la vida sin desmoronarse.",
      sections: [
        {
          title: "1. Practican la Aceptación Radical",
          content:
            "No luchan contra la realidad. Cuando algo malo sucede, lo aceptan completamente antes de buscar soluciones. Esta aceptación no es resignación, es el primer paso para el cambio real.",
        },
        {
          title: "2. Separan Hechos de Interpretaciones",
          content:
            "Entienden que los eventos son neutrales, solo nuestras interpretaciones les dan significado. Practican observar sus pensamientos sin identificarse con ellos, creando espacio entre el estímulo y la respuesta.",
        },
        {
          title: "3. Cultivan una Red de Apoyo Sólida",
          content:
            "No intentan ser fuertes solos. Invierten tiempo en construir relaciones profundas y significativas. Saben pedir ayuda cuando la necesitan y ofrecerla generosamente cuando otros la requieren.",
        },
        {
          title: "4. Mantienen Rutinas No Negociables",
          content:
            "Tienen rituales diarios que protegen su salud mental: ejercicio, meditación, journaling. Estas prácticas son su ancla cuando todo lo demás es caos.",
        },
        {
          title: "5. Reencuadran el Fracaso como Feedback",
          content:
            "Ven cada error como información valiosa, no como evidencia de su incompetencia. Preguntan '¿Qué puedo aprender?' en lugar de '¿Por qué siempre me pasa esto?'",
        },
        {
          title: "6. Practican la Gratitud Activamente",
          content:
            "No esperan sentirse agradecidos, crean el hábito de buscar cosas por las que estar agradecidos incluso en los días más oscuros. Esta práctica reconfigura su cerebro para ver oportunidades en lugar de amenazas.",
        },
        {
          title: "7. Establecen Límites Saludables",
          content:
            "Dicen no sin culpa. Protegen su energía como el recurso valioso que es. Entienden que no pueden servir desde un vaso vacío.",
        },
        {
          title: "8. Se Enfocan en lo Controlable",
          content:
            "No desperdician energía en cosas fuera de su control. Identifican claramente qué pueden cambiar y dirigen toda su atención ahí.",
        },
        {
          title: "9. Celebran Pequeñas Victorias",
          content:
            "Reconocen y celebran cada paso adelante, por pequeño que sea. Esta práctica construye momentum y refuerza la creencia en su capacidad de superar desafíos.",
        },
      ],
      conclusion:
        "La fortaleza emocional es el resultado de pequeñas decisiones diarias. No necesitas implementar todos estos hábitos a la vez. Elige uno, practícalo durante 30 días, y observa cómo transforma tu capacidad de enfrentar la adversidad.",
    },
  },
  "construir-habito-30-dias": {
    emoji: "🎯",
    title: "Cómo Construir Un Hábito Nuevo en 30 Días (Método Científicamente Probado)",
    desc: "La fórmula exacta que usan las personas exitosas para crear hábitos que duran toda la vida.",
    date: "2025-01-10",
    category: "Hábitos",
    time: "8 min",
    content: {
      intro:
        "Contrario a la creencia popular, no necesitas 21 días para formar un hábito. La investigación moderna muestra que el tiempo varía según la complejidad del hábito, pero con el sistema correcto, puedes establecer prácticamente cualquier hábito en 30 días.",
      sections: [
        {
          title: "La Ciencia Detrás de la Formación de Hábitos",
          content:
            "Los hábitos se forman a través de un ciclo de tres pasos: señal, rutina y recompensa. Tu cerebro busca constantemente formas de ahorrar energía, y los hábitos son su manera de automatizar comportamientos repetitivos. Una vez que un patrón se vuelve automático, tu cerebro puede desconectarse parcialmente, liberando recursos mentales para otras tareas.",
        },
        {
          title: "Semana 1: Diseño e Inicio",
          content:
            "Define tu hábito con precisión extrema. No 'hacer ejercicio', sino 'hacer 10 flexiones después de cepillarme los dientes'. Identifica la señal que disparará tu hábito. Elige una recompensa inmediata. Empieza ridículamente pequeño, tan pequeño que sea imposible fallar.",
        },
        {
          title: "Semana 2: Construcción de Consistencia",
          content:
            "Tu único objetivo es no romper la cadena. No importa la calidad, importa la consistencia. Si un día solo puedes hacer una flexión, hazla. El cerebro está aprendiendo el patrón, no evaluando el rendimiento. Registra cada día que completas tu hábito, la evidencia visual es poderosa.",
        },
        {
          title: "Semana 3: Expansión Gradual",
          content:
            "Ahora que el hábito está establecido, puedes aumentar gradualmente la intensidad. Pero hazlo en incrementos del 10-20%, no más. El objetivo es mantener la consistencia mientras aumentas el desafío. Si sientes resistencia, reduce la intensidad temporalmente.",
        },
        {
          title: "Semana 4: Consolidación y Automatización",
          content:
            "En esta etapa, el hábito debería sentirse más natural. Enfócate en refinar la ejecución y eliminar cualquier fricción restante. Prepara tu entorno para el éxito a largo plazo. Identifica posibles obstáculos futuros y crea planes de contingencia.",
        },
        {
          title: "El Poder del Apilamiento de Hábitos",
          content:
            "Una vez que un hábito está establecido, puedes usarlo como ancla para construir nuevos hábitos. Por ejemplo: 'Después de hacer mis flexiones, meditaré 2 minutos'. Esta técnica aprovecha los patrones neuronales existentes para crear nuevos comportamientos.",
        },
      ],
      conclusion:
        "La clave para construir hábitos duraderos no es la motivación, es el diseño. Empieza pequeño, mantén la consistencia, y deja que el tiempo haga su magia. En 30 días, habrás transformado un comportamiento consciente en un patrón automático que te servirá por el resto de tu vida.",
    },
  },
  "regla-dos-minutos": {
    emoji: "⚡",
    title: "La Regla de los 2 Minutos: Cómo Vencer la Resistencia Inicial",
    desc: "El truco psicológico que hace que empezar sea 10 veces más fácil. Perfecto para procrastinadores crónicos.",
    date: "2025-01-08",
    category: "Productividad",
    time: "5 min",
    content: {
      intro:
        "El momento más difícil de cualquier tarea no es terminarla, es empezarla. La Regla de los 2 Minutos es una técnica psicológica simple pero poderosa que elimina la resistencia inicial y te pone en movimiento.",
      sections: [
        {
          title: "Cómo Funciona",
          content:
            "Cuando te enfrentes a una tarea que estás posponiendo, comprométete a trabajar en ella solo durante 2 minutos. No 5, no 10, exactamente 2 minutos. Después de ese tiempo, tienes permiso completo para detenerte. Lo fascinante es que en el 80% de los casos, continuarás trabajando mucho más allá de los 2 minutos.",
        },
        {
          title: "La Psicología Detrás del Método",
          content:
            "Nuestro cerebro está diseñado para evitar el esfuerzo. Cuando piensas en una tarea grande, tu amígdala percibe una amenaza y activa la respuesta de evitación. Pero 2 minutos no activan esta alarma. Es un compromiso tan pequeño que tu cerebro no lo percibe como amenazante.",
        },
        {
          title: "Aplicaciones Prácticas",
          content:
            "¿No quieres ir al gimnasio? Comprométete a hacer ejercicio solo 2 minutos. ¿Procrastinando ese informe? Escribe solo durante 2 minutos. ¿No tienes ganas de limpiar? Limpia solo 2 minutos. La clave es ser honesto con el compromiso: realmente puedes detenerte después de 2 minutos.",
        },
        {
          title: "Por Qué Funciona Tan Bien",
          content:
            "Una vez que empiezas, la ley de inercia toma el control. Un objeto en movimiento tiende a permanecer en movimiento. Además, una vez que comienzas, tu cerebro libera dopamina, el neurotransmisor de la motivación, que te impulsa a continuar.",
        },
      ],
      conclusion:
        "La Regla de los 2 Minutos no es un truco para engañarte a ti mismo, es una herramienta para superar la resistencia inicial. Úsala cada vez que te encuentres posponiendo algo importante. Verás cómo esos 2 minutos se convierten en 20, luego en 40, y antes de que te des cuenta, habrás completado la tarea.",
    },
  },
  "propositos-ano-nuevo": {
    emoji: "🔥",
    title: "Por Qué Fallan Tus Propósitos de Año Nuevo (Y Cómo Arreglarlo)",
    desc: "El 92% de las personas abandonan sus propósitos. Descubre qué hace diferente al 8% que sí los cumple.",
    date: "2025-01-05",
    category: "Motivación",
    time: "9 min",
    content: {
      intro:
        "Cada enero, millones de personas establecen propósitos ambiciosos. Para febrero, el 80% ya los ha abandonado. Para marzo, ese número sube al 92%. Pero hay un 8% que sí cumple sus propósitos. ¿Qué hacen diferente?",
      sections: [
        {
          title: "Error #1: Propósitos Vagos",
          content:
            "'Ponerme en forma' no es un propósito, es un deseo. El 8% exitoso establece objetivos específicos y medibles: 'Hacer ejercicio 30 minutos, 4 veces por semana'. La especificidad elimina la ambigüedad y hace que el progreso sea rastreable.",
        },
        {
          title: "Error #2: Cambios Demasiado Grandes",
          content:
            "Intentar transformar tu vida completa de la noche a la mañana es una receta para el fracaso. El 8% exitoso empieza con cambios tan pequeños que parecen ridículos. Quieren leer más, empiezan con una página al día. Quieren meditar, empiezan con un minuto.",
        },
        {
          title: "Error #3: Depender de la Motivación",
          content:
            "La motivación es como el clima, cambia constantemente. El 8% exitoso no depende de sentirse motivado. Construyen sistemas y rutinas que funcionan incluso cuando no tienen ganas. Diseñan su entorno para que el comportamiento deseado sea inevitable.",
        },
        {
          title: "Error #4: No Tener un Plan para los Obstáculos",
          content:
            "La vida es impredecible. El 8% exitoso anticipa obstáculos y crea planes de contingencia. 'Si llueve y no puedo correr afuera, haré ejercicio en casa'. 'Si estoy de viaje, haré una versión reducida de mi rutina'. Tienen un plan B, C y D.",
        },
        {
          title: "Error #5: Falta de Accountability",
          content:
            "Es fácil romper promesas que solo te haces a ti mismo. El 8% exitoso comparte sus objetivos con otros, se une a comunidades, contrata coaches, o usa apps de seguimiento. La accountability externa multiplica las probabilidades de éxito.",
        },
        {
          title: "La Fórmula del 8%",
          content:
            "Establece un objetivo específico y medible. Empieza ridículamente pequeño. Crea un sistema, no dependas de la motivación. Anticipa obstáculos y crea planes de contingencia. Busca accountability externa. Celebra pequeñas victorias. Ajusta según sea necesario.",
        },
      ],
      conclusion:
        "Tus propósitos no fallan porque seas débil o carezcas de disciplina. Fallan porque el sistema está diseñado para fallar. Adopta la mentalidad y las estrategias del 8% exitoso, y este año será diferente. No porque tengas más fuerza de voluntad, sino porque tienes un mejor sistema.",
    },
  },
  "habito-ancla": {
    emoji: "🧘",
    title: "El Poder del Hábito Ancla: Tu Primer Paso Hacia la Transformación",
    desc: "Cómo un solo hábito puede desencadenar una cascada de cambios positivos en tu vida.",
    date: "2025-01-03",
    category: "Hábitos",
    time: "6 min",
    content: {
      intro:
        "¿Qué pasaría si te dijera que no necesitas cambiar 10 cosas en tu vida, sino solo una? Existe un concepto poderoso llamado 'hábito ancla' o 'hábito clave' que, cuando se implementa correctamente, desencadena una reacción en cadena de cambios positivos en múltiples áreas de tu vida.",
      sections: [
        {
          title: "Qué es un Hábito Ancla",
          content:
            "Un hábito ancla es un comportamiento que, una vez establecido, naturalmente conduce a la adopción de otros hábitos positivos. Es como la primera ficha de dominó que, al caer, pone en movimiento toda una cadena de eventos. Los hábitos ancla más comunes son el ejercicio, la meditación y el journaling matutino.",
        },
        {
          title: "Por Qué Funcionan",
          content:
            "Los hábitos ancla funcionan porque cambian tu identidad. Cuando empiezas a hacer ejercicio regularmente, no solo estás moviendo tu cuerpo, estás convirtiéndote en 'una persona que hace ejercicio'. Esta nueva identidad influye en otras decisiones: comes mejor, duermes más, reduces el alcohol. No porque te obligues, sino porque es coherente con tu nueva identidad.",
        },
        {
          title: "Cómo Identificar Tu Hábito Ancla",
          content:
            "Tu hábito ancla ideal cumple tres criterios: 1) Es algo que genuinamente quieres hacer, 2) Tiene efectos positivos en múltiples áreas de tu vida, 3) Es lo suficientemente simple para hacerlo consistentemente. Para la mayoría de las personas, el ejercicio matutino es el hábito ancla más poderoso.",
        },
        {
          title: "El Efecto Cascada",
          content:
            "Cuando estableces un hábito ancla fuerte, observarás cambios que nunca planeaste. Las personas que empiezan a meditar regularmente reportan mejor gestión del estrés, relaciones más saludables, y mayor claridad en la toma de decisiones. Las que empiezan a hacer ejercicio reportan mejor alimentación, más energía, y mayor confianza. Todo sin esfuerzo consciente adicional.",
        },
        {
          title: "Implementación Práctica",
          content:
            "Elige un hábito ancla. Empieza ridículamente pequeño (5 minutos de ejercicio, 2 minutos de meditación). Hazlo a la misma hora todos los días. No agregues otros hábitos hasta que este sea automático (mínimo 30 días). Observa qué otros cambios ocurren naturalmente. Celebra cada pequeña victoria.",
        },
      ],
      conclusion:
        "No necesitas una transformación completa de la noche a la mañana. Necesitas un hábito ancla sólido que desencadene una cascada de cambios positivos. Elige uno, comprométete completamente, y observa cómo tu vida comienza a transformarse de maneras que nunca imaginaste.",
    },
  },
}

interface ClientArticlePageProps {
  slug: string
}

export default function ClientArticlePage({ slug }: ClientArticlePageProps) {
  const article = articlesData[slug as keyof typeof articlesData]

  const allArticles = Object.entries(articlesData).filter(([key]) => key !== slug)
  const recommendedArticles = allArticles.slice(0, 3)

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-8">😕</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Artículo no encontrado</h1>
          <p className="text-xl text-slate-600 mb-8">Lo sentimos, el artículo que buscas no existe.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Blog
          </Link>
        </div>
      </div>
    )
  }

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
          </div>
        </nav>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Blog
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{article.emoji}</span>
              <div>
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                  {article.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.time} de lectura</span>
                  </div>
                  <span>•</span>
                  <span>
                    {new Date(article.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{article.title}</h1>

            <p className="text-xl text-slate-600 leading-relaxed">{article.desc}</p>
          </div>

          {/* Article Content with proper line-height */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">{article.content.intro}</p>

            {article.content.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">{section.title}</h2>
                <p className="text-lg text-slate-700 leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mt-12 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conclusión</h3>
              <p className="text-lg text-slate-700 leading-relaxed">{article.content.conclusion}</p>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-600">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">{article.category}</span>
            </div>
            <button
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.desc,
                    url: window.location.href,
                  })
                }
              }}
            >
              <Share2 className="w-5 h-5" />
              Compartir
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Artículos Recomendados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedArticles.map(([slug, article]) => (
              <Link key={slug} href={`/blog/${slug}`}>
                <article className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all border border-slate-200 group cursor-pointer h-full">
                  <div className="text-4xl mb-4">{article.emoji}</div>

                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                    {article.category}
                  </span>

                  <h3 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{article.time}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Leer artículo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
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
