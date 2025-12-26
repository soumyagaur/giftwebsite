"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm 
                    hover:shadow-lg transition p-3 sm:p-4 flex flex-col">
      
      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="overflow-hidden rounded-lg aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Name */}
        <h3 className="font-semibold text-sm sm:text-base mt-2 text-gray-900 leading-tight">
          {product.name}
        </h3>
      </Link>

      {/* Category */}
      <p className="text-xs sm:text-sm text-gray-500 mt-1">
        {product.category}
      </p>

      {/* Price */}
      <p className="text-pink-600 font-bold text-base sm:text-xl mt-1">
        ₹{product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-pink-600 text-white py-2 
                   rounded-lg text-xs sm:text-sm font-medium 
                   hover:bg-pink-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
