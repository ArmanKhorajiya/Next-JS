
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Engineering Calculator",
    category: "Electronics",
    condition: "Good",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=700",
  },
  {
    id: 2,
    name: "DSA Books Set",
    category: "Books",
    condition: "Like New",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700",
  },
  {
    id: 3,
    name: "Study Table",
    category: "Furniture",
    condition: "Good",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    condition: "Like New",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
  },
];

const categories = [
  "All",
  "Electronics",
  "Books",
  "Furniture",
  "Accessories",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#111827] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-700/70 bg-[#111827]/90 shadow-lg shadow-black/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-blue-400">◆</span> Campus
            <span className="text-blue-400">Market</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <Link href="/" className="text-blue-400">
              Home
            </Link>

            <a href="#products" className="hover:text-blue-400">
              Products
            </a>

            <a href="#categories" className="hover:text-blue-400">
              Categories
            </a>

            <Link href="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#favorites"
              title="Favorites"
              className="text-xl"
            >
              ♡
            </a>

            <Link
              href="/sell"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-700"
            >
              + Sell Product
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-gray-800 bg-linear-to-r from-[#111827] via-[#14264a] to-[#111827]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-blue-400">
              BUY • SELL • EXCHANGE
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Find what you need.
              <br />
              <span className="text-blue-400">Sell</span> what you
              don&apos;t.
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-gray-300">
              A simple marketplace for students to buy and sell
              second-hand books, electronics, furniture and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
              >
                Explore Products →
              </a>

              <Link
                href="/sell"
                className="rounded-lg border border-blue-500 px-6 py-3 font-semibold hover:bg-blue-950"
              >
                + Sell an Item
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-72 items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl border border-gray-700 bg-gray-800/80 p-8 text-6xl shadow-xl">
                🎒
              </div>

              <div className="rounded-2xl border border-gray-700 bg-gray-800/80 p-8 text-6xl shadow-xl">
                🎧
              </div>

              <div className="rounded-2xl border border-gray-700 bg-gray-800/80 p-8 text-6xl shadow-xl">
                📚
              </div>

              <div className="rounded-2xl border border-gray-700 bg-gray-800/80 p-8 text-6xl shadow-xl">
                🧮
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH AND CATEGORIES */}
      <section
        id="categories"
        className="mx-auto max-w-7xl px-6 py-10"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <input
            type="text"
            placeholder="Search products (e.g. book, calculator, table)..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-gray-800 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-blue-500"
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm font-medium transition ${
                  category === item
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-gray-700 bg-gray-800 text-gray-300 hover:border-blue-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 pb-20"
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">
              Recently Listed Products
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Discover affordable products from students in your campus.
            </p>
          </div>

          <span className="text-sm text-blue-400">
            {filteredProducts.length} Products
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-700 bg-[#1F2937] transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={400}
                  unoptimized
                  className="h-52 w-full object-cover"
                />

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/80 text-2xl hover:bg-blue-600"
                  aria-label="Toggle favorite"
                >
                  {favorites.includes(product.id) ? "♥" : "♡"}
                </button>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-blue-950 px-3 py-1 text-blue-300">
                    {product.category}
                  </span>

                  <span className="rounded-full bg-green-950 px-3 py-1 text-green-300">
                    {product.condition}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {product.name}
                </h3>

                <div className="mt-5 flex items-center justify-between gap-2">
                  <span className="text-2xl font-bold text-blue-400">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <button className="rounded-full border border-gray-600 px-4 py-2 text-xs font-semibold hover:border-blue-500 hover:text-blue-400">
                    View Details →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            <p className="text-4xl">🔍</p>

            <p className="mt-4 text-lg">
              No products found.
            </p>

            <p className="mt-2 text-sm">
              Try another search or category.
            </p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-[#0B1120] px-6 py-10 text-center">
        <h2 className="text-xl font-bold">
          Campus<span className="text-blue-400">Market</span>
        </h2>

        <p className="mt-3 text-sm text-gray-400">
          A marketplace made for students.
        </p>

        <p className="mt-5 text-xs text-gray-500">
          © 2026 CampusMarket. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
