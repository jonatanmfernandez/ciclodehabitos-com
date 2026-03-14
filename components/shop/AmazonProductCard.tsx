"use client";

import React from "react";
import { ShoppingCart, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { getAmazonAffiliateUrl } from "@/lib/amazon-config";

interface AmazonProductProps {
    id: string;
    asin: string;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    description?: string;
}

export const AmazonProductCard = ({
    id,
    asin,
    name,
    price,
    image,
    category,
    rating,
    description
}: AmazonProductProps) => {
    const { addToCart } = useCart();
    const amazonUrl = getAmazonAffiliateUrl(asin);

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price,
            image,
            isAmazon: true,
            amazonUrl,
            asin,
        });
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
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-brand-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="bg-orange-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.546.61-2.754 0-5.4-.48-7.94-1.437-2.54-.96-4.673-2.28-6.4-3.96-.226-.226-.28-.39-.16-.59zm23.91-1.604c0-.27-.114-.48-.336-.63-.238-.164-.57-.12-.87.12-.285.226-.48.525-.586.88-.06.226-.09.525-.09.88 0 .27.114.48.336.63.238.164.57.12.87-.12.285-.226.48-.525.586-.88.06-.226.09-.525.09-.88zm-1.62-7.674c-.226-.226-.39-.28-.59-.16-.116.072-.124.187-.022.348 2.11 3.636 3.166 7.594 3.166 11.87 0 2.852-.533 5.668-1.595 8.447l-.14.315c-.06.138-.1.234-.13.293-.088.226-.046.39.13.525.174.12.336.09.48-.12.19-.256.41-.6.654-1.006.743-1.244 1.316-2.64 1.726-4.185.406-1.53.61-3.045.61-4.546 0-2.754-.48-5.4-1.437-7.94-.96-2.54-2.28-4.673-3.96-6.4z" />
                        </svg>
                        Amazon
                    </span>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                        onClick={handleAddToCart}
                        className="bg-brand-primary text-white p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg hover:bg-green-700"
                        title="Agregar al carrito"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                    <a
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="bg-orange-500 text-white p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 shadow-lg hover:bg-orange-600"
                        title="Ver en Amazon"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
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

                {description && (
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">{description}</p>
                )}

                <div className="mt-auto pt-4 flex items-center justify-between">
                    <p className="text-xl font-black text-brand-text">
                        ${price.toFixed(2)}
                    </p>
                    <a
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-sm font-semibold text-orange-600 hover:underline flex items-center gap-1"
                    >
                        Ver en Amazon
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </div>
    );
};
