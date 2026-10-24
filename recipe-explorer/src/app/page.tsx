import Link from "next/link";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

export default function HomePage() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <h1>Discover Your Next Favorite Recipe</h1>

          <p>
            Explore simple meals, discover new cuisines, and find step-by-step
            instructions for your next dish.
          </p>

          <Link href="/recipes" className="primary-button">
            Explore Recipes
          </Link>
        </section>

          <h2>Featured Recipes</h2>

          <p className="page-description">A few recipes to get you started.</p>

          <div className="recipe-grid">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

        <section className="content-card">
          <h2>Browse the Recipe Catalog</h2>

          <p>
            Find recipes by meal category and explore different cooking ideas.
          </p>

          <Link href="/recipes/catalog" className="recipe-link">
            View Catalog →
          </Link>
        </section>
      </main>

      <footer className="site-footer">Recipe Explorer</footer>
    </>
  );
}
