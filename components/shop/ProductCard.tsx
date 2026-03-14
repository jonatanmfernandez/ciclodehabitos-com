"use client";

import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export const ProductCard = ({ id, name, price, image, category, rating }: ProductProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-brand-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-brand-primary text-white p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg hover:bg-green-700"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
            />
          ))}
          <span className="text-[10px] text-slate-400 ml-1">({rating}.0)</span>
        </div>

        <h3 className="text-brand-text font-bold text-lg mb-1 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
          {name}
        </h3>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-xl font-black text-brand-text">
            ${price.toFixed(2)}
          </p>
          <button className="text-sm font-semibold text-brand-primary hover:underline">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};
