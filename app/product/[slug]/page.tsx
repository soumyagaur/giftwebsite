"use client";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: Props) {
  const { addToCart } = useCart();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <h1 className="text-2xl font-bold">Product not found</h1>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Gallery */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover rounded-2xl shadow"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-lg mt-2">
          {product.category} • Perfect for{" "}
          {product.occasion.join(", ")}
        </p>

        <p className="text-pink-600 font-bold text-3xl mt-4">
          ₹{product.price}
        </p>

        <ul className="mt-4 text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>{product.highlight}</li>
          <li>Delivery: 4–7 working days (location pe depend karega).</li>
          <li>Ideal for: {product.forWhom.join(", ")}</li>
        </ul>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        {/* Pincode input (UI only) */}
        <div className="mt-6">
          <p className="text-sm font-semibold mb-1">
            Enter pincode to check delivery time:
          </p>
          <div className="flex gap-2">
            <input
              className="border rounded-lg px-3 py-2 text-sm flex-1"
              placeholder="e.g. 110001"
            />
            <button className="bg-gray-900 text-white px-4 rounded-lg text-sm">
              Check
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-700 transition"
          >
            Add to Cart
          </button>
          <button className="border border-pink-600 text-pink-700 px-8 py-3 rounded-lg font-bold hover:bg-pink-50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
