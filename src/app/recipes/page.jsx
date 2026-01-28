import RecipeList from "../../components/RecipeList";

export default async function RecipesPage() {
  const res = await fetch("https://dummyjson.com/recipes");

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await res.json();

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-orange-600">
          All Recipes
        </h1>
        <RecipeList recipes={data.recipes} />
      </section>
    </main>
  );
}
