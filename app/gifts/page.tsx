import { products } from "@/data/products";
import ProductCard from "@/app/components/ProductCard";
import { SlidersHorizontal, Filter, ArrowDownUp } from "lucide-react";

export default function GiftsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

      {/* Page Title */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Shop All Gifts
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Browse premium gifts from all categories. Use filters to find the perfect gift.
        </p>
      </div>

      {/* Filters Section */}
      <div className="bg-white border rounded-3xl shadow-sm p-5 flex flex-wrap gap-3 justify-center">
        
        <button className="px-4 py-2 bg-gray-100 hover:bg-pink-50 border rounded-full text-sm flex items-center gap-2 transition">
          <Filter size={16} /> Occasion
        </button>

        <button className="px-4 py-2 bg-gray-100 hover:bg-pink-50 border rounded-full text-sm flex items-center gap-2 transition">
          <Filter size={16} /> Person
        </button>

        <button className="px-4 py-2 bg-gray-100 hover:bg-pink-50 border rounded-full text-sm flex items-center gap-2 transition">
          <SlidersHorizontal size={16} /> Category
        </button>

        <button className="px-4 py-2 bg-gray-100 hover:bg-pink-50 border rounded-full text-sm flex items-center gap-2 transition">
          <ArrowDownUp size={16} /> Price: Low → High
        </button>

        <button className="px-4 py-2 bg-gray-100 hover:bg-pink-50 border rounded-full text-sm flex items-center gap-2 transition">
          <ArrowDownUp size={16} /> Price: High → Low
        </button>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}
