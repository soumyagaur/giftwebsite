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

/* ---------------- PRODUCTS ---------------- */

const products = [
  {
    name: "FlowerAura Fresh Live Flower Bouquet of 8 Pink Roses",
    price: 1449,
    mrp: 1849,
    images: [
      "/images/71f9+ovEURL._SL1500_.jpg",
      "/images/71YmB1nTGOL._SL1500_.jpg",
      "/images/81CYb-sEm5L._SL1500_.jpg",
    ],
  },
  {
    name: "Christmas Chocolate Cake",
    price: 999,
    mrp: 1299,
    images: [
      "/images/p-choco-chip-loaded-birthday-cake-300-gm--276154-m.avif",
      "/images/p-choco-chip-loaded-birthday-cake-300-gm--276154-1.avif",
      "/images/p-choco-chip-loaded-birthday-cake-300-gm--276154-2.avif",
    ],
  },
  {
    name: "Happy New Year Printed Coffee Mug",
    price: 1299,
    mrp: 1599,
    images: [
      "/images/61sipLgsm2L._SX569_.jpg",
      "/images/51-V2xyCmfL._SX569_.jpg",
    ],
  },
  {
    name: "Luxury Gift Hamper",
    price: 2499,
    mrp: 2999,
    images: [
      "/images/71lIlkhAY8L._SL1024_.jpg",
      "/images/71i9uBpZw2L._SL1100_.jpg",
    ],
  },
];

/* ---------------- PRODUCT CARD ---------------- */

function ProductCard({ product }: any) {
  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startHover = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setImgIndex(i => (i + 1) % product.images.length);
    }, 900);
  };

  const stopHover = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setImgIndex(0);
  };

  useEffect(() => stopHover, []);

  return (
    <div
      className="group bg-white border rounded-xl overflow-hidden transition active:scale-[0.97]"
      onMouseEnter={startHover}
      onMouseLeave={stopHover}
    >
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.images[imgIndex]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-2.5 sm:p-4">
        <h3 className="text-[12px] sm:text-sm font-medium mb-1 line-clamp-2 text-gray-800">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <span className="text-green-700 font-semibold text-sm">
            ₹{product.price}
          </span>
          <span className="text-[10px] text-gray-500 line-through">
            ₹{product.mrp}
          </span>
        </div>

        <p className="text-[10px] text-blue-600">
          Earliest Delivery: Today
        </p>
      </div>
    </div>
  );
}

/* ---------------- PAGE ---------------- */

export default function ChristmasGiftsPage() {
  const mobileCategoryRef = useRef<HTMLDivElement | null>(null);

  /* Auto-scroll only mobile categories */
  useEffect(() => {
    const slider = mobileCategoryRef.current;
    if (!slider) return;

    let x = 0;
    const interval = setInterval(() => {
      x += 1;
      if (x >= slider.scrollWidth - slider.clientWidth) x = 0;
      slider.scrollLeft = x;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">

      <p className="text-xs text-gray-500 mb-3">
        Home / Christmas Gifts
      </p>

      {/* MOBILE CATEGORIES (TOP + AUTOSCROLL) */}
      <div
        ref={mobileCategoryRef}
        className="sm:hidden flex gap-3 overflow-x-auto pb-4 -mx-3 px-3 mb-4"
      >
        {categories.map(cat => (
          <div key={cat.name} className="min-w-[96px] bg-[#fff3e6] rounded-2xl p-2.5 text-center">
            <div className="h-14 mb-1 bg-white rounded-xl flex items-center justify-center">
              <Image src={cat.image} alt={cat.name} width={64} height={64} />
            </div>
            <p className="text-[11px] font-medium text-gray-900">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* TITLE */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
          Christmas Gifts
        </h1>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-gray-600">80 of 375 Gifts</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[11px]">
            ★ 4.8
          </span>
          <span className="text-blue-600 text-[11px] sm:text-sm">
            1261 Reviews
          </span>
        </div>
      </div>

      {/* DESKTOP CATEGORIES */}
      <div className="hidden sm:flex gap-4 mb-6">
        {categories.map(cat => (
          <div key={cat.name} className="min-w-[130px] bg-[#fff3e6] rounded-2xl p-4 text-center">
            <div className="h-20 mb-2 bg-white rounded-xl flex items-center justify-center">
              <Image src={cat.image} alt={cat.name} width={64} height={64} />
            </div>
            <p className="text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

    </div>
  );
}
