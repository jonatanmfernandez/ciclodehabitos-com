import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Política de Cookies | Ciclo de Hábitos',
  description: 'Información detallada sobre el uso de cookies en el sitio web Ciclo de Hábitos.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="mb-6 italic text-slate-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p className="mb-4">
              En <strong>Ciclo de Hábitos</strong>, utilizamos cookies para mejorar su experiencia de navegación y ofrecer contenido personalizado. Al continuar utilizando nuestro sitio, usted acepta el uso de cookies de acuerdo con esta política.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita un sitio web. Ayudan a que el sitio web funcione correctamente, sea más seguro y proporcione una mejor experiencia al usuario al recordar sus preferencias y comportamientos.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">2. Tipos de Cookies que utilizamos</h2>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li>
                <strong>Cookies Esenciales:</strong> Son necesarias para el funcionamiento básico del sitio. Sin ellas, el sitio no funcionaría correctamente.
              </li>
              <li>
                <strong>Cookies de Análisis (Google Analytics):</strong> Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar el rendimiento de nuestro sitio. Toda la información recopilada es anónima.
              </li>
              <li>
                <strong>Cookies de Publicidad (Google AdSense):</strong> Estas cookies son utilizadas por Google para publicar anuncios basados en sus visitas anteriores a nuestro sitio web u otros sitios web.
              </li>
              <li>
                <strong>Cookies Funcionales:</strong> Permiten que el sitio web proporcione una funcionalidad y personalización mejoradas.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">3. Google AdSense y la Cookie DART</h2>
            <p className="mb-4">
              Google, como proveedor de terceros, utiliza cookies para publicar anuncios en nuestro sitio. El uso de la cookie DART permite a Google mostrar anuncios a los usuarios en función de su visita a nuestro sitio y a otros sitios en Internet.
            </p>
            <p className="mb-4">
              Los usuarios pueden inhabilitar el uso de la cookie de DART a través del sitio web de Google de 
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">privacidad y términos de publicidad de Google</a>.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">4. Cómo gestionar las cookies</h2>
            <p className="mb-4">
              Usted tiene el derecho de aceptar o rechazar las cookies. La mayoría de los navegadores web aceptan automáticamente las cookies, pero normalmente puede modificar la configuración de su navegador para rechazar las cookies si lo prefiere.
            </p>
            <p className="mb-4">
              Para obtener más información sobre cómo gestionar y eliminar las cookies, visite <a href="https://www.allaboutcookies.org/es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">allaboutcookies.org</a>.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">5. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre nuestra Política de Cookies, no dude en contactarnos en <a href="mailto:hola@ciclodehabitos.com" className="text-blue-600 hover:underline">hola@ciclodehabitos.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
