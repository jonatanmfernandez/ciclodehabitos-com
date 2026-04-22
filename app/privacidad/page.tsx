import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Política de Privacidad | Ciclo de Hábitos',
  description: 'Conoce cómo tratamos tus datos personales y nuestra política de privacidad en Ciclo de Hábitos.',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="mb-6 italic text-slate-500">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p className="mb-4">
              En <strong>Ciclo de Hábitos</strong> (en adelante, "el Sitio"), respetamos su privacidad y estamos comprometidos a proteger los datos personales que pueda compartir con nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información cuando visita nuestro sitio web.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">1. Recopilación de Información</h2>
            <p className="mb-4">
              Recopilamos información de identificación personal solo cuando usted la proporciona voluntariamente, por ejemplo, al suscribirse a nuestro boletín informativo o al contactarnos a través de nuestros formularios. Esta información puede incluir su nombre y dirección de correo electrónico.
            </p>
            <p className="mb-4">
              Además, recopilamos automáticamente cierta información no identificable, como su dirección IP, tipo de navegador, páginas de referencia y tiempo de permanencia, con el fin de mejorar la experiencia del usuario y analizar el tráfico del sitio.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">2. Uso de la Información</h2>
            <p className="mb-4">
              La información recopilada se utiliza para:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Personalizar su experiencia en el Sitio.</li>
              <li>Enviar correos electrónicos periódicos relacionados con sus intereses (siempre con opción de cancelación).</li>
              <li>Mejorar nuestro sitio web y los servicios ofrecidos.</li>
              <li>Administrar concursos, promociones o encuestas.</li>
              <li>Mostrar publicidad relevante a través de proveedores externos como Google AdSense.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">3. Google AdSense y Cookies de Terceros</h2>
            <p className="mb-4">
              Este Sitio utiliza <strong>Google AdSense</strong>, un servicio de publicidad proporcionado por Google, Inc.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Google, como proveedor de terceros, utiliza cookies para publicar anuncios en este Sitio.</li>
              <li>El uso de la cookie de publicidad permite a Google y a sus socios publicar anuncios basados en las visitas de los usuarios a nuestro Sitio y/u otros sitios en Internet.</li>
              <li>Los usuarios pueden inhabilitar el uso de la publicidad personalizada visitando la <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configuración de anuncios de Google</a>.</li>
            </ul>
            <p className="mb-4">
              También utilizamos <strong>Google Analytics</strong> para comprender cómo los visitantes interactúan con el contenido. Google Analytics utiliza cookies para recopilar información anónima y generar informes sobre las tendencias del sitio web sin identificar a los visitantes individuales.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">4. Protección de Datos</h2>
            <p className="mb-4">
              Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Sin embargo, ninguna transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">5. Divulgación a Terceros</h2>
            <p className="mb-4">
              No vendemos, intercambiamos ni transferimos a terceros su información de identificación personal. Esto no incluye a terceros de confianza que nos asisten en la operación de nuestro sitio web o en la prestación de servicios, siempre que dichas partes acuerden mantener esta información confidencial.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">6. Enlaces de Terceros</h2>
            <p className="mb-4">
              Ocasionalmente, a nuestra discreción, podemos incluir u ofrecer productos o servicios de terceros en nuestro sitio web. Estos sitios de terceros tienen políticas de privacidad separadas e independientes. Por lo tanto, no tenemos responsabilidad alguna por el contenido y las actividades de estos sitios vinculados.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">7. Consentimiento</h2>
            <p className="mb-4">
              Al utilizar nuestro sitio, usted acepta nuestra política de privacidad.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">8. Cambios en la Política de Privacidad</h2>
            <p className="mb-4">
              Si decidimos cambiar nuestra política de privacidad, publicaremos esos cambios en esta página.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">9. Contacto</h2>
            <p className="mb-4">
              Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos a través de nuestro <Link href="/contact" className="text-blue-600 hover:underline">formulario de contacto</Link> o enviando un correo a <a href="mailto:hola@ciclodehabitos.com" className="text-blue-600 hover:underline">hola@ciclodehabitos.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
