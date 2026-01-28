"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/components/RecipeCard";

export default function FavoritesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const storedIds = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (storedIds.length === 0) {
        setFavoriteRecipes([]); // No recipes in local storage
        return;
      }

      try {
        // Fetch each favorite recipe by its ID
        const responses = await Promise.all(
          storedIds.map((id) =>
            fetch(`https://dummyjson.com/recipes/${id}`).then((res) =>
              res.json(),
            ),
          ),
        );
        setFavoriteRecipes(responses);
      } catch (err) {
        console.error("Failed to fetch favorite recipes:", err);
        // You can handle error gracefully if needed (like displaying a message)
      }
    }

    // Fetch favorites after the component mounts
    fetchFavorites();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-600">
        My Favorites
      </h1>

      {/* If there are no favorites */}
      {favoriteRecipes.length === 0 ? (
        <p className="p-6 text-center">No favorites yet.</p>
      ) : (
        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      )}
    </main>
  );
}
