"use client";

import { occasionCards } from "@/data/occasionCards";

export default function HampersPage() {

  const slug = "hampers";
  const occasionName = "hampers";

  const uniqueCards = occasionCards[slug] || [];

  const bannerImage = "/images/Gemini_Generated_Image_7093ha7093ha7093.png";

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ===== HERO BANNER ===== */}
      <div className="relative w-full -mt-1">
        <img
          src={bannerImage}
          alt={occasionName}
          className="w-full h-60 sm:h-80 lg:h-96 object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-12 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">
            {occasionName} Gifts
          </h1>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-700">
          {occasionName} Gifts
        </h2>

        <p className="text-gray-600 mt-2 mb-8">
          Explore curated hampers gifts made just for your loved ones.
        </p>

        {uniqueCards.length === 0 ? (
          <p className="text-center text-gray-600 py-20">
            No hampers gifts available yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-10">
            {uniqueCards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-4"
              >
                <img
                  src={item.image}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="font-semibold mt-3 text-gray-800">{item.name}</h3>
                <p className="text-pink-600 font-bold">₹{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
