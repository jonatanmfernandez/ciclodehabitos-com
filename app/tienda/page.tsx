import React from "react";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { AmazonProductCard } from "@/components/shop/AmazonProductCard";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/contexts/CartContext";
import { ArrowRight, Leaf, Heart, BookOpen } from "lucide-react";
import amazonProducts from "@/data/amazon-products.json";

export default function TiendaPage() {
    // Separate products by category
    const libros = amazonProducts.filter(p =>
        p.category.toLowerCase().includes('seller') ||
        p.category.toLowerCase().includes('desarrollo') ||
        p.category.toLowerCase().includes('productividad') ||
        p.category.toLowerCase().includes('ciencia') ||
        p.category.toLowerCase().includes('mindfulness')
    );

    const yoga = amazonProducts.filter(p =>
        p.category.toLowerCase().includes('yoga') ||
        p.category.toLowerCase().includes('accesorios') ||
        p.category.toLowerCase().includes('bienestar') ||
        p.category.toLowerCase().includes('meditación')
    );

    return (
        <CartProvider>
            <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
                <ShopHeader />

                <main className="pt-24 lg:pt-32">
                    {/* Banner Hero */}
                    <section className="px-4 mb-20">
                        <div className="max-w-7xl mx-auto relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-brand-primary/90 z-10 opacity-80" />
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
                                alt="Yoga & Reading"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                                    Exclusivo de Ciclo de Hábitos
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                    Herramientas para tu<br />Equilibrio Interior
                                </h1>
                                <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 font-light">
                                    Descubre nuestra selección curada de libros y accesorios diseñados para acompañarte en tu camino hacia una vida más consciente.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#libros" className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                                        Explorar Libros <BookOpen className="w-5 h-5" />
                                    </a>
                                    <a href="#yoga" className="bg-brand-primary border border-white/20 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                                        Yoga & Relax <Leaf className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Categories Bar */}
                    <section className="max-w-7xl mx-auto px-4 mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border border-slate-50">
                                <div className="p-3 bg-green-50 rounded-xl text-brand-primary">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Libros</h4>
                                    <p className="text-xs text-slate-400">Desarrollo personal</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border border-slate-50">
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Yoga</h4>
                                    <p className="text-xs text-slate-400">Equipamiento premium</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border border-slate-50">
                                <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Bienestar</h4>
                                    <p className="text-xs text-slate-400">Aceites y meditación</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border border-slate-50">
                                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Amazon</h4>
                                    <p className="text-xs text-slate-400">Productos afiliados</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sección Libros */}
                    <section id="libros" className="max-w-7xl mx-auto px-4 mb-20">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-black text-brand-text mb-2">Top Libros</h2>
                                <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
                            </div>
                            <button className="text-brand-primary font-bold hover:underline flex items-center gap-1">
                                Ver todos <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {libros.map((item) => (
                                <AmazonProductCard key={item.id} {...item} />
                            ))}
                        </div>
                    </section>

                    {/* Sección Yoga */}
                    <section id="yoga" className="max-w-7xl mx-auto px-4 mb-32">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-black text-brand-text mb-2">Yoga & Bienestar</h2>
                                <div className="w-20 h-1.5 bg-brand-primary rounded-full" />
                            </div>
                            <button className="text-brand-primary font-bold hover:underline flex items-center gap-1">
                                Ver todos <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {yoga.map((item) => (
                                <AmazonProductCard key={item.id} {...item} />
                            ))}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </CartProvider>
    );
}
