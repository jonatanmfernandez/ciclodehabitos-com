"use client";

import React from "react";
import { X, Plus, Minus, Trash2, ExternalLink } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { items, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
                {/* Header */}
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-text">Tu Carrito</h2>
                        <p className="text-sm text-slate-500">{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl">🛒</span>
                            </div>
                            <p className="text-slate-500 text-lg font-medium">Tu carrito está vacío</p>
                            <p className="text-slate-400 text-sm mt-2">Agrega productos para comenzar</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-brand-text text-sm mb-1 line-clamp-2">
                                            {item.name}
                                        </h3>
                                        {item.isAmazon && (
                                            <span className="inline-block text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold mb-2">
                                                Amazon
                                            </span>
                                        )}
                                        <p className="text-brand-primary font-bold text-lg">${item.price.toFixed(2)}</p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:bg-white rounded transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:bg-white rounded transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-auto p-1 hover:bg-red-50 text-red-600 rounded transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-slate-200 p-6 bg-slate-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-slate-700">Total</span>
                            <span className="text-2xl font-black text-brand-text">${totalPrice.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={() => {
                                // Redirect to checkout or Amazon
                                window.location.href = "/tienda/checkout";
                            }}
                            className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors shadow-lg mb-3"
                        >
                            Proceder al Checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full text-red-600 py-2 rounded-xl font-semibold text-sm hover:bg-red-50 transition-colors"
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
