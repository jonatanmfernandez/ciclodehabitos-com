import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/images/logo.png"
                            alt="Ciclo de Hábitos Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 transition-transform group-hover:scale-110"
                        />
                        <span className="font-bold text-xl text-slate-800 tracking-tight">Ciclo de Hábitos</span>
                    </Link>

                    <div className="hidden md:flex gap-8 items-center">
                        <Link href="/" className="text-slate-600 hover:text-blue-600 transition font-medium hover:bg-slate-50 px-3 py-2 rounded-lg">
                            Inicio
                        </Link>
                        <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition font-medium hover:bg-slate-50 px-3 py-2 rounded-lg">
                            Blog
                        </Link>
                        <Link href="/#newsletter" className="text-slate-600 hover:text-blue-600 transition font-medium hover:bg-slate-50 px-3 py-2 rounded-lg">
                            Newsletter
                        </Link>
                        <Link href="/about" className="text-slate-600 hover:text-blue-600 transition font-medium hover:bg-slate-50 px-3 py-2 rounded-lg">
                            Sobre mí
                        </Link>
                        <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition font-medium hover:bg-slate-50 px-3 py-2 rounded-lg">
                            Contacto
                        </Link>
                    </div>

                    <MobileNav />
                </div>
            </nav>
        </header>
    )
}
