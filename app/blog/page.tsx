import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Blog</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Artículos sobre ciencia del comportamiento, estrategias de productividad y diseño de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-slate-500">
                        <span className="text-4xl opacity-20">Imagen</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} de lectura</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-blue-600 font-medium hover:underline">
                      Leer más <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
