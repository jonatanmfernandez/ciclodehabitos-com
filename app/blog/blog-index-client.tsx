"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { toast } from "sonner"
import type { BlogPost } from "@/lib/blog"

const POSTS_PER_PAGE = 8

type PostPreview = Omit<BlogPost, "content">

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    })
}

function InlineSubscribeForm() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })
            const data = await response.json().catch(() => null)

            if (!response.ok) {
                throw new Error(data?.error || "Error desconocido del servidor")
            }

            toast.success("¡Suscripción exitosa!", {
                description: data?.message || "Gracias por unirte.",
            })
            setEmail("")
        } catch (error) {
            toast.error("Error al suscribirse", {
                description: error instanceof Error ? error.message : "Inténtalo de nuevo más tarde",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 pl-5 shadow-sm">
            <input
                type="email"
                required
                aria-label="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                placeholder="Tu correo electrónico"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={isLoading}
                className="shrink-0 rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-900 transition hover:bg-slate-700 dark:hover:bg-slate-200 disabled:opacity-50"
            >
                {isLoading ? "Enviando..." : "Suscribirse"}
            </button>
        </form>
    )
}

export function BlogIndexClient({ posts }: { posts: PostPreview[] }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

    const categories = useMemo(() => {
        const seen = new Set<string>()
        return posts
            .map((post) => post.category)
            .filter((category) => {
                if (!category || seen.has(category)) return false
                seen.add(category)
                return true
            })
            .sort((a, b) => a.localeCompare(b, "es"))
    }, [posts])

    const filteredPosts = activeCategory
        ? posts.filter((post) => post.category === activeCategory)
        : posts

    const visiblePosts = filteredPosts.slice(0, visibleCount)

    const selectCategory = (category: string | null) => {
        setActiveCategory(category)
        setVisibleCount(POSTS_PER_PAGE)
    }

    return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
                            Blog
                        </h1>
                        <InlineSubscribeForm />
                    </div>
                    <p className="max-w-xs text-slate-500 dark:text-slate-400 md:text-right">
                        Ciencia del comportamiento, estrategias de productividad y diseño de vida.
                    </p>
                </div>

                {/* Category tabs */}
                <div className="mb-12 border-b border-slate-200 dark:border-slate-800">
                    <nav aria-label="Categorías del blog" className="-mb-px flex gap-6 overflow-x-auto whitespace-nowrap pb-px">
                        <button
                            onClick={() => selectCategory(null)}
                            className={`border-b-2 pb-3 text-sm font-semibold transition ${
                                activeCategory === null
                                    ? "border-primary text-slate-900 dark:text-white"
                                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            }`}
                        >
                            Ver todo
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => selectCategory(category)}
                                className={`border-b-2 pb-3 text-sm font-semibold transition ${
                                    activeCategory === category
                                        ? "border-primary text-slate-900 dark:text-white"
                                        : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Posts grid */}
                <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
                    {visiblePosts.map((post) => (
                        <article key={post.slug} className="group">
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
                                    {post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                            <span className="text-4xl opacity-30">Imagen</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/60 to-black/20 px-5 py-4 backdrop-blur-sm">
                                        <div className="min-w-0 text-white">
                                            <p className="truncate text-sm font-semibold">{post.author}</p>
                                            <p className="text-xs text-white/80">{formatDate(post.date)} · {post.readTime} de lectura</p>
                                        </div>
                                        <span className="shrink-0 text-sm font-semibold text-white">{post.category}</span>
                                    </div>
                                </div>
                                <h2 className="mb-2 text-xl md:text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary">
                                    {post.title}
                                </h2>
                                <p className="mb-4 text-slate-600 dark:text-slate-300 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 dark:text-white underline-offset-4 group-hover:underline">
                                    Leer artículo <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <p className="py-16 text-center text-slate-500 dark:text-slate-400">
                        Todavía no hay artículos en esta categoría.
                    </p>
                )}

                {/* Load more */}
                {visibleCount < filteredPosts.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 transition hover:bg-slate-700 dark:hover:bg-slate-200"
                        >
                            <ArrowDown className="h-4 w-4" />
                            Cargar más
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
