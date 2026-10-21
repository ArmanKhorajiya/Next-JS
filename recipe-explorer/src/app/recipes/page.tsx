"use client";

import { useState } from "react";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import RecipeSearch from "@/components/RecipeSearch";
import { recipes } from "@/data/recipes";

export default function RecipesPage() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Header />

      <main className="container">
        <h1 className="page-title">Explore Recipes</h1>

        <p className="page-description">Find your next favorite meal.</p>

        <RecipeSearch value={search} onChange={setSearch} />

        <p className="result-count">Recipes found: {filteredRecipes.length}</p>

        {filteredRecipes.length > 0 ? (
          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="empty-message">No recipes found. Try another search.</p>
        )}
      </main>
    </>
  );
}
