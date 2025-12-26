"use client";

import { useParams } from "next/navigation";
import { occasionCards } from "@/data/occasionCards";
import Link from "next/link";

export default function OccasionPage() {
  const params = useParams();
  const slug = params.slug as string;

  const uniqueCards = occasionCards[slug] || [];

  const occasionName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const bannerImages: Record<string, string> = {
    birthday: "/images/Silver-And-Gold-Birthday-Balloons-3x1-2-scaled-1.webp",
    anniversary: "/images/happy-anniversary-banner-design-anniversary-celebration-vector_5773-682.avif",
    "for-him": "/banners/for-him.jpg",
    "for-her": "/banners/for-her.jpg",
    personalized: "/banners/personalized.jpg",
    hampers: "/banners/hampers.jpg",
  };

  const bannerImage = bannerImages[slug] || "/images/default-banner.jpg";

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== FULL-WIDTH HERO BANNER ===== */}
      <div className="relative w-full -mt-1">
        <img
          src={bannerImage}
          alt={occasionName}
          className="w-full h-60 sm:h-80 lg:h-96 object-cover"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-12 pb-6">

          {/* Breadcrumb */}
          {/* <div className="text-sm text-gray-200 mb-1">
            <Link href="/" className="hover:text-white">Home</Link> /
            <Link href="/gifts" className="hover:text-white"> Gifts</Link> /
            <span className="text-white font-semibold"> {occasionName}</span>
          </div> */}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">
            {occasionName} Gifts
          </h1>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">

        {/* Page Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-700">
          {occasionName} Gifts
        </h2>

        <p className="text-gray-600 mt-2 mb-8 text-sm sm:text-base">
          Explore curated gifts perfect for {occasionName}.
        </p>

        {/* Products Section */}
        {uniqueCards.length === 0 ? (
          <p className="text-center text-gray-600 py-20">
            No special products added yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 py-10">

            {uniqueCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-4"
              >
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <h3 className="font-semibold text-gray-800 mt-3">
                  {item.name}
                </h3>

                <p className="text-pink-600 font-bold text-lg mt-1">
                  ₹{item.price}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}
