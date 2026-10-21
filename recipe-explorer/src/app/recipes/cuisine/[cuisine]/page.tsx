import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

type CuisinePageProps = {
  params: Promise<{ cuisine: string }>;
};

export default async function CuisinePage({ params }: CuisinePageProps) {
  const { cuisine } = await params;

  const cuisineName = cuisine
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const cuisineRecipes = recipes.filter(
    (recipe) => recipe.cuisine.toLowerCase() === cuisineName.toLowerCase(),
  );

  if (cuisineRecipes.length === 0) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="container">
        <Link href="/recipes" className="back-link">
          ← Back to Recipes
        </Link>

        <h1 className="page-title">{cuisineName} Cuisine</h1>

        <p className="page-description">
          Explore recipes from {cuisineName} cuisine.
        </p>

        <div className="recipe-grid">
          {cuisineRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </>
  );
}
