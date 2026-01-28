import RecipeList from "@/components/RecipeList";

export default async function TagPage({ params }) {
  const { tag } = await params;
  const res = await fetch(`https://dummyjson.com/recipes/tag/${tag}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch recipes");

  const data = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">{tag}</h1>
      <RecipeList recipes={data.recipes} />
    </main>
  );
}
