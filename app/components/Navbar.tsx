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
const christmasMenu = {
  joyfulGifts: [
    "All Christmas Gifts",
    "Cakes",
    "Personalised Gifts",
    "Christmas Hampers",
    "Dry Cakes",
    "Home Decor",
    "Flowers",
    "Plants",
    "Balloon Decorations",
    "Christmas Trees",
    "Premium Gifts",
    "Luxe Gifts",
    "Gift Sets",
    "Unique Gifts",
  ],
  secretSanta: [
    "Secret Santa Gifts",
    "Gifts for Him",
    "Gifts for Her",
    "Chocolates",
    "Toys & Games",
  ],
  merryGifting: ["Him", "Her", "Kids", "Friends", "Family"],
  abroad: [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "UAE",
    "New Zealand",
    "Germany",
    "All Countries",
  ],
};

const birthdayMenu = {
  mustHaves: [
    "Gifts in 60 mins",
    "Cakes",
    "Flowers",
    "Flowers n Cakes",
    "Flowers n Chocolates",
    "Personalised Gifts",
    "Plants",
    "Combos",
    "Chocolates",
    "Gift Hampers",
    "Greeting Cards",
    "Hatke Gifts",
    "Prime Picks",
    "All Gifts",
  ],

  bestsellers: [
    "Bestsellers",
    "New Arrivals",
    "Healthy Cakes",
    "Zodiac Gifts",
    "Premium Gifts",
    "Unusual Gifts",
    "Midnight Delivery",
    "Return Gifts",
    "Luxe Birthday",
    "Pet Gifts",
  ],

  personalPicks: [
    "Plant Lover",
    "Wanderer",
    "Foodies",
    "Music Fan",
    "Fashionista",
  ],

  birthdayFor: [
    "Her",
    "Him",
    "Kids",
    "Friends",
    "Wife",
    "Husband",
    "Girlfriend",
    "Boyfriend",
    "Mother",
    "Father",
  ],

  agePerfect: [
    "1st Birthday",
    "10th Birthday",
    "18th Birthday",
    "50th Birthday",
  ],

  uniqueGifting: [
    "Spiritual Gifts",
    "Jewellery",
    "Experiential Gifts",
    "Electronics",
    "Exotic Flowers",
    "Toys n Games",
    "Balloon Decor",
    "Gifts n Guitarist",
  ],

  priceWise: [
    "Below Rs 500",
    "Rs 500 - Rs 1000",
    "Rs 1000 - Rs 2000",
    "Above Rs 2000",
  ],
};


export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [location] = useState("Location missing");
  const [activeMegaMenu, setActiveMegaMenu] = useState<"christmas" | "birthday" | null>(null);

  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);


  return (
    <>
      {/* ===== HEADER ===== */}
<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">

  {/* TOP BANNER */}
  <div
    className="h-10 bg-cover bg-center hidden md:block"
    style={{
      backgroundImage:
        "url('/images/desktop-free-delivery-banner-12-dec2.webp')",
    }}
  />

  {/* MAIN BAR */}
  <div className="border-b">
    <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between gap-3">

      {/* LEFT */}
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

        <button className="hidden md:flex flex-col text-left text-xs">
          <span className="font-medium text-gray-900">
            Where to deliver?
          </span>
          <span className="text-red-600 flex items-center gap-1">
            {location} <span className="text-gray-700">▼</span>
          </span>
        </button>
      </div>

      {/* SEARCH */}
      <div className="hidden md:flex flex-1 max-w-xl relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          placeholder="Search for gifts"
          className="w-full pl-10 pr-4 py-2 border rounded-full text-sm"
        />
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex items-center gap-6 text-xs text-gray-700">
        <NavIcon icon={<Truck size={18} />} label="Same Day" />
        <NavIcon icon={<IndianRupee size={18} />} label="INR" />
        <NavIcon icon={<Gift size={18} />} label="Corporate" />

        <Link href="/cart" className="relative text-center">
          <ShoppingCart size={18} />
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

  {/* CATEGORY BAR */}
  <nav className="hidden md:block border-b bg-white relative">
    <div className="max-w-7xl mx-auto px-4">
      <ul className="flex gap-6 py-3 text-sm text-gray-800">

        {/* CHRISTMAS */}
        <li
          onMouseEnter={() => setActiveMegaMenu("christmas")}
          className="cursor-pointer hover:text-red-600 whitespace-nowrap"
        >
          Christmas Gifts
        </li>

        {/* BIRTHDAY */}
<li
  onMouseEnter={() => setActiveMegaMenu("birthday")}
  className="cursor-pointer hover:text-red-600 whitespace-nowrap"
>
  Birthday
</li>

        {/* NORMAL ITEMS */}
        {categories
          .filter(c => c !== "Christmas Gifts" && c !== "Birthday")
          .map(item => (
            <li key={item}>
              <Link href="#" className="hover:text-red-600 whitespace-nowrap">
                {item}
              </Link>
            </li>
          ))}
      </ul>
    </div>

    {/* ================= MEGA MENU CONTAINER ================= */}
    {activeMegaMenu && (
      <div
        className="absolute left-0 top-full w-full bg-white shadow-xl border-t z-50"
        onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >

        <div className="max-w-7xl mx-auto px-8 py-8">

          {/* 🎄 CHRISTMAS MENU */}
          {activeMegaMenu === "christmas" && (
            <div className="grid grid-cols-5 gap-8">
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Joyful Gifts
                </h4>
                  <ul className="space-y-2">
                    {christmasMenu.joyfulGifts.map(item =>
                      item === "All Christmas Gifts" ? (
                        <Link
                          key={item}
                          href="/gifts/christmas"
                          className="block text-sm font-semibold text-gray-900 hover:text-red-600"
                        >
                          {item}
                        </Link>
                      ) : (
                        <li
                          key={item}
                          className="text-sm text-gray-700 hover:text-red-600 cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>

              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Secret Santa</h4>
                {christmasMenu.secretSanta.map(i => (
                  <p key={i} className="text-sm text-gray-800 hover:text-red-600 cursor-pointer">{i}</p>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Merry Gifting</h4>
                {christmasMenu.merryGifting.map(i => (
                  <p key={i} className="text-sm text-gray-800 hover:text-red-600 cursor-pointer">{i}</p>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Abroad</h4>
                {christmasMenu.abroad.map(i => (
                  <p key={i} className="text-sm text-gray-800 hover:text-red-600 cursor-pointer">{i}</p>
                ))}
              </div>

              <div>
                <img
                  src="/images/7be38b2996e9678ef8cfb385b4773214.gif"
                  className="rounded-xl h-[300px] w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* 🎂 BIRTHDAY MENU */}
   {activeMegaMenu === "birthday" && (
        <div className="grid grid-cols-6 gap-8">
          {Object.entries(birthdayMenu).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-gray-900 mb-3 capitalize">
                {title.replace(/([A-Z])/g, " $1")}
              </h4>
              {items.map(item => (
                <p
                  key={item}
                  className="text-sm text-gray-700 hover:text-red-600 cursor-pointer leading-6"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}

        </div>
      </div>
    )}
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

  {/* 🎄 CHRISTMAS */}
  <li>
    <button
      className="w-full flex justify-between items-center font-medium"
      onClick={() =>
        setOpenMobileSubmenu(
          openMobileSubmenu === "christmas" ? null : "christmas"
        )
      }
    >
      Christmas Gifts
      <span>{openMobileSubmenu === "christmas" ? "−" : "+"}</span>
    </button>

    {openMobileSubmenu === "christmas" && (
      <div className="mt-3 ml-3 space-y-3 text-xs text-gray-700">
        {Object.entries(christmasMenu).map(([section, items]) => (
          <div key={section}>
            <p className="font-semibold text-gray-900 mb-1">
              {section.replace(/([A-Z])/g, " $1")}
            </p>
            <ul className="space-y-1">
              {items.map(item => (
                <li
                  key={item}
                  className="hover:text-red-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </li>

  {/* 🎂 BIRTHDAY */}
  <li>
    <button
      className="w-full flex justify-between items-center font-medium"
      onClick={() =>
        setOpenMobileSubmenu(
          openMobileSubmenu === "birthday" ? null : "birthday"
        )
      }
    >
      Birthday
      <span>{openMobileSubmenu === "birthday" ? "−" : "+"}</span>
    </button>

    {openMobileSubmenu === "birthday" && (
      <div className="mt-3 ml-3 space-y-3 text-xs text-gray-700">
        {Object.entries(birthdayMenu).map(([section, items]) => (
          <div key={section}>
            <p className="font-semibold text-gray-900 mb-1">
              {section.replace(/([A-Z])/g, " $1")}
            </p>
            <ul className="space-y-1">
              {items.map(item => (
                <li
                  key={item}
                  className="hover:text-red-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </li>

  {/* NORMAL LINKS */}
  {categories
    .filter(c => c !== "Christmas Gifts" && c !== "Birthday")
    .map(item => (
      <li key={item}>
        <Link href="#" onClick={() => setMobileMenu(false)}>
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
