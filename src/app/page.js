// import HeroSlider from "@/components/HeroSlider";
// import RecipeList from "@/components/RecipeList";
// export default async function Home() {
//   const res = await fetch("https://dummyjson.com/recipes");
//   const data = await res.json();
//   const topRatedRecipes = data.recipes
//     .filter((recipe) => recipe.rating >= 4.9)
//     .sort((a, b) => b.rating - a.rating);

//   return (
//     <main className="min-h-screen bg-white text-black">
//       {/*Hero Section*/}
//       <HeroSlider />

//       {/*Top Rated Recipes*/}
//       <section className="px-6 py-12">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-6 text-center">Top Rated Recipes</h2>
//           <RecipeList recipes={topRatedRecipes} />
//           <div className="mt-8 text-center">
//             <a
//               href="/recipes"
//               className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
//             >
//               See All Recipes
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import HeroSlider from "@/components/HeroSlider";
import RecipeList from "@/components/RecipeList";
import MealTypeCards from "@/components/MealTypeCards";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();

  const topRatedRecipes = data.recipes
    .filter((recipe) => recipe.rating >= 4.9)
    .sort((a, b) => b.rating - a.rating);
  {
    console.log(topRatedRecipes);
  }

  const mealTypes = Array.from(
    new Set(
      data.recipes
        .flatMap((r) => (Array.isArray(r.mealType) ? r.mealType : [r.mealType]))
        .filter(Boolean), // remove null/undefined
    ),
  );
  {
    console.log(mealTypes);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <HeroSlider />

      {/* Top Rated Recipes Section */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">
            Top Rated Recipes
          </h2>

          <RecipeList recipes={topRatedRecipes} />

          {/*See See All Recipes Button*/}
          <div className="mt-10 text-center">
            <a
              href="/recipes"
              className="inline-block bg-gradient-to-r from-orange-400 to-amber-400
                         text-white px-8 py-3 rounded-full text-lg font-medium
                         hover:from-orange-500 hover:to-amber-500
                         shadow-md transition"
            >
              See All Recipes
            </a>
          </div>
        </div>
      </section>
      {/* Meal Types Section */}
      <section className="bg-white px-6 py-14 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">
            Your Meal, Your Way
          </h2>

          <MealTypeCards mealTypes={mealTypes} />
        </div>
      </section>
    </main>
  );
}
