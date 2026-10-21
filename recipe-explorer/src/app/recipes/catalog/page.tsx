import Link from "next/link";
import Header from "@/components/Header";
import { recipes } from "@/data/recipes";

export default function RecipeCatalogPage() {
  const categories = Array.from(
    new Set(recipes.map((recipe) => recipe.category)),
  );

  return (
    <>
      <Header />

      <main className="container">
        <h1 className="page-title">Recipe Catalog</h1>

        <p className="page-description">Browse recipes by meal category.</p>

        <div className="category-grid">
          {categories.map((category) => {
            const categoryRecipes = recipes.filter(
              (recipe) => recipe.category === category,
            );

            return (
              <section className="category-card" key={category}>
                <h2>{category}</h2>

                <p>
                  {categoryRecipes.length}{" "}
                  {categoryRecipes.length === 1 ? "recipe" : "recipes"}
                </p>

                <ul>
                  {categoryRecipes.map((recipe) => (
                    <li key={recipe.id}>
                      <Link href={`/recipes/${recipe.slug}`}>
                        {recipe.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
