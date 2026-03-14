"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "./CartDrawer";

export const ShopHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/logo.png"
                                    alt="Ciclo de Hábitos"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-brand-text" : "text-brand-text"
                                }`}>
                                Ciclo de Hábitos <span className="text-brand-primary">Shop</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="#libros" className="text-sm font-medium hover:text-brand-primary transition-colors">Libros</Link>
                            <Link href="#yoga" className="text-sm font-medium hover:text-brand-primary transition-colors">Yoga & Bienestar</Link>
                            <Link href="#ofertas" className="text-sm font-medium hover:text-brand-primary transition-colors">Ofertas</Link>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <Search className="w-5 h-5 text-slate-600" />
                            </button>
                            <button
                                onClick={() => setCartOpen(true)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors relative"
                            >
                                <ShoppingBag className="w-5 h-5 text-slate-600" />
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 w-5 h-5 bg-brand-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold animate-pulse">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                            <button
                                className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu className="w-6 h-6 text-slate-600" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[60] bg-white p-6 md:hidden">
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-bold text-xl">Menú</span>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 text-lg font-semibold">
                            <Link href="#libros" onClick={() => setMobileMenuOpen(false)}>Libros</Link>
                            <Link href="#yoga" onClick={() => setMobileMenuOpen(false)}>Yoga & Bienestar</Link>
                            <Link href="#ofertas" onClick={() => setMobileMenuOpen(false)}>Ofertas</Link>
                            <Link href="/" className="pt-4 border-t text-brand-primary">Volver al Blog</Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Cart Drawer */}
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
};
