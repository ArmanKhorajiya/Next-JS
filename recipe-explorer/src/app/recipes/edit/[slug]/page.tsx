"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { recipes } from "@/data/recipes";

type RecipeEditorProps = {
  params: Promise<{ slug: string }>;
};

export default function RecipeEditor({ params }: RecipeEditorProps) {
  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    params.then(({ slug: recipeSlug }) => {
      if (!active) return;

      const recipe = recipes.find((item) => item.slug === recipeSlug);

      if (recipe) {
        setSlug(recipe.slug);
        setName(recipe.name);
        setDescription(recipe.description);
        setIngredients(recipe.ingredients.join("\n"));
        setInstructions(recipe.instructions.join("\n"));
      }

      setReady(true);
    });

    return () => {
      active = false;
    };
  }, [params]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Preview updated. Changes are not permanently saved.");
  }

  if (!ready) {
    return (
      <>
        <Header />
        <main className="container">Loading recipe...</main>
      </>
    );
  }

  if (!slug) {
    return (
      <>
        <Header />
        <main className="container">
          <h1 className="page-title">Recipe Not Found</h1>
          <Link href="/recipes" className="recipe-link">
            Back to Recipes
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="page-title">Edit Recipe</h1>
        <p className="page-description">Edit the recipe details below.</p>

        <form className="content-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Recipe Name</label>
            <input
              id="name"
              className="form-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-textarea"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ingredients">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              className="form-textarea"
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructions">Instructions (one per line)</label>
            <textarea
              id="instructions"
              className="form-textarea"
              value={instructions}
              onChange={(event) => setInstructions(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Preview Changes
          </button>

          {message && <p role="status">{message}</p>}

          <p>
            <Link href={`/recipes/${slug}`} className="recipe-link">
              Back to Recipe
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
