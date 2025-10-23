"use client"

import { ArrowLeft, Clock, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const articlesData = {
  "como-construir-un-hábito": {
    title: "Cómo Construir un Hábito Sólido y Duradero",
    desc: "Descubre los secretos para crear hábitos que realmente se queden. Aprende estrategias probadas y evita los errores comunes.",
    date: "2023-10-26T10:00:00Z",
    category: "Hábitos",
    content: "Aquí iría el contenido del artículo sobre cómo construir hábitos...",
    image: "/images/habitos.jpg",
  },
  "la-importancia-del-descanso": {
    title: "La Importancia Crucial del Descanso para la Productividad",
    desc: "Entiende por qué el descanso no es un lujo, sino una necesidad para optimizar tu rendimiento y bienestar.",
    date: "2023-11-15T14:30:00Z",
    category: "Productividad",
    content: "Aquí iría el contenido del artículo sobre la importancia del descanso...",
    image: "/images/descanso.jpg",
  },
  "supera-la-procrastinación": {
    title: "Estrategias Efectivas para Superar la Procrastinación",
    desc: "Deja de posponer tus tareas. Implementa estas técnicas para vencer la procrastinación y ser más eficiente.",
    date: "2023-12-01T09:00:00Z",
    category: "Productividad",
    content: "Aquí iría el contenido del artículo sobre cómo superar la procrastinación...",
    image: "/images/procrastinacion.jpg",
  },
}

interface ClientArticlePageProps {
  slug: string
}

export default function ClientArticlePage({ slug }: ClientArticlePageProps) {
  const article = articlesData[slug as keyof typeof articlesData]

  if (!article) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-lg">Lo sentimos, el artículo que buscas no existe.</p>
        <Link href="/blog" className="text-blue-600 hover:underline flex items-center mt-4">
          <ArrowLeft className="mr-2" /> Volver al Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="container mx-auto p-4 md:p-8">
      <Link href="/blog" className="text-blue-600 hover:underline flex items-center mb-6">
        <ArrowLeft className="mr-2" /> Volver al Blog
      </Link>
      <div className="flex items-center text-gray-500 mb-4 text-sm">
        <Clock className="mr-2" size={16} />
        <span>
          Publicado el{" "}
          {new Date(article.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{article.title}</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">{article.desc}</p>

      <div className="mb-8">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto"
          priority
        />
      </div>

      <div className="prose lg:prose-xl max-w-none text-gray-800">
        {/* Aquí podrías renderizar el contenido markdown si lo tuvieras */}
        {article.content}
      </div>

      <div className="mt-12 flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="mr-2 text-gray-500" size={20} />
          <span className="text-gray-600">Categoría: {article.category}</span>
        </div>
        <button className="flex items-center text-blue-600 hover:underline" aria-label="Compartir artículo">
          <Share2 className="mr-2" size={20} />
          Compartir
        </button>
      </div>
    </article>
  )
}
