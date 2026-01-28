"use client";

import { useEffect, useState } from "react";

export default function HeroSlider() {
  const images = ["/images/hero-section.avif", "/images/hero-section2.avif"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Cook smarter, eat better, and explore new flavors every day.
        </p>
        <a
          href="/recipes"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
        >
          Browse Recipes
        </a>
      </div>
    </section>
  );
}
