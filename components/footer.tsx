import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <Image
                                src="/images/logo.png"
                                alt="Ciclo de Hábitos Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 transition-transform group-hover:scale-110"
                            />
                            <span className="font-bold text-xl text-slate-800">Ciclo de Hábitos</span>
                        </Link>
                        <p className="text-slate-500 max-w-xs leading-relaxed">
                            Ayudándote a construir una vida mejor, un hábito a la vez. Ciencia del comportamiento, estrategias reales y comunidad.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Explorar</h4>
                        <ul className="space-y-2 text-slate-600">
                            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                            <li><Link href="/#newsletter" className="hover:text-blue-600 transition-colors">Newsletter</Link></li>
                            <li><Link href="/directorio-ia" className="hover:text-blue-600 transition-colors">Directorio IA</Link></li>
                            <li><Link href="/landing" className="hover:text-blue-600 transition-colors">Recursos Gratuitos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Contacto</h4>
                        <ul className="space-y-2 text-slate-600">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">Sobre mí</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contacto</Link></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} Ciclo de Hábitos. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-slate-600 transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-slate-600 transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
