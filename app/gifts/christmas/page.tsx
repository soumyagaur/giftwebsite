"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ---------------- CATEGORIES ---------------- */

const categories = [
  { name: "Personalised", image: "/images/Personalised_NY-alpha_528x528.jpg" },
  { name: "Cakes", image: "/images/2026-star-burst-new-year-cake-376x376.webp" },
  { name: "Flowers", image: "/images/Beautiful-Moments.png" },
  { name: "Plants", image: "/images/charming-indoor-plants-manual-yuvaflowers-bestgifts-1207-default-title-42166363881752.jpg" },
  { name: "Gift Hampers", image: "/images/Gift_hampers_NY-alpha_528x528.jpg" },
  { name: "Chocolates", image: "/images/Chocolates_NY-alpha_528x528.jpg" },
  { name: "Balloon Decor", image: "/images/Decor_NY-alpha_528x528.jpg" },
  { name: "Gift Sets", image: "/images/Premium_Set_NY-alpha_528x528.jpg" },
];

/* ---------------- PRODUCT CARD ---------------- */

function ProductCard({ product }: any) {
  return (
    <div className="group bg-white border rounded-xl overflow-hidden transition hover:shadow-md">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium mb-1 line-clamp-2 text-gray-800">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-green-700 font-semibold">
            ₹{product.price}
          </span>
          <span className="text-xs text-gray-500">
            ★ {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function ChristmasGiftsPage() {
  const mobileCategoryRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* Fetch products from MongoDB API */
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "/api/products?category=christmas-gifts"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  /* Auto-scroll mobile categories */
  useEffect(() => {
    const slider = mobileCategoryRef.current;
    if (!slider) return;

    let x = 0;
    const interval = setInterval(() => {
      x += 1;
      if (x >= slider.scrollWidth - slider.clientWidth) x = 0;
      slider.scrollLeft = x;
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">

      <p className="text-xs text-gray-500 mb-3">
        Home / Christmas Gifts
      </p>

      {/* MOBILE CATEGORIES */}
      <div
        ref={mobileCategoryRef}
        className="sm:hidden flex gap-3 overflow-x-auto pb-4 -mx-3 px-3 mb-4"
      >
        {categories.map(cat => (
          <div
            key={cat.name}
            className="min-w-[96px] bg-[#fff3e6] rounded-2xl p-2.5 text-center"
          >
            <div className="h-14 mb-1 bg-white rounded-xl flex items-center justify-center">
              <Image src={cat.image} alt={cat.name} width={60} height={60} />
            </div>
            <p className="text-[11px] font-medium text-gray-900">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* TITLE */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
          Christmas Gifts
        </h1>
      </div>

      {/* DESKTOP CATEGORIES */}
      <div className="hidden sm:flex gap-4 mb-6">
        {categories.map(cat => (
          <div
            key={cat.name}
            className="min-w-[130px] bg-[#fff3e6] rounded-2xl p-4 text-center"
          >
            <div className="h-20 mb-2 bg-white rounded-xl flex items-center justify-center">
              <Image src={cat.image} alt={cat.name} width={64} height={64} />
            </div>
            <p className="text-sm font-medium text-gray-900">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <p className="text-center py-10 text-gray-500">
          Loading Christmas Gifts...
        </p>
      ) : products.length === 0 ? (
        <p className="text-center py-10 text-gray-500">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}
