import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Declaración de Accesibilidad | Ciclo de Hábitos',
  description: 'Nuestro compromiso con la accesibilidad web en Ciclo de Hábitos.',
}

export default function AccesibilidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Declaración de Accesibilidad</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="mb-6 italic text-slate-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p className="mb-4">
              En <strong>Ciclo de Hábitos</strong>, nos esforzamos por garantizar que nuestros servicios sean accesibles para personas con discapacidades. Hemos invertido una cantidad significativa de recursos para ayudar a asegurar que nuestro sitio web sea más fácil de usar y más accesible, con la firme convicción de que cada persona tiene el derecho a vivir con dignidad, igualdad, comodidad e independencia.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">1. Medidas adoptadas</h2>
            <p className="mb-4">
              Ciclo de Hábitos continúa sus esfuerzos para mejorar constantemente la accesibilidad de su sitio y servicios. A pesar de nuestros esfuerzos por hacer que todas las páginas y contenidos sean totalmente accesibles, es posible que algunos contenidos aún no se hayan adaptado completamente a los estándares de accesibilidad más estrictos.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">2. Estándares seguidos</h2>
            <p className="mb-4">
              Nuestro objetivo es cumplir con las Pautas de Accesibilidad al Contenido en la Web (WCAG 2.1) en su nivel AA. Estas pautas explican cómo hacer que el contenido web sea más accesible para las personas con una amplia gama de discapacidades.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">3. Feedback y Contacto</h2>
            <p className="mb-4">
              Si tiene dificultades con cualquier contenido de Ciclo de Hábitos o requiere asistencia con cualquier parte de nuestro sitio, comuníquese con nosotros y estaremos encantados de ayudarle.
            </p>
            <p className="mb-4">
              Si desea informar de un problema de accesibilidad, tiene alguna pregunta o necesita asistencia, comuníquese con nosotros a través del correo electrónico: <a href="mailto:hola@ciclodehabitos.com" className="text-blue-600 hover:underline">hola@ciclodehabitos.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
