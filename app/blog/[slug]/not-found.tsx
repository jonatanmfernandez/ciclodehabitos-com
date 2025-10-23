import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
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
