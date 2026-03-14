"use client";

import React from "react";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { Footer } from "@/components/footer";
import { CartProvider, useCart } from "@/contexts/CartContext";
import { ExternalLink, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CheckoutContent() {
    const { items, removeFromCart, totalPrice, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-brand-bg">
                <ShopHeader />
                <main className="pt-32 pb-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="bg-white rounded-3xl p-12 shadow-lg">
                            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                                <ShoppingBag className="w-12 h-12 text-slate-400" />
                            </div>
                            <h1 className="text-3xl font-bold text-brand-text mb-4">Tu carrito está vacío</h1>
                            <p className="text-slate-600 mb-8">Agrega productos para continuar con tu compra</p>
                            <Link
                                href="/tienda"
                                className="inline-block bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors"
                            >
                                Ir a la Tienda
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const amazonItems = items.filter(item => item.isAmazon);
    const regularItems = items.filter(item => !item.isAmazon);

    return (
        <div className="min-h-screen bg-brand-bg">
            <ShopHeader />
            <main className="pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-black text-brand-text mb-8">Checkout</h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {amazonItems.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="bg-orange-100 p-2 rounded-lg">
                                            <svg className="w-5 h-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.546.61-2.754 0-5.4-.48-7.94-1.437-2.54-.96-4.673-2.28-6.4-3.96-.226-.226-.28-.39-.16-.59zm23.91-1.604c0-.27-.114-.48-.336-.63-.238-.164-.57-.12-.87.12-.285.226-.48.525-.586.88-.06.226-.09.525-.09.88 0 .27.114.48.336.63.238.164.57.12.87-.12.285-.226.48-.525.586-.88.06-.226.09-.525.09-.88z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold">Productos de Amazon</h2>
                                    </div>
                                    <p className="text-sm text-slate-600 mb-4">
                                        Estos productos se compran directamente en Amazon. Haz clic en "Ver en Amazon" para completar tu compra.
                                    </p>
                                    <div className="space-y-3">
                                        {amazonItems.map((item) => (
                                            <div key={item.id} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                                                    <p className="text-brand-primary font-bold">${item.price.toFixed(2)}</p>
                                                    <p className="text-xs text-slate-500">Cantidad: {item.quantity}</p>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <a
                                                        href={item.amazonUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                        className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center gap-1"
                                                    >
                                                        Ver en Amazon <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-600 text-sm hover:underline"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {regularItems.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <h2 className="text-xl font-bold mb-4">Productos Regulares</h2>
                                    <div className="space-y-3">
                                        {regularItems.map((item) => (
                                            <div key={item.id} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                                                    <p className="text-brand-primary font-bold">${item.price.toFixed(2)}</p>
                                                    <p className="text-xs text-slate-500">Cantidad: {item.quantity}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg h-fit"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                                <h2 className="text-xl font-bold mb-4">Resumen</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-slate-600">
                                        <span>Subtotal</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600">
                                        <span>Envío</span>
                                        <span className="text-green-600 font-semibold">Gratis</span>
                                    </div>
                                    <div className="border-t pt-3 flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span className="text-brand-primary">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                {amazonItems.length > 0 && (
                                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
                                        <p className="text-sm text-orange-800">
                                            <strong>Nota:</strong> Los productos de Amazon deben comprarse directamente en su sitio web.
                                        </p>
                                    </div>
                                )}

                                <button
                                    onClick={clearCart}
                                    className="w-full text-red-600 py-2 rounded-xl font-semibold text-sm hover:bg-red-50 transition-colors mb-3"
                                >
                                    Vaciar Carrito
                                </button>

                                <Link
                                    href="/tienda"
                                    className="block w-full text-center bg-slate-100 text-brand-text py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                                >
                                    Seguir Comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <CartProvider>
            <CheckoutContent />
        </CartProvider>
    );
}
