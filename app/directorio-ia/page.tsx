"use client"

import { Search, Star, ExternalLink, Sparkles, Zap, Brain, ImageIcon, MessageSquare, Code, Music } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function DirectorioIA() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const categories = ["Todas", "Escritura", "Imágenes", "Productividad", "Código", "Audio", "Chat"]

  const tools = [
    {
      name: "ChatGPT",
      category: "Chat",
      description: "El asistente de IA conversacional más popular para responder preguntas y generar contenido.",
      icon: MessageSquare,
      rating: 4.8,
      url: "https://chat.openai.com",
      isPremium: true,
    },
    {
      name: "Midjourney",
      category: "Imágenes",
      description: "Genera imágenes artísticas impresionantes a partir de descripciones de texto.",
      icon: ImageIcon,
      rating: 4.9,
      url: "https://midjourney.com",
      isPremium: true,
    },
    {
      name: "Notion AI",
      category: "Productividad",
      description: "Asistente de IA integrado en Notion para escribir, resumir y organizar información.",
      icon: Brain,
      rating: 4.7,
      url: "https://notion.so",
      isPremium: true,
    },
    {
      name: "GitHub Copilot",
      category: "Código",
      description: "Asistente de programación que sugiere código y funciones completas mientras escribes.",
      icon: Code,
      rating: 4.6,
      url: "https://github.com/features/copilot",
      isPremium: true,
    },
    {
      name: "Jasper",
      category: "Escritura",
      description: "Herramienta de IA para crear contenido de marketing, blogs y copys de alta calidad.",
      icon: Sparkles,
      rating: 4.5,
      url: "https://jasper.ai",
      isPremium: true,
    },
    {
      name: "ElevenLabs",
      category: "Audio",
      description: "Genera voces realistas con IA para narraciones, podcasts y contenido multimedia.",
      icon: Music,
      rating: 4.8,
      url: "https://elevenlabs.io",
      isPremium: true,
    },
    {
      name: "Perplexity AI",
      category: "Chat",
      description: "Motor de búsqueda conversacional que proporciona respuestas con fuentes citadas.",
      icon: MessageSquare,
      rating: 4.7,
      url: "https://perplexity.ai",
      isPremium: false,
    },
    {
      name: "DALL-E 3",
      category: "Imágenes",
      description: "Generador de imágenes de OpenAI con capacidades avanzadas de comprensión de texto.",
      icon: ImageIcon,
      rating: 4.6,
      url: "https://openai.com/dall-e-3",
      isPremium: true,
    },
    {
      name: "Claude",
      category: "Chat",
      description: "Asistente de IA de Anthropic enfocado en conversaciones útiles, honestas e inofensivas.",
      icon: MessageSquare,
      rating: 4.7,
      url: "https://claude.ai",
      isPremium: false,
    },
    {
      name: "Grammarly",
      category: "Escritura",
      description: "Asistente de escritura con IA que mejora gramática, claridad y tono de tus textos.",
      icon: Sparkles,
      rating: 4.6,
      url: "https://grammarly.com",
      isPremium: true,
    },
    {
      name: "Cursor",
      category: "Código",
      description: "Editor de código con IA integrada para programación más rápida y eficiente.",
      icon: Code,
      rating: 4.8,
      url: "https://cursor.sh",
      isPremium: false,
    },
    {
      name: "Runway",
      category: "Imágenes",
      description: "Suite de herramientas de IA para edición de video e imágenes generativas.",
      icon: ImageIcon,
      rating: 4.5,
      url: "https://runwayml.com",
      isPremium: true,
    },
  ]

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
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
              <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition">
                Blog
              </Link>
              <Link href="/directorio-ia" className="text-blue-600 font-semibold">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">Directorio de Herramientas IA</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre las mejores herramientas de inteligencia artificial para potenciar tu productividad y creatividad
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar herramientas de IA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900 bg-white shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-purple-50 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => {
            const Icon = tool.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all border border-slate-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  {tool.isPremium && (
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Premium
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-2">{tool.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {tool.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-slate-700">{tool.rating}</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{tool.description}</p>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all group-hover:scale-105"
                >
                  <span>Visitar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-slate-600">No se encontraron herramientas que coincidan con tu búsqueda</p>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Conoces una herramienta que debería estar aquí?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Ayúdanos a mantener este directorio actualizado. Envíanos tus sugerencias y las revisaremos.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-all"
          >
            Sugerir Herramienta
          </Link>
        </div>
      </section>

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
