
import Link from "next/link";
import type { Recipe } from "@/types/recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-content">
        <p className="recipe-category">{recipe.category}</p>

        <h2>{recipe.name}</h2>

        <p>{recipe.description}</p>

        <div className="recipe-meta">
          <span>{recipe.time} min</span>
          <span>{recipe.difficulty}</span>
          <span>{recipe.cuisine}</span>
        </div>

        <Link
          href={`/recipes/${recipe.slug}`}
          className="recipe-link"
        >
          View Recipe →
        </Link>
      </div>
    </article>
  );
}
