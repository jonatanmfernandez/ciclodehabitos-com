import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <Image
                                src="/images/logo.png"
                                alt="Ciclo de Hábitos Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 transition-transform group-hover:scale-110 dark:invert dark:mix-blend-screen"
                            />
                            <span className="font-bold text-xl text-slate-800 dark:text-white">Ciclo de Hábitos</span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                            Ayudándote a construir una vida mejor, un hábito a la vez. Ciencia del comportamiento, estrategias reales y comunidad.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Explorar</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                            <li><Link href="/#newsletter" className="hover:text-blue-600 transition-colors">Newsletter</Link></li>
                            <li><Link href="/directorio-ia" className="hover:text-blue-600 transition-colors">Directorio IA</Link></li>
                            <li><Link href="/landing" className="hover:text-blue-600 transition-colors">Recursos Gratuitos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contacto</h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">Sobre mí</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contacto</Link></li>
                            <li><a href="https://ar.pinterest.com/ciclodehabitosok/" aria-label="Visitar Pinterest" className="hover:text-blue-600 transition-colors">Pinterest</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <p>© {new Date().getFullYear()} Ciclo de Hábitos. Todos los derechos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacidad" className="hover:text-slate-600 transition-colors">Privacidad</Link>
                        <Link href="/cookies" className="hover:text-slate-600 transition-colors">Cookies</Link>
                        <Link href="/terminos" className="hover:text-slate-600 transition-colors">Términos</Link>
                        <Link href="/accesibilidad" className="hover:text-slate-600 transition-colors">Accesibilidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
