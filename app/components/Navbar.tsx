"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  MapPin,
  ShoppingCart,
  User,
  Truck,
  IndianRupee,
  Gift,
  MoreHorizontal,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const categories = [
  "Christmas Gifts",
  "Birthday",
  "Occasions",
  "Anniversary",
  "Flowers",
  "Cakes",
  "Personalised",
  "Plants",
  "Chocolates",
  "Luxe",
  "Hampers",
  "Lifestyle",
  "International",
  "On Trend",
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [location] = useState("Location missing");

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        {/* Top Banner */}
        <div
          className="h-10 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage:
              "url('/images/desktop-free-delivery-banner-12-dec2.webp')",
          }}
        />

        {/* Main Bar */}
        <div className="border-b">
          <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-3">
            {/* Left */}
            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenu(true)}
              >
                <Menu size={22} />
              </button>

              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-8 md:h-48 w-auto"
                />
              </Link>

              {/* Location Desktop */}
              <button className="hidden md:flex flex-col text-left text-xs">
                <span className="font-medium text-gray-900">
                  Where to deliver?
                </span>
                <span className="text-red-600 flex items-center gap-1">
                  {location} <span className="text-gray-700">▼</span>
                </span>
              </button>
            </div>

            {/* Search Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search for gifts"
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Right Desktop */}
            <div className="hidden md:flex items-center gap-6 text-xs text-gray-700">
              <NavIcon icon={<Truck size={18} />} label="Same Day" />
              <NavIcon icon={<IndianRupee size={18} />} label="INR" />
              <NavIcon icon={<Gift size={18} />} label="Corporate" />

              <Link href="/cart" className="relative text-center">
                <ShoppingCart size={18} className="mx-auto" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                    {totalItems}
                  </span>
                )}
                <p>Cart</p>
              </Link>

              <NavIcon icon={<User size={18} />} label="Hi Guest" />
              <NavIcon icon={<MoreHorizontal size={18} />} label="More" />
            </div>
          </div>
        </div>

        {/* Category Bar Desktop */}
        <nav className="hidden md:block border-b">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex gap-6 py-3 text-sm text-gray-800 overflow-x-auto">
              {categories.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-red-600 whitespace-nowrap">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE DRAWER ===== */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenu(false)}
          />

          {/* Drawer */}
          <div className="relative bg-white w-72 h-full p-4 overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between mb-4">
            <img src="/images/logo.png" className="h-37 w-[132px] -mb-[60px] -mt-[52px]"/>
              <button onClick={() => setMobileMenu(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Location */}
<div className="mb-4">
  <p className="text-sm font-medium flex items-center gap-1 text-gray-900">
    <MapPin size={14} />
    Deliver to
  </p>
  <p className="text-red-600 text-xs">{location}</p>
</div>


            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                placeholder="Search gifts"
                className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none"
              />
            </div>

            {/* Categories */}
            <ul className="space-y-4 text-sm text-gray-800">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block"
                    onClick={() => setMobileMenu(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Spacer for Fixed Header */}
      <div className="h-[56px] md:h-[128px]" />
    </>
  );
}

/* ===== SMALL ICON ===== */
function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="text-center cursor-pointer hover:text-red-600">
      <div className="mx-auto">{icon}</div>
      <p className="text-xs">{label}</p>
    </div>
  );
}
