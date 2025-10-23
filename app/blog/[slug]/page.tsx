import type { Metadata } from "next"
import ClientArticlePage from "./client-page"
import { articlesData } from "./client-page"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articlesData[slug as keyof typeof articlesData]

  if (!article) {
    return {
      title: "Artículo no encontrado | Ciclo de Hábitos",
    }
  }

  return {
    title: `${article.title} | Ciclo de Hábitos`,
    description: article.desc,
    keywords: [
      "hábitos",
      article.category.toLowerCase(),
      "desarrollo personal",
      "productividad",
      "transformación",
      "cambio de vida",
    ],
    openGraph: {
      title: article.title,
      description: article.desc,
      type: "article",
      publishedTime: article.date,
      authors: ["Ciclo de Hábitos"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.desc,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ClientArticlePage slug={slug} />
}
