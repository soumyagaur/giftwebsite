"use client";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <h1 className="text-2xl font-bold">Product not found</h1>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[420px] object-cover rounded-2xl shadow"
      />

      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-500 text-lg mt-2">{product.category}</p>

        <p className="text-pink-600 font-bold text-3xl mt-4">
          ₹{product.price}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
