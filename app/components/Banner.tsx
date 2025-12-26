"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { useEffect } from "react";

const slides = [
  {
    image: "/images/674a5b6732e02413cc2c2f742f5a197e.gif",
    title: "’Tis the Season of Gifting!",
    subtitle: "Say Merry Christmas with heartfelt holiday gifts",
    bg: "bg-[#f8eee6]",
    btn: "bg-red-600",
  },
  {
    image: "/images/Best-of-the-Best.gif",
    title: "Welcome 2026, Thoughtfully!",
    subtitle: "Joyous gifts for a joyous beginning",
    bg: "bg-[#fde9b6]",
    btn: "bg-yellow-600",
  },
  {
    image: "/images/0e6582c41b9d6acc6e50a733ca6fe0b1.gif",
    title: "Anniversaries Made Special",
    subtitle: "Find timeless surprises for timeless love",
    bg: "bg-[#fdeff2]",
    btn: "bg-pink-600",
  },
];

export default function Banner() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);

return (
  <section className="w-full px-4 md:px-8 pt-11 mb-14">
    <div ref={sliderRef} className="keen-slider">

      {slides.map((s, index) => (
        <div key={index} className="keen-slider__slide">
          
          {/* CARD */}
          <div
            className="relative h-[300px] md:h-[360px] rounded-[32px]
                       overflow-hidden shadow-xl group
                       transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div
              className="absolute inset-0 bg-gradient-to-r
                         from-black/70 via-black/40 to-transparent"
            />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center
                            px-6 md:px-10 max-w-[70%]">
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl
                             font-extrabold text-white leading-tight">
                {s.title}
              </h2>

              <p className="text-sm md:text-base lg:text-lg
                            text-gray-200 mt-3 max-w-md">
                {s.subtitle}
              </p>

              <Link
                href="/products"
                className={`mt-6 inline-block w-fit
                            ${s.btn} text-white
                            px-6 py-3 rounded-full
                            text-sm md:text-base font-semibold
                            shadow-lg hover:opacity-90`}
              >
                Order Now
              </Link>
            </div>

            {/* FRAME BORDER */}
            <div className="absolute inset-0 rounded-[32px]
                            ring-1 ring-white/20 pointer-events-none" />
          </div>

        </div>
      ))}

    </div>
  </section>
);


}
