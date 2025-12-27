"use client";


import Banner from "./components/Banner";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


type OccasionItem = {
title: string;
price: string;
img: string;
badge?: string; // ✅ optional
};
/* ================= OCCASION DATA ================= */
const occasionData: Record<string, OccasionItem[]> = {
Christmas: [
  {
    title: "Xmas Golden Red Sola Bloom Pot",
    price: "₹1,449",
    img: "/images/choco.jpg",
    badge: "Merry Vibes",
  },
  {
    title: "Mistletoe Radiance Balloon Display",
    price: "₹4,599",
    img: "/images/s-l1200.jpg",
  },
  {
    title: "Twinkling Xmas Tree Cupcake",
    price: "₹749",
    img: "/images/cup.jpg",
    badge: "Santa’s Pick",
  },
  {
    title: "Classic Poinsettia Plant Gift",
    price: "₹899",
    img: "/images/images (1).jpg",
  },
],

Birthday: [
  {
    title: "Chocolate Birthday Cake",
    price: "₹799",
    img: "/images/6e6a0351653c0776f7eb750a3b5aea3b.jpg",
  },
  {
    title: "Birthday Balloon Decoration",
    price: "₹1,299",
    img: "/images/85a65744a1c3682b0a39cb33b1f6e99f.jpg",
  },
  {
    title: "Personalised Mug",
    price: "₹499",
    img: "/images/101927.webp",
  },
  {
    title: "Flower Bouquet",
    price: "₹999",
    img: "/images/RosyAdoration_2.webp",
  },
],

Anniversary: [
  {
    title: "Red Roses Bouquet",
    price: "₹1,199",
    img: "/images/02_f2ce0d42-f67e-4662-98f5-73d94131bee2.webp",
  },
  {
    title: "Couple Photo Frame",
    price: "₹899",
    img: "/images/fb0a0e49f559008b2b7a0534d67aabed.jpg",
  },
],

Wedding: [
  {
    title: "Luxury Flower Basket",
    price: "₹2,499",
    img: "/images/Flower-Arrangement-Pastel-Roses-Gerberas-Basket-Delivery-Bangkok-FLB25-307-6.jpg",
  },
],
};
const offerImages = [
"/images/Partner_Banners_DEsk.webp",
"/images/Mobikwik_PartnerBanners_New_UI.webp",
"/images/App_Download_offer_New_UI-27-08-2025.webp",
"/images/Partner_Banners_Desk_23.jpg",
];

/* ================= HOME PAGE ================= */
export default function HomePage() {
const tabs = Object.keys(occasionData) as (keyof typeof occasionData)[];
const [activeTab, setActiveTab] = useState<keyof typeof occasionData>(tabs[0]);
const offerSliderRef = useRef<HTMLDivElement | null>(null);
const [giftTab, setGiftTab] = useState<"occasion" | "gift">("occasion");
const [showOptions, setShowOptions] = useState(false);
const calendarRef = useRef<HTMLDivElement | null>(null);
const storyRef = useRef<HTMLDivElement | null>(null);

const occasionList = [
"Christmas",
"Birthday",
"Anniversary",
"Love N Romance",
"Congratulations",
"House Warming",
"Get Well Soon",
"Sympathy N Funeral",
];

const giftTypeList = [
"All Gifts",
"Cakes",
"Flowers",
"Personalised Gifts",
"Premium Gifts",
"Plants",
"Chocolates",
"Gift Hampers",
"Balloon Decorations",
"Combos",
];

const celebrations = [
{
  date: "25th DEC",
  title: "Christmas",
  img: "/images/1_2NhQs7L0d5IuxFe7t9TxIg.jpg",
},
{
  date: "1st JAN",
  title: "New Year",
  img: "/images/happy-new-year-2026-gif-4.gif",
},
{
  date: "13th JAN",
  title: "Lohri",
  img: "/images/lohri-happy.gif",
},
{
  date: "14th JAN",
  title: "Makar Sankranti",
  img: "/images/happy-makar-sankranti-raju.gif",
},
{
  date: "14th - 17th JAN",
  title: "Pongal",
  img: "/images/original-8711a5a4391b504f79555c4488855bf8.gif",
},
];

const giftingStories = [
{
  views: "92",
  label: "CHRISTMAS GIFTS",
  img: "/images/FnpCakesChristmas.mp4",
},
{
  views: "701",
  label: "PERSONALISED MUGS",
  img: "/images/d398f2e4-62be-47b5-a077-7978a09b81fc.mp4",
},
{
  views: "48",
  label: "CHRISTMAS CAKES",
  img: "/images/Cloche1.mp4",
},
{
  views: "797",
  label: "GIFT JEWELLERY",
  img: "/images/2bedc208-7dd2-42e6-99aa-653dbf520021.mp4",
},
{
  views: "564",
  label: "GIFT LOVE",
  img: "/images/6c9d827b-31bb-4d0c-a319-0f57a5cb148c.mp4",
},
{
  views: "26",
  label: "CHRISTMAS CAKES",
  img: "/images/Cloche1.mp4",
},
{
  views: "612",
  label: "BIRTHDAY GIFTS",
  img: "/images/9d2d3d41-a3bb-4a44-849c-ec27b86626a6.mp4",
},
];

const homeLivingGifts = [
{
  title: "Home Decor",
  img: "/images/homedecor_170125.webp ",
},
{
  title: "Photo Frames",
  img: "/images/photoframes_170125.webp",
},
{
  title: "Kitchen & Dining",
  img: "/images/kitchendining_170125.webp",
},
{
  title: "Wall Lights",
  img: "/images/Untitled_170125.webp",
},
{
  title: "Diffusers",
  img: "/images/homefragnances_170125.webp",
},
{
  title: "Dry Flowers",
  img: "/images/Dried-Flowers_170125.webp",
},
];

const brands = [
{
  name: "Nyug",
  logo: "/images/Nuyug.jpg",
},
{
  name: "Ritualistic",
  logo: "/images/Ritualistic.jpg",
},
{
  name: "Carlton London",
  logo: "/images/Brands_carltonlondon_170125.webp",
},
{
  name: "Ellementry",
  logo: "/images/Brands_Ellementry_170125.webp",
},
{
  name: "Kimirica",
  logo: "/images/Kimirca.jpg",
},
{
  name: "Voylla",
  logo: "/images/Voylla.jpg",
},
];


useEffect(() => {
const slider = offerSliderRef.current;
if (!slider) return;

const interval = setInterval(() => {
  const card = slider.querySelector<HTMLDivElement>(".offer-card");
  if (!card) return;

  const cardWidth = card.offsetWidth + 24; // gap included
  slider.scrollBy({
    left: cardWidth * 3,
    behavior: "smooth",
  });
}, 2500);

return () => clearInterval(interval);
}, []);

useEffect(() => {
const slider = calendarRef.current;
if (!slider) return;

const interval = setInterval(() => {
  const card = slider.querySelector("div > div");
  if (!card) return;

  const cardWidth = (card as HTMLElement).offsetWidth + 24; // gap included

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
}, 2500); // speed

return () => clearInterval(interval);
}, []);
useEffect(() => {
const slider = storyRef.current;
if (!slider) return;

const interval = setInterval(() => {
  const card = slider.querySelector<HTMLElement>("div > div");
  if (!card) return;

  const cardWidth = card.offsetWidth + 20; // gap included

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  }
}, 2500); // ⏱ auto slide speed

return () => clearInterval(interval);
}, []);


return (
  <div className="space-y-12 sm:space-y-20 bg-gray-50">

    {/* HERO BANNER */}
    <section className="w-full">
      <Banner />

      {/* TOP ICON CATEGORIES (FNP STYLE) */}
<section className="bg-white py-4 border-b">
<div className="max-w-7xl mx-auto px-4">

  <div className="flex gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-9 md:gap-6">

    {[
      { name: "Christmas", img: "/images/christmas.png", link: "/gifts/christmas" },
      { name: "Birthday Gifts", img: "/images/birthday.webp", link: "/gifts/occasion/birthday" },
      { name: "Anniversary", img: "/images/61355.avif", link: "/gifts/occasion/anniversary" },
      { name: "New Year", img: "/images/cheers-to-2026-gif.gif", link: "/gifts/new-year" },
      { name: "Same Day Delivery", img: "/images/2hourdelivery_Squircle_41224.webp", link: "/same-day-delivery" },
        { name: "Flower", img: "/images/1023756_9d423.gif", link: "/flower" },
      { name: "Cakes", img: "/images/images.jpg", link: "/cakes" },
      { name: "Send Abroad", img: "/images/variety-people-multitasking-3d-cartoon-scene_23-2151294507.avif", link: "/international" },
      { name: "Balloon Decor", img: "/images/71W+XpZYcWL.jpg", link: "/balloon-decor" },
    ].map((item) => (
      <Link
        key={item.name}
        href={item.link}
        className="min-w-[90px] md:min-w-0 flex flex-col items-center text-center group"
      >
        {/* IMAGE */}
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                      rounded-2xl bg-gray-100 
                      flex items-center justify-center 
                      overflow-hidden shadow-sm 
                      group-hover:shadow-md transition"
          >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <span className="mt-2 text-xs md:text-sm font-medium text-gray-800 group-hover:text-pink-600">
          {item.name}
        </span>
      </Link>
    ))}

  </div>

</div>
</section>

    </section>

{/* FESTIVE CHRISTMAS SECTION */}
<section className=" ">
<div className="max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

    {/* ================= LEFT FEATURE CARD ================= */}
    <div className="lg:col-span-4">
      <div className="rounded-2xl overflow-hidden bg-[#8B0000] shadow-lg">
        <img
          src="/images/Chirstmas_FGC_Banners_DeskV2.jpg"
          alt="Merry Gifts"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* ================= RIGHT GRID ================= */}
    <div className="lg:col-span-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">

        {[
          { title: "Secret Santa Gifts", img: "FGC_Christmas_482x400-01.jpg" },
          { title: "Christmas Trees", img: "FGC_Christmas_482x400-02.jpg" },
          { title: "Gift Hampers", img: "FGC_Christmas_482x400-03.jpg" },
          { title: "New Year Gifts", img: "FGC_Christmas_482x400-04.jpg" },
          { title: "Plants", img: "FGC_Christmas_482x400-05.jpg" },
          { title: "Cakes", img: "FGC_Christmas_482x400-06.jpg" },
          { title: "Flowers", img: "FGC_Christmas_482x400-07.jpg" },
          { title: "Personalised", img: "FGC_Christmas_482x400-08.jpg" },
        ].map((item) => (
          <div key={item.title} className="text-center">
            <div className="bg-[#8B0000] rounded-2xl p-3 shadow-md hover:shadow-xl transition">
              <img
                src={`/images/${item.img}`}
                alt={item.title}
                className="w-full h-32 sm:h-36 object-cover rounded-xl hover:scale-105 transition"
              />
            </div>

            <p className="mt-2 text-sm font-medium text-gray-900">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </div>

  </div>
</div>
</section>
{/* SECRET SANTA PROMO BANNER */}
<section className="py-0">
<img
      src="/images/santa-banner-desktop.png"
      alt="FNP Secret Santa"
      className="w-full object-cover"
    />
</section>

{/* BIRTHDAY GIFTS THAT WOW */}
<section className="">
<div className="max-w-7xl mx-auto px-4">

  {/* TITLE */}
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
    Birthday Gifts That Wow
  </h2>

  {/* PRODUCT GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {[

      {
        title: "Birthday Cakes",
        img: "/images/a2dbd2e0c3bae19de6c5d02989411da3.jpg",
      },
      {
        title: "Flower Arrangements",
        img: "/images/pot.webp",
      },
      {
        title: "Personalised Gifts",
        img: "/images/Personalised_686x800.jpg",
      },
      {
        title: "Balloon Decorations",
        img: "/images/decor.jpg",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="group cursor-pointer"
      >
        {/* IMAGE CARD */}
        <div className="rounded-3xl overflow-hidden shadow-md 
                        transition duration-300 
                        group-hover:shadow-xl">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-72 object-cover 
                        transition duration-300 ease-out
                        group-hover:scale-[1.04]"
          />
        </div>

        {/* NAME */}
        <p className="mt-3 text-base font-medium text-center text-gray-900">
          {item.title}
        </p>
      </div>
    ))}

  </div>

</div>
</section>


<section className="">
<div className="max-w-7xl mx-auto px-4">

  {/* TITLE */}
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
    Spread Christmas Joy
  </h2>

  {/* PRODUCT GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

    {[
      { title: "Delhi", img: "/images/Red-Fort.webp" },
      { title: "Bengaluru", img: "/images/m_bangalore_main_tv_destination_img_1_l_849_1253.avif" },
      { title: "Mumbai", img: "/images/687953ff3d5881a51c1d8c2c.webp" },
      { title: "Pune", img: "/images/600X400_4-min.jpg" },
      { title: "Hyderabad", img: "/images/view-historic-building-against-blue-sky.jpg" },
    ].map((item) => (
      <div key={item.title} className="group cursor-pointer">

        {/* IMAGE CARD */}
        <div className="rounded-3xl overflow-hidden shadow-md 
                        transition duration-300 
                        group-hover:shadow-xl">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-56 object-cover 
                        transition duration-300 ease-out
                        group-hover:scale-[1.04]"
          />
        </div>

        {/* NAME */}
        <p className="mt-3 text-base font-medium text-center text-gray-900">
          {item.title}
        </p>

      </div>
    ))}

  </div>

</div>
</section>

<section className="">
<div className="max-w-7xl mx-auto px-4">

  {/* TITLE */}
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
    Popular In Gifting
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

    {[
  { title: "Get Today", img: "/images/get-today-08-08-2025.webp" },
      { title: "Midnight Delivery", img: "/images/midnight-delivery_25.webp" },
      { title: "Just Launched", img: "/images/just-launched-07-05-2025.webp" },
      { title: "Send Abroad", img: "/images/send-abroad_25.webp" },
      { title: "Send In Bulk", img: "/images/sne-din-bulk_25.webp" },
    ].map((item) => (
      <div key={item.title} className="group cursor-pointer text-center">

        {/* IMAGE CARD */}
        <div className="rounded-3xl overflow-hidden shadow-sm
                        transition duration-300
                        group-hover:shadow-lg">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover
                        transition duration-300
                        group-hover:scale-[1.04]"
          />
        </div>

        {/* LABEL */}
        <p className="mt-3 text-sm font-medium text-gray-900">
          {item.title}
        </p>

      </div>
    ))}

  </div>

</div>
</section>

<section className="py-8 sm:py-12">
  <div className="max-w-7xl mx-auto px-4">

    {/* HEADING */}
    <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">
      Tailored For Your Occasions
    </h2>

    {/* TABS */}
    <div className="flex gap-4 sm:gap-8 border-b pb-3 sm:pb-4 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
      {[
        { key: "Christmas", label: "Christmas", icon: "🎄" },
        { key: "Birthday", label: "Birthday", icon: "🎂" },
        { key: "Anniversary", label: "Anniversary", icon: "💍" },
        { key: "Wedding", label: "Wedding", icon: "👰" },
      ].map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(tab.key as keyof typeof occasionData)
            }
            className={`flex flex-col items-center justify-center
              min-w-[88px] sm:min-w-[110px]
              rounded-xl px-3 sm:px-4 py-2.5 sm:py-3
              transition-all
              ${
                isActive
                  ? "bg-[#F6F6ED] border border-[#B7B28A]"
                  : "hover:bg-gray-50"
              }`}
          >
            <span className="text-lg sm:text-xl">{tab.icon}</span>

            <span
              className={`mt-1 text-xs sm:text-sm font-medium
                ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>

    {/* PRODUCTS */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {occasionData[activeTab]?.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition
                     flex flex-col"
        >
          {/* IMAGE */}
          <div className="relative">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-44 sm:h-64 lg:h-72 object-cover"
            />

            {item.badge && (
              <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3
                bg-green-600 text-white text-[10px] sm:text-xs
                font-semibold px-2 py-1 rounded-md">
                {item.badge}
              </span>
            )}
          </div>

          {/* CONTENT */}
          <div className="p-3 sm:p-4 flex flex-col flex-grow">
            <p className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 mb-1">
              {item.title}
            </p>
            <p className="text-sm sm:text-base font-semibold text-gray-900 mt-auto">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

<section className="">
<div className="max-w-7xl mx-auto px-4">

  <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6">
    Get Exclusive Offers from
  </h1>

  <div className="relative">

    {/* LEFT ARROW */}
    <button
      onClick={() => {
        const card = offerSliderRef.current?.querySelector(".offer-card");
        if (!card || !offerSliderRef.current) return;
        offerSliderRef.current.scrollBy({
          left: -(card as HTMLElement).offsetWidth * 3,
          behavior: "smooth",
        });
      }}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 bg-white shadow-md rounded-full
                  flex items-center justify-center"
    >
      ‹
    </button>

    {/* SLIDER */}
    <div
      ref={offerSliderRef}
      className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
    >
      {offerImages.map((img, index) => (
        <div
          key={index}
          className="offer-card flex-shrink-0 w-[90%] sm:w-[48%] lg:w-[32%]"
        >
          <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src={img}
              alt="Offer"
              className="w-full h-[180px] sm:h-[200px] object-contain"
            />
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT ARROW */}
    <button
      onClick={() => {
        const card = offerSliderRef.current?.querySelector(".offer-card");
        if (!card || !offerSliderRef.current) return;
        offerSliderRef.current.scrollBy({
          left: (card as HTMLElement).offsetWidth * 3,
          behavior: "smooth",
        });
      }}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 bg-white shadow-md rounded-full
                flex items-center justify-center"
    >
      ›
    </button>

  </div>
</div>
</section>


<section className="">
  <div className="max-w-7xl mx-auto px-4">

    <div className="bg-[#F6F8ED] rounded-2xl sm:rounded-3xl
                    p-6 sm:p-8 lg:p-12
                    flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

      {/* ================= LEFT CONTENT ================= */}
      <div className="flex-1 w-full">

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#4A4A1F] mb-4 sm:mb-6">
          Gift Finder
        </h1>

        {/* CARD */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 max-w-xl">
          <p className="text-sm font-medium text-gray-900 mb-4">
            Search Gifts Quicker <span className="ml-1">⚡</span>
          </p>

          {/* IMAGES */}
          <div className="flex gap-4 sm:gap-6 mb-5 sm:mb-6">

            {/* OCCASION */}
            <div
              onClick={() => {
                setGiftTab("occasion");
                setShowOptions(true);
              }}
              className="flex flex-col items-center cursor-pointer flex-1"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/New-App_Gift-Finder_Occasion.jpg"
                  alt="Occasion"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-xs sm:text-sm text-gray-700">
                Occasion
              </span>
            </div>

            {/* GIFT TYPE */}
            <div
              onClick={() => {
                setGiftTab("gift");
                setShowOptions(true);
              }}
              className="flex flex-col items-center cursor-pointer flex-1"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/New-App_Gift-Finder_Gift-Type.jpg"
                  alt="Gift Type"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-xs sm:text-sm text-gray-700">
                Gift Type
              </span>
            </div>

          </div>

          {/* CHIPS */}
          {showOptions && (
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {(giftTab === "occasion" ? occasionList : giftTypeList).map(
                (item) => (
                  <button
                    key={item}
                    className="px-3 sm:px-4 py-1.5 sm:py-2
                               rounded-full text-xs sm:text-sm
                               border border-gray-200 text-gray-700
                               hover:border-gray-400 hover:text-gray-900
                               transition"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="flex-1 flex justify-center relative w-full">

        {/* CIRCLE BG */}
        <div className="w-[240px] h-[240px]
                        sm:w-[320px] sm:h-[320px]
                        lg:w-[418px] lg:h-[386px]
                        rounded-full bg-[#C8F0DF]
                        flex items-center justify-center">

          <img
            src="/images/find.png"
            alt="Gift Finder"
            className="w-[90%] object-contain"
          />
        </div>

      </div>

    </div>

  </div>
</section>

<section className="">
  <div className="max-w-7xl mx-auto px-4">

    {/* TITLE */}
    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
      Celebrations Calendar
    </h2>

    {/* SCROLLER */}
    <div
      ref={calendarRef}
      className="flex gap-4 sm:gap-6
                 overflow-x-auto scroll-smooth scrollbar-hide
                 pb-2 snap-x snap-mandatory"
    >
      {celebrations.map((item) => (
        <div
          key={item.title}
          className="min-w-[180px] sm:min-w-[220px] lg:min-w-[240px]
                     flex-shrink-0 text-center snap-start"
        >
          {/* CARD */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md">

            {/* DATE BADGE */}
            <div className="absolute top-0 left-0 right-0
                            bg-gray-200/90 text-gray-900
                            text-[10px] sm:text-xs font-semibold
                            py-1.5 sm:py-2 text-center z-10">
              {item.date}
            </div>

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
            />
          </div>

          {/* LABEL */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-900">
            {item.title}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


<section className="bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* TITLE */}
    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
      Joyful Gifting Stories
    </h2>

    <div className="relative">

      {/* LEFT ARROW – DESKTOP ONLY */}
      <button
        onClick={() =>
          storyRef.current?.scrollBy({
            left: -220,
            behavior: "smooth",
          })
        }
        className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 bg-white shadow-md rounded-full
                   items-center justify-center"
      >
        ‹
      </button>

      {/* STORIES */}
      <div
        ref={storyRef}
        className="flex gap-4 sm:gap-5
                   overflow-x-auto scrollbar-hide scroll-smooth
                   snap-x snap-mandatory pb-2"
      >
        {giftingStories.map((story, index) => (
          <div
            key={index}
            className="relative min-w-[140px] sm:min-w-[180px]
                       h-[240px] sm:h-[320px]
                       rounded-xl sm:rounded-2xl
                       overflow-hidden bg-black
                       flex-shrink-0 snap-start"
          >
            {/* VIDEO */}
            <video
              src={story.img}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* VIEWS */}
            <div className="absolute top-2 left-2
                            flex items-center gap-1
                            bg-black/60 text-white
                            text-[10px] sm:text-xs
                            px-2 py-1 rounded-full
                            pointer-events-none">
              👁 {story.views}
            </div>

            {/* MUTE ICON */}
            <div className="absolute top-2 right-2
                            bg-black/60 text-white
                            text-[10px] sm:text-xs
                            p-1 rounded-full
                            pointer-events-none">
              🔇
            </div>

            {/* BOTTOM LABEL */}
            <div className="absolute bottom-2 sm:bottom-3
                            left-1/2 -translate-x-1/2
                            pointer-events-none text-center">
              <span
                className="inline-block max-w-[120px] sm:max-w-[140px]
                           px-3 sm:px-4 py-1.5
                           rounded-xl
                           text-[10px] sm:text-[11px]
                           font-medium leading-tight
                           text-white
                           bg-black/60 backdrop-blur
                           shadow-lg"
              >
                {story.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT ARROW – DESKTOP ONLY */}
      <button
        onClick={() =>
          storyRef.current?.scrollBy({
            left: 220,
            behavior: "smooth",
          })
        }
        className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 bg-white shadow-md rounded-full
                   items-center justify-center"
      >
        ›
      </button>

    </div>
  </div>
</section>


<section className="py-8 sm:py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* TITLE */}
    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
      Home & Living Gifts
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

      {homeLivingGifts.map((item) => (
        <div
          key={item.title}
          className="group cursor-pointer text-center"
        >
          {/* IMAGE CARD */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm
                          transition duration-300
                          group-hover:shadow-lg">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[180px] sm:h-[220px] lg:h-[260px]
                         object-cover
                         transition duration-300
                         group-hover:scale-[1.03]"
            />
          </div>

          {/* LABEL */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-900">
            {item.title}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4">

  {/* TITLE */}
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
    Shop By Brands
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

    {brands.map((brand) => (
      <div
        key={brand.name}
        className="bg-gray-100 rounded-2xl
                    flex items-center justify-center
                    h-[120px]
                    transition
                    hover:bg-gray-200 cursor-pointer"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-[100px] max-w-[140px] object-contain"
        />
      </div>
    ))}

  </div>

</div>
</section>



  </div>
);
}
