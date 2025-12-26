"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Truck,
  IndianRupee,
  Gift,
  MoreHorizontal,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

/* ================= TYPES ================= */
type NavIconProps = {
  icon: React.ReactNode;
  label: string;
};

export default function Navbar() {
  const { totalItems } = useCart();
  const [location] = useState("Location missing");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* ================= TOP BANNER ================= */}
      <div
        className="h-[44px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/desktop-free-delivery-banner-12-dec2.webp')",
        }}
      />

      {/* ================= MAIN HEADER ================= */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16 gap-3">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* MOBILE MENU */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenu(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>

            {/* LOGO */}
            <Link href="/" className="shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-55 w-auto"
              />
            </Link>

            {/* LOCATION (DESKTOP) */}
            <button className="hidden md:flex flex-col text-left text-sm">
              <span className="font-medium text-gray-900">
                Where to deliver?
              </span>
              <span className="text-red-600 text-xs flex items-center gap-1">
                {location}
                <span className="text-gray-900">▼</span>
              </span>
            </button>
          </div>

          {/* SEARCH (DESKTOP) */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search for gifts"
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* RIGHT ICONS */}
          <div className="hidden md:flex items-center gap-6 text-xs text-gray-800">
            <NavIcon icon={<Truck size={18} />} label="Same Day" />
            <NavIcon icon={<IndianRupee size={18} />} label="INR" />
            <NavIcon icon={<Gift size={18} />} label="Corporate" />

            <Link
              href="/cart"
              className="relative text-center hover:text-red-600"
            >
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

      {/* ================= CATEGORY BAR ================= */}
      <nav className="hidden md:block border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-6 text-sm py-3 text-gray-800">
            {[
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
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-red-600 whitespace-nowrap"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={() => setMobileMenu(false)}
        >
          <div
            className="bg-white w-72 h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <img src="/images/logo.png" className="h-8" />
              <button onClick={() => setMobileMenu(false)}>
                <X />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 flex items-center gap-1">
                <MapPin size={14} />
                Deliver to
              </p>
              <p className="text-red-600 text-xs">{location}</p>
            </div>

            <input
              placeholder="Search gifts"
              className="w-full border rounded-md px-3 py-2 text-sm mb-4"
            />

            <ul className="space-y-3 text-sm text-gray-800">
              {[
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
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block hover:text-red-600"
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
    </header>
  );
}

/* ================= SMALL ICON COMPONENT ================= */
function NavIcon({ icon, label }: NavIconProps) {
  return (
    <div className="text-center cursor-pointer hover:text-red-600">
      <div className="mx-auto">{icon}</div>
      <p className="text-xs">{label}</p>
    </div>
  );
}
