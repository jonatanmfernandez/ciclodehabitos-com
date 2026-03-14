import { getPostData, getSortedPostsData } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Custom MDX components for better styling
const components = {
  h2: (props: any) => (
    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 leading-tight" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4 leading-snug" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg text-slate-700 leading-relaxed mb-6" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-600 bg-blue-50 pl-6 pr-4 py-4 my-8 italic text-lg text-slate-800 rounded-r-lg" {...props} />
  ),
  ul: (props: any) => (
    <ul className="space-y-3 my-6 ml-6 list-none [&>li]:relative [&>li]:before:content-['→'] [&>li]:before:absolute [&>li]:before:left-[-1.5rem] [&>li]:before:text-blue-600 [&>li]:before:font-bold" {...props} />
  ),
  ol: (props: any) => (
    <ol className="space-y-3 my-6 ml-6 pl-4 list-decimal" {...props} />
  ),
  li: (props: any) => (
    <li className="text-lg text-slate-700 leading-relaxed pl-2" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-10 flex justify-center">
      <div className="shadow-md border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden w-full md:w-auto">
        <table className="w-full text-center border-collapse" {...props} />
      </div>
    </div>
  ),
  thead: (props: any) => <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700" {...props} />,
  tbody: (props: any) => <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800" {...props} />,
  tr: (props: any) => <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors" {...props} />,
  th: (props: any) => <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-700 last:border-r-0 text-center" {...props} />,
  td: (props: any) => <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 last:border-r-0 text-center" {...props} />,
  strong: (props: any) => (
    <strong className="font-bold text-slate-900" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-600 hover:text-blue-700 underline font-medium" {...props} />
  ),
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al blog
        </Link>

        <div className="mb-12">
          <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-slate-500 text-base border-b border-slate-200 pb-8 mb-12">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </div>

        {post.image && (
          <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <p className="text-slate-600 font-medium">¿Te gustó este artículo?</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
              <Share2 className="w-5 h-5" />
              Compartir
            </button>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Quieres más contenido como este?
          </h3>
          <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter semanal y recibe artículos exclusivos sobre hábitos y productividad.
          </p>
          <Link href="/#newsletter" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
            Suscribirse gratis
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
