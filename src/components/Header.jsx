"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [query, setQuery] = useState(""); //to know what's typed into the search box
  const [suggestions, setSuggestions] = useState([]); //recipe results

  // Fetch suggestions as the user types
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`,
        );
        const data = await res.json();
        setSuggestions(data.recipes || []); //store in suggestions the recipes
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <header className="bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 h-21">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-[28.5rem] sm:w-[20rem] md:w-[16rem] lg:w-[10rem]">
            <Image src="/images/Logo2.png" alt="Recipe App" fill priority />
          </div>
        </div>
        {/* Search bar */}
        <div className="relative mr-4">
          <input
            className="px-3 py-1 ml-100 rounded-lg text-black w-64 placeholder-white"
            type="text"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} //when I type, it's triggering setQuery which triggers the effect, which triggers the API
          />

          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg z-50">
              {suggestions.map((recipe) => (
                <li
                  key={recipe.id}
                  className="hover:bg-gray-200 cursor-pointer"
                  // Clear suggestions when a recipe is selected
                  onClick={() => {
                    setQuery("");
                    setSuggestions([]);
                  }}
                >
                  {/* display recipes name on suggestions dropdown */}
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="block px-3 py-2 w-full h-full"
                  >
                    {recipe.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li>
              <Link href="/" className="hover:text-yellow-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className="hover:text-yellow-200 transition"
              >
                Recipes
              </Link>
            </li>
          </ul>
        </nav>

        {/* Favorites */}
        <Link href="/favorites">
          <img
            src="/icons/favorites.svg"
            alt="Favorites"
            className="w-6 h-6 m-4 hover:text-orange-500"
          />
        </Link>
      </div>
    </header>
  );
}
