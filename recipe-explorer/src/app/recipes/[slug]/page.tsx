import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { recipes } from "@/data/recipes";

type RecipeDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function RecipeDetails({ params }: RecipeDetailsProps) {
  const { slug } = await params;

  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="container">
        <Link href="/recipes" className="back-link">
          ← Back to Recipes
        </Link>

        <section className="content-card">
          <p className="recipe-category">{recipe.category}</p>

          <h1 className="page-title">{recipe.name}</h1>

          <p className="page-description">{recipe.description}</p>

          <div className="recipe-meta">
            <span>{recipe.time} minutes</span>
            <span>{recipe.difficulty}</span>
            <span>{recipe.cuisine}</span>
          </div>

          <h2>Ingredients</h2>

          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <h2>Cooking Instructions</h2>

          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>

          <Link href={`/recipes/edit/${recipe.slug}`} className="recipe-link">
            Edit Recipe →
          </Link>
        </section>
      </main>
    </>
  );
}
