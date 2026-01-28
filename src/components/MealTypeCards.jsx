"use client";
import Link from "next/link";

export default function MealTypeCards({ mealTypes }) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {mealTypes.map((type) => (
        <div
          key={type}
          className="relative bg-amber-50 rounded-lg shadow-lg overflow-hidden group h-40 flex items-center justify-center"
        >
          <span className="text-xl font-semibold z-20 relative">{type}</span>

          {/* Overlay with button */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-30">
            <Link
              href={`/meal-type/${encodeURIComponent(type)}`}
              className="bg-orange-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-500 transition"
            >
              View All
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
