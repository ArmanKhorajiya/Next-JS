"use client";

import { useState } from "react";

type Recipe = {
  id: number;
  name: string;
  category: string;
  time: number;
  difficulty: string;
  ingredients: string[];
  description: string;
};

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Vegetable Sandwich",
    category: "Breakfast",
    time: 15,
    difficulty: "Easy",
    ingredients: ["Bread", "Tomato", "Cucumber", "Butter"],
    description: "A quick sandwich made with fresh vegetables.",
  },
  {
    id: 2,
    name: "Masala Maggi",
    category: "Snacks",
    time: 10,
    difficulty: "Easy",
    ingredients: ["Maggi noodles", "Onion", "Tomato", "Spices"],
    description: "Popular noodles cooked with Indian spices.",
  },
  {
    id: 3,
    name: "Paneer Curry",
    category: "Lunch",
    time: 35,
    difficulty: "Medium",
    ingredients: ["Paneer", "Tomato", "Onion", "Cream"],
    description: "A simple paneer curry served with roti or rice.",
  },
  {
    id: 4,
    name: "Fruit Salad",
    category: "Dessert",
    time: 10,
    difficulty: "Easy",
    ingredients: ["Apple", "Banana", "Grapes", "Orange"],
    description: "A refreshing salad made with fresh fruits.",
  },
  {
    id: 5,
    name: "Vegetable Pulao",
    category: "Lunch",
    time: 30,
    difficulty: "Medium",
    ingredients: ["Rice", "Carrot", "Peas", "Spices"],
    description: "Rice cooked with vegetables and aromatic spices.",
  },
  {
    id: 6,
    name: "Chocolate Milkshake",
    category: "Dessert",
    time: 5,
    difficulty: "Easy",
    ingredients: ["Milk", "Chocolate", "Sugar", "Ice cream"],
    description: "A cold and creamy chocolate drink.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        .page {
          min-height: 100vh;
          padding: 35px 20px;
          background: #f3f4f6;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page h1 {
          margin: 0;
          font-size: 32px;
        }

        .description {
          margin-top: 10px;
          color: #666;
        }

        .filters {
          display: flex;
          gap: 12px;
          margin-top: 22px;
        }

        .search-input,
        .category-select {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          font-size: 15px;
        }

        .search-input {
          flex: 1;
          min-width: 0;
        }

        .category-select {
          width: 180px;
        }

        .result-count {
          margin: 20px 0 12px;
          color: #555;
          font-size: 14px;
        }

        .recipe-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .recipe-card {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: white;
        }

        .recipe-card h2 {
          margin: 0 0 12px;
          font-size: 20px;
        }

        .recipe-category {
          display: inline-block;
          padding: 5px 9px;
          border-radius: 4px;
          background: #e5e7eb;
          color: #444;
          font-size: 12px;
        }

        .recipe-card p {
          color: #555;
          font-size: 14px;
          line-height: 1.5;
        }

        .ingredients {
          padding-top: 8px;
          border-top: 1px solid #eee;
        }

        .empty-message {
          margin-top: 25px;
          text-align: center;
          color: #666;
        }

        @media (max-width: 750px) {
          .recipe-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 500px) {
          .recipe-list {
            grid-template-columns: 1fr;
          }

          .filters {
            flex-direction: column;
          }

          .category-select {
            width: 100%;
          }

          .page h1 {
            font-size: 27px;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <h1>Recipe Explorer</h1>

          <p className="description">
            Find recipes and explore their ingredients and cooking time.
          </p>

          <div className="filters">
            <input
              type="text"
              className="search-input"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Snacks">Snacks</option>
              <option value="Lunch">Lunch</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <p className="result-count">
            Recipes found: {filteredRecipes.length}
          </p>

          <div className="recipe-list">
            {filteredRecipes.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <span className="recipe-category">{recipe.category}</span>

                <h2>{recipe.name}</h2>

                <p>{recipe.description}</p>

                <p>
                  <strong>Cooking time:</strong> {recipe.time} minutes
                </p>

                <p>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>

                <div className="ingredients">
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    {recipe.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <p className="empty-message">No recipes found.</p>
          )}
        </div>
      </main>
    </>
  );
}
