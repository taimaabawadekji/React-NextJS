// export default async function RecipePage({ params: promiseParams }) {
//   const { id } = await promiseParams;
//   if (!id) return <p>Invalid recipe id</p>;

//   const res = await fetch(`https://dummyjson.com/recipes/${id}`);

//   if (!res.ok) throw new Error("Failed to fetch recipe");

//   const recipe = await res.json();
//   return (
//     <main>
//       <h1>{recipe.name}</h1>
//       <img src={recipe.image} alt={recipe.name} width={400} />
//       <p>Difficulty: {recipe.difficulty}</p>

//       <h2>Ingredients</h2>
//       <ul>
//         {recipe.ingredients.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <h2>Instructions</h2>
//       <ol>
//         {recipe.instructions.map((step, i) => (
//           <li key={i}>{step}</li>
//         ))}
//       </ol>
//     </main>
//   );
// }

import Link from "next/link";
export default async function RecipePage({ params: promiseParams }) {
  const { id } = await promiseParams;
  if (!id) return <p>Invalid recipe id</p>;

  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch recipe");

  const recipe = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-amber-400 p-6 text-white">
          <h1 className="text-3xl font-bold">{recipe.name}</h1>
          <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-white/20">
            {recipe.difficulty}
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {recipe.tags.map((tag) => (
              <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-white/20 cursor-pointer hover:bg-white/30 transition">
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 grid md:grid-cols-3 gap-6">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-70 h-70 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Ingredients */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">
              Ingredients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.ingredients.map((item, i) => (
                <li
                  key={i}
                  className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-md text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-semibold text-orange-600 mb-3">
              Instructions ({recipe.servings} Servings):
            </h2>
            <ol className="space-y-3">
              {recipe.instructions.map((step, i) => (
                <li
                  key={i}
                  className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-md"
                >
                  <span className="font-semibold text-orange-500 mr-2">
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
