import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Términos y Condiciones | Ciclo de Hábitos',
  description: 'Consulta los términos y condiciones de uso de nuestro sitio web Ciclo de Hábitos.',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="mb-6 italic text-slate-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p className="mb-4">
              Bienvenido a <strong>Ciclo de Hábitos</strong>. Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de Ciclo de Hábitos con usted en relación con este sitio web.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">1. Uso del Contenido</h2>
            <p className="mb-4">
              El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros ofrecemos garantía alguna en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">2. Propiedad Intelectual</h2>
            <p className="mb-4">
              Este sitio web contiene material que es propiedad nuestra o tiene licencia para nosotros. Este material incluye, pero no se limita a, el diseño, la apariencia y los gráficos. La reproducción está prohibida salvo de conformidad con la nota de copyright, que forma parte de estos términos y condiciones.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">3. Exención de Responsabilidad Médica</h2>
            <p className="mb-4 italic bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              El contenido de Ciclo de Hábitos (textos, gráficos, imágenes y otro material) es solo para fines informativos. No pretende sustituir el consejo, diagnóstico o tratamiento médico profesional. Siempre busque el consejo de su médico u otro proveedor de salud calificado con cualquier pregunta que pueda tener sobre una condición médica.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">4. Enlaces a Terceros y Publicidad</h2>
            <p className="mb-4">
              De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos el sitio web. No tenemos ninguna responsabilidad por el contenido de los sitios web vinculados.
            </p>
            <p className="mb-4">
              Este sitio muestra anuncios de terceros a través de <strong>Google AdSense</strong>. La interacción con estos anuncios está sujeta a los términos y políticas de privacidad de los anunciantes respectivos y de Google.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">5. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              El uso de cualquier información o material en este sitio web es bajo su propio riesgo, por lo cual no seremos responsables. Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">6. Ley Aplicable</h2>
            <p className="mb-4">
              El uso de este sitio web y cualquier disputa que surja de dicho uso del sitio web está sujeto a las leyes locales e internacionales aplicables.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">7. Modificaciones</h2>
            <p className="mb-4">
              Ciclo de Hábitos se reserva el derecho de revisar estos términos en cualquier momento. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos términos y condiciones.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">8. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre estos términos, puede contactarnos en <a href="mailto:hola@ciclodehabitos.com" className="text-blue-600 hover:underline">hola@ciclodehabitos.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
