import RecipeList from "@/components/RecipeList";
import { notFound } from "next/navigation";

export default async function MealTypePage({ params }) {
  const resolvedParams = await params;
  const type = resolvedParams.type;

  if (!type) {
    notFound();
  }

  const decodedType = decodeURIComponent(type);

  const res = await fetch(
    `https://dummyjson.com/recipes/meal-type/${decodedType}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch meal type recipes");
  }

  const data = await res.json();

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-orange-600">
          {decodedType}
        </h1>
        <RecipeList recipes={data.recipes} />
      </section>
    </main>
  );
}
