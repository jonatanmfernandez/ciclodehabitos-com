"use client"

import { ArrowLeft, Clock, Share2, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Datos de artículos (en producción vendrían de una base de datos)
const articlesData = {
  "metodo-anti-procrastinacion": {
    emoji: "🧠",
    title: "El Método Anti-Procrastinación Que Funciona Cuando Nada Más Lo Hace",
    desc: "Descubre por qué la fuerza de voluntad NO es la respuesta y cómo construir sistemas que trabajan para ti automáticamente.",
    time: "7 min",
    category: "Productividad",
    date: "15 Ene 2025",
    content: `
      <h2>Por qué la fuerza de voluntad no funciona</h2>
      <p>Durante años, nos han vendido la idea de que necesitamos más fuerza de voluntad para lograr nuestros objetivos. Pero la ciencia nos dice algo completamente diferente: la fuerza de voluntad es un recurso limitado que se agota a lo largo del día.</p>
      
      <p>Imagina tu fuerza de voluntad como la batería de tu teléfono. Cada decisión que tomas, cada tentación que resistes, consume un poco de esa batería. Al final del día, cuando más la necesitas, está completamente agotada.</p>

      <h2>El sistema que funciona automáticamente</h2>
      <p>En lugar de depender de la fuerza de voluntad, necesitas construir sistemas que trabajen para ti sin esfuerzo consciente. Aquí está el framework de 3 pasos:</p>

      <h3>1. Diseño de entorno</h3>
      <p>Tu entorno es más poderoso que tu motivación. Si quieres comer saludable, no tengas comida chatarra en casa. Si quieres leer más, deja un libro en tu mesita de noche. Haz que lo correcto sea lo más fácil.</p>

      <h3>2. Hábitos de implementación</h3>
      <p>Usa la fórmula: "Cuando [situación], haré [acción]". Por ejemplo: "Cuando termine de desayunar, escribiré durante 10 minutos". Esta técnica aumenta la probabilidad de seguimiento en un 91% según studies.</p>

      <h3>3. Seguimiento sin fricción</h3>
      <p>No necesitas apps complicadas. Un simple calendario donde marcas una X cada día que cumples es suficiente. La clave es hacerlo tan fácil que no tengas excusa para no hacerlo.</p>

      <h2>Implementación práctica</h2>
      <p>Empieza con UN solo hábito. No intentes cambiar tu vida entera de golpe. Elige el hábito que tendrá el mayor impacto en tu vida y aplica estos tres principios durante 30 días.</p>

      <p>Recuerda: no se trata de ser perfecto, se trata de ser consistente. Un sistema imperfecto que sigues es infinitamente mejor que un plan perfecto que abandonas.</p>
    `,
  },
  "habitos-fortaleza-emocional": {
    emoji: "💪",
    title: "9 Hábitos Secretos de Personas con Fortaleza Emocional Inquebrantable",
    desc: "El sistema para no rendirte cuando todo se pone difícil. Aprende las estrategias que usan las personas más resilientes.",
    time: "10 min",
    category: "Mentalidad",
    date: "12 Ene 2025",
    content: `
      <h2>La fortaleza emocional no es innata</h2>
      <p>Contrario a la creencia popular, la fortaleza emocional no es algo con lo que naces. Es un conjunto de hábitos que puedes desarrollar sistemáticamente.</p>

      <h2>Los 9 hábitos fundamentales</h2>
      
      <h3>1. Práctica diaria de gratitud</h3>
      <p>Las personas emocionalmente fuertes escriben 3 cosas por las que están agradecidas cada mañana. Esto reconfigura tu cerebro para buscar lo positivo incluso en situaciones difíciles.</p>

      <h3>2. Aceptación radical de lo que no pueden controlar</h3>
      <p>Gastan su energía solo en lo que pueden cambiar. Tienen un mantra: "¿Puedo hacer algo al respecto? Si sí, lo hago. Si no, lo acepto y sigo adelante."</p>

      <h3>3. Rutina de procesamiento emocional</h3>
      <p>Dedican 10 minutos al día para escribir sobre sus emociones. No las reprimen ni las ignoran, las procesan conscientemente.</p>

      <h3>4. Red de apoyo activa</h3>
      <p>Mantienen contacto regular con al menos 3 personas de confianza. No esperan a estar en crisis para conectar.</p>

      <h3>5. Ejercicio físico no negociable</h3>
      <p>Mueven su cuerpo al menos 30 minutos al día. El ejercicio es el antidepresivo más efectivo que existe.</p>

      <h3>6. Límites claros y firmes</h3>
      <p>Dicen "no" sin culpa. Protegen su tiempo y energía como si fueran su recurso más valioso (porque lo son).</p>

      <h3>7. Práctica de auto-compasión</h3>
      <p>Se hablan a sí mismos como le hablarían a su mejor amigo. Nada de crítica destructiva.</p>

      <h3>8. Descanso estratégico</h3>
      <p>Programan tiempo de descanso antes de necesitarlo desesperadamente. Entienden que el descanso es productivo.</p>

      <h3>9. Propósito claro y revisado</h3>
      <p>Revisan sus valores y propósito cada trimestre. Saben por qué hacen lo que hacen.</p>

      <h2>Cómo empezar</h2>
      <p>No intentes implementar los 9 hábitos a la vez. Elige UNO que resuene contigo y practícalo durante 30 días. Una vez que sea automático, añade el siguiente.</p>
    `,
  },
  "construir-habito-30-dias": {
    emoji: "🎯",
    title: "Cómo Construir Un Hábito Nuevo en 30 Días (Método Científicamente Probado)",
    desc: "La fórmula exacta que usan las personas exitosas para crear hábitos que duran toda la vida.",
    time: "8 min",
    category: "Hábitos",
    date: "10 Ene 2025",
    content: `
      <h2>La ciencia detrás de los 30 días</h2>
      <p>Contrario al mito popular de los 21 días, la investigación muestra que formar un hábito toma en promedio 66 días. Sin embargo, los primeros 30 días son cruciales: es cuando el 80% de las personas abandonan.</p>

      <h2>El método de los 30 días</h2>
      
      <h3>Semana 1: Ridículamente fácil</h3>
      <p>Tu único objetivo es aparecer. ¿Quieres hacer ejercicio? Haz 1 flexión. ¿Quieres meditar? Respira conscientemente 3 veces. La clave es hacer el hábito tan fácil que sea imposible fallar.</p>

      <h3>Semana 2: Construyendo momentum</h3>
      <p>Ahora que has demostrado que puedes ser consistente, aumenta ligeramente la dificultad. De 1 flexión a 5. De 3 respiraciones a 2 minutos de meditación. Pero sigue siendo fácil.</p>

      <h3>Semana 3: El valle de la desilusión</h3>
      <p>Esta es la semana más peligrosa. La novedad desapareció, los resultados aún no son obvios, y tu cerebro buscará cualquier excusa para abandonar. Estrategia: reduce la intensidad si es necesario, pero NO rompas la cadena.</p>

      <h3>Semana 4: Consolidación</h3>
      <p>Si llegaste aquí, ya ganaste. Ahora se trata de reforzar el hábito y empezar a ver los primeros resultados tangibles. Celebra cada pequeña victoria.</p>

      <h2>Las 3 reglas de oro</h2>
      
      <h3>1. Nunca falles dos días seguidos</h3>
      <p>Un día perdido es normal. Dos días es el inicio de un nuevo patrón (el patrón de abandonar).</p>

      <h3>2. Rastrea visualmente</h3>
      <p>Usa un calendario físico y marca cada día que cumples. Ver la cadena de X's es increíblemente motivador.</p>

      <h3>3. Prepara el plan B</h3>
      <p>Antes de empezar, decide qué harás cuando surja un obstáculo. "Si no puedo ir al gym, haré 10 minutos de ejercicio en casa."</p>

      <h2>Tu plan de acción</h2>
      <p>Elige UN hábito. Escribe exactamente cuándo y dónde lo harás. Hazlo ridículamente fácil. Empieza mañana. No el lunes. No el próximo mes. Mañana.</p>
    `,
  },
  "regla-dos-minutos": {
    emoji: "⚡",
    title: "La Regla de los 2 Minutos: Cómo Vencer la Resistencia Inicial",
    desc: "El truco psicológico que hace que empezar sea 10 veces más fácil. Perfecto para procrastinadores crónicos.",
    time: "5 min",
    category: "Productividad",
    date: "8 Ene 2025",
    content: `
      <h2>El problema de empezar</h2>
      <p>La parte más difícil de cualquier tarea no es hacerla, es empezarla. Tu cerebro crea una resistencia masiva ante la idea de "escribir un artículo" o "hacer ejercicio durante una hora".</p>

      <h2>La regla de los 2 minutos</h2>
      <p>Cuando un nuevo hábito toma menos de dos minutos, es casi imposible no hacerlo. La clave es reducir cualquier hábito a su versión de 2 minutos:</p>

      <ul>
        <li>"Leer antes de dormir" se convierte en "Leer una página"</li>
        <li>"Hacer yoga" se convierte en "Sacar mi mat de yoga"</li>
        <li>"Estudiar para el examen" se convierte en "Abrir mis apuntes"</li>
        <li>"Escribir mi libro" se convierte en "Escribir una oración"</li>
      </ul>

      <h2>Por qué funciona</h2>
      <p>Una vez que empiezas, la física toma el control. Un objeto en movimiento tiende a permanecer en movimiento. Después de sacar tu mat de yoga, es mucho más probable que hagas aunque sea 5 minutos de práctica.</p>

      <h2>El secreto está en el ritual</h2>
      <p>No se trata de hacer solo 2 minutos para siempre. Se trata de dominar el arte de aparecer. Los primeros 2 minutos se convierten en el ritual que señala el inicio de tu hábito.</p>

      <h2>Implementación práctica</h2>
      <p>Toma el hábito que quieres construir y pregúntate: "¿Cuál es la versión de 2 minutos de esto?" Esa es tu nueva meta durante las próximas 2 semanas. Solo aparecer. Solo los 2 minutos. Nada más.</p>

      <p>Una vez que aparecer sea automático, naturalmente empezarás a hacer más. Pero primero, domina el arte de empezar.</p>
    `,
  },
  "propositos-ano-nuevo": {
    emoji: "🔥",
    title: "Por Qué Fallan Tus Propósitos de Año Nuevo (Y Cómo Arreglarlo)",
    desc: "El 92% de las personas abandonan sus propósitos. Descubre qué hace diferente al 8% que sí los cumple.",
    time: "9 min",
    category: "Motivación",
    date: "5 Ene 2025",
    content: `
      <h2>La estadística brutal</h2>
      <p>El 92% de los propósitos de año nuevo fracasan antes de febrero. No porque las personas sean flojas, sino porque están usando el enfoque equivocado desde el inicio.</p>

      <h2>Los 5 errores fatales</h2>
      
      <h3>1. Metas vagas</h3>
      <p>"Ponerme en forma" no es una meta, es un deseo. "Hacer ejercicio 3 veces por semana durante 30 minutos" es una meta.</p>

      <h3>2. Demasiados cambios a la vez</h3>
      <p>Querer transformar toda tu vida el 1 de enero es la receta perfecta para el fracaso. Tu cerebro no puede manejar múltiples cambios simultáneos.</p>

      <h3>3. Dependencia de la motivación</h3>
      <p>La motivación de año nuevo dura aproximadamente 2 semanas. Después de eso, necesitas sistemas, no motivación.</p>

      <h3>4. Sin plan para los obstáculos</h3>
      <p>No planear para los días difíciles es planear para fallar. Los obstáculos no son "si" suceden, son "cuando" suceden.</p>

      <h3>5. Falta de seguimiento</h3>
      <p>Lo que no se mide, no se mejora. Sin un sistema de seguimiento, es imposible saber si estás progresando.</p>

      <h2>Qué hace diferente al 8% exitoso</h2>
      
      <h3>Eligen UNA prioridad</h3>
      <p>En lugar de 10 propósitos, eligen el cambio que tendrá el mayor impacto en su vida y se enfocan solo en eso.</p>

      <h3>Crean sistemas, no metas</h3>
      <p>No se enfocan en "perder 10 kilos", se enfocan en "convertirme en el tipo de persona que hace ejercicio regularmente".</p>

      <h3>Diseñan su entorno</h3>
      <p>Hacen que lo correcto sea fácil y lo incorrecto sea difícil. Si quieren leer más, dejan libros por toda la casa y guardan el control remoto.</p>

      <h3>Tienen un plan B, C y D</h3>
      <p>Saben exactamente qué harán cuando surjan obstáculos. "Si no puedo ir al gym, haré esta rutina en casa."</p>

      <h3>Celebran el proceso, no solo los resultados</h3>
      <p>Se recompensan por aparecer, no solo por lograr la meta final. Esto mantiene la motivación alta durante todo el camino.</p>

      <h2>Tu plan de acción</h2>
      <p>Olvida la lista de 10 propósitos. Elige UNO. Hazlo específico. Crea un sistema. Diseña tu entorno. Planea para los obstáculos. Empieza hoy, no esperes al próximo lunes.</p>
    `,
  },
  "habito-ancla": {
    emoji: "🧘",
    title: "El Poder del Hábito Ancla: Tu Primer Paso Hacia la Transformación",
    desc: "Cómo un solo hábito puede desencadenar una cascada de cambios positivos en tu vida.",
    time: "6 min",
    category: "Hábitos",
    date: "3 Ene 2025",
    content: `
      <h2>Qué es un hábito ancla</h2>
      <p>Un hábito ancla es ese primer hábito que, una vez establecido, hace que otros hábitos positivos sean más fáciles de adoptar. Es como el primer dominó que desencadena una reacción en cadena.</p>

      <h2>Los hábitos ancla más poderosos</h2>
      
      <h3>1. Hacer la cama cada mañana</h3>
      <p>Parece trivial, pero empezar el día con una pequeña victoria te pone en un estado mental de logro. Las personas que hacen su cama son más propensas a ser productivas durante el día.</p>

      <h3>2. Ejercicio matutino</h3>
      <p>20 minutos de ejercicio por la mañana no solo te da energía, sino que te hace más consciente de tu alimentación durante el día. Después de hacer ejercicio, es menos probable que quieras "arruinarlo" comiendo mal.</p>

      <h3>3. Meditación de 5 minutos</h3>
      <p>La meditación mejora tu autocontrol y consciencia. Esto se traduce en mejores decisiones en todas las áreas de tu vida.</p>

      <h3>4. Planificación nocturna</h3>
      <p>Dedicar 10 minutos cada noche a planificar el día siguiente elimina la fatiga de decisión por la mañana y aumenta tu productividad en un 25%.</p>

      <h2>Cómo elegir tu hábito ancla</h2>
      
      <p>Pregúntate: "¿Qué hábito, si lo hiciera consistentemente, haría que todo lo demás fuera más fácil o innecesario?"</p>

      <p>Tu hábito ancla debe cumplir 3 criterios:</p>
      <ul>
        <li>Puedes hacerlo todos los días sin excepción</li>
        <li>Toma menos de 30 minutos</li>
        <li>Tiene un efecto positivo en otras áreas de tu vida</li>
      </ul>

      <h2>El efecto cascada</h2>
      <p>Una vez que tu hábito ancla está sólido (después de 30-60 días), notarás algo mágico: otros hábitos positivos empiezan a aparecer naturalmente. No porque tengas más fuerza de voluntad, sino porque has cambiado tu identidad.</p>

      <p>Ya no eres "alguien que intenta hacer ejercicio". Eres "alguien que hace ejercicio". Esa diferencia de identidad lo cambia todo.</p>

      <h2>Tu siguiente paso</h2>
      <p>Elige UN hábito ancla. Solo uno. Comprométete a hacerlo durante 30 días sin fallar. Después de eso, observa cómo otros aspectos de tu vida empiezan a mejorar automáticamente.</p>
    `,
  },
}

export default function ClientArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const article = articlesData[slug as keyof typeof articlesData]

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Artículo no encontrado</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            Volver al blog
          </Link>
        </div>
      </div>
    )
  }

  // Artículos relacionados (excluye el actual)
  const relatedArticles = Object.entries(articlesData)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, data]) => ({ slug: key, ...data }))

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
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al blog
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="text-6xl mb-6">{article.emoji}</div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-slate-500">{article.date}</span>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.time} de lectura</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{article.title}</h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">{article.desc}</p>

          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-slate-200">
            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-semibold">Compartir</span>
            </button>
          </div>

          <div
            className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:leading-snug
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
            prose-ul:my-6 prose-ul:leading-relaxed prose-li:text-slate-700 prose-li:mb-2 prose-li:text-lg
            prose-strong:text-slate-900 prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Te gustó este artículo?</h2>
          <p className="text-blue-100 mb-6">
            Únete a más de 2,800 personas que reciben contenido exclusivo cada semana
          </p>
          <div className="max-w-md flex flex-col sm:flex-row gap-3">
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

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Artículos relacionados</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all border border-slate-200 group"
              >
                <div className="text-4xl mb-4">{related.emoji}</div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {related.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-3 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {related.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{related.time}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400 text-sm">
            <p>© 2025 Ciclo de Hábitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
