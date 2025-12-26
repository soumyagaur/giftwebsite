"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  if (!items.length) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">
          Your cart is empty. Jo gifts pasand aaye unhe add karo 😊
        </p>
      </div>
    );
  }

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="mt-1 text-pink-600 font-bold">
                ₹{item.price} × {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
        <span className="font-semibold text-lg">Total:</span>
        <span className="text-2xl font-bold text-pink-600">
          ₹{totalAmount}
        </span>
      </div>

      <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-700">
        Proceed to Checkout
      </button>
    </div>
  );
}
