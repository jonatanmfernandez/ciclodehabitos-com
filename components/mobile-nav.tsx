"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
    { href: "/directorio-ia", label: "Directorio IA" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden mr-4">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
        <div className="flex flex-col gap-6 mt-8">
          <Link href="/" className="flex items-center gap-3 mb-4" onClick={() => setOpen(false)}>
            <Image src="/images/logo.png" alt="Ciclo de Hábitos Logo" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-xl text-slate-800">Ciclo de Hábitos</span>
          </Link>
          <nav className="flex flex-col gap-4 pl-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-slate-600 hover:text-blue-600 transition py-2 border-b border-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
