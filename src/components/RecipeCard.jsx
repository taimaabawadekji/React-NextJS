// import Link from "next/link";

// export default function RecipeCard({ recipe }) {
//   return (
//     <Link href={`/recipes/${recipe.id}`}>
//       <article>
//         <img src={recipe.image} alt={recipe.name} width={200} />
//         <h2 className="text-center">{recipe.name}</h2>
//         <p className="text-center">{recipe.difficulty}</p>
//         <p className="text-center">{recipe.rating}</p>
//       </article>
//     </Link>
//   );
// }

import Link from "next/link";
import FavoriteIcon from "@/components/FavoriteIcon";

export default function RecipeCard({ recipe }) {
  const fullStars = Math.floor(recipe.rating);
  const hasHalfStar = recipe.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="relative w-80 h-auto">
      {/* Favorite button */}
      <FavoriteIcon favId={recipe.id} />
      <Link href={`/recipes/${recipe.id}`}>
        <article className="bg-white cursor-pointer pb-4 border rounded-lg hover:shadow-lg transition w-80 h-auto">
          {/* Image centered */}
          <div className="flex justify-center">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-auto h-auto object-cover rounded-md"
            />
          </div>
          <h2 className="text-center font-semibold mt-3">{recipe.name}</h2>
          <p className="text-center text-sm text-gray-500">
            {recipe.difficulty} - {recipe.prepTimeMinutes} Minutes
          </p>
          {/* Rating stars */}
          <div className="flex justify-center mt-2">
            {Array(fullStars)
              .fill(0)
              .map((_, i) => (
                <span key={`full-${i}`} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            {hasHalfStar && <span className="text-yellow-400 text-lg">☆</span>}
            {Array(emptyStars)
              .fill(0)
              .map((_, i) => (
                <span key={`empty-${i}`} className="text-gray-300 text-lg">
                  ★
                </span>
              ))}
          </div>
        </article>
      </Link>
    </div>
  );
}
