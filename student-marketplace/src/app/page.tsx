
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  category: string;
  condition: string;
  type: "Sale" | "Free" | "Exchange";
  price: number;
  description: string;
  image: string;
  seller: string;
  contact: string;
}

const categories = [
  "All",
  "Electronics",
  "Books",
  "Furniture",
  "Accessories",
  "Other",
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from MongoDB
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error("Could not load products.");
        }

        setProducts(data.products);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong while loading products."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Search and category filtering
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Favorite toggle
  function toggleFavorite(id: string) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  // Category emoji
  function getCategoryEmoji(productCategory: string) {
    switch (productCategory) {
      case "Electronics":
        return "🎧";
      case "Books":
        return "📚";
      case "Furniture":
        return "🪑";
      case "Accessories":
        return "🎒";
      default:
        return "📦";
    }
  }

  // Product price
  function getPriceLabel(product: Product) {
    if (product.type === "Free") return "Free";
    if (product.type === "Exchange") return "Exchange";

    return `₹${product.price.toLocaleString("en-IN")}`;
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
            <a href="#favorites" title="Favorites" className="text-xl">
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
              <span className="text-blue-400">Sell</span> what you don&apos;t.
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-gray-300">
              A simple marketplace for students to buy and sell second-hand
              books, electronics, furniture and more.
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
              {["🎒", "🎧", "📚", "🧮"].map((emoji, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-700 bg-gray-800/80 p-8 text-6xl shadow-xl"
                >
                  {emoji}
                </div>
              ))}
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
            {loading ? "Loading..." : `${filteredProducts.length} Products`}
          </span>
        </div>

        {loading && (
          <div className="py-20 text-center text-gray-400">
            Loading products...
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl bg-red-950 p-5 text-center text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product._id}
                  className="overflow-hidden rounded-2xl border border-gray-700 bg-[#1F2937] transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-950/30"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="relative flex h-52 items-center justify-center bg-gray-800">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={700}
                        height={400}
                        unoptimized
                        className="h-52 w-full object-cover"
                      />
                    ) : (
                      <span className="text-7xl">
                        {getCategoryEmoji(product.category)}
                      </span>
                    )}

                    {/* FAVORITE BUTTON */}
                    <button
                      onClick={() => toggleFavorite(product._id)}
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/80 text-2xl hover:bg-blue-600"
                      aria-label="Toggle favorite"
                    >
                      {favorites.includes(product._id) ? "♥" : "♡"}
                    </button>
                  </div>

                  {/* PRODUCT INFORMATION */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-blue-950 px-3 py-1 text-blue-300">
                        {product.category}
                      </span>

                      <span className="rounded-full bg-green-950 px-3 py-1 text-green-300">
                        {product.condition}
                      </span>

                      <span className="rounded-full bg-gray-700 px-3 py-1 text-gray-300">
                        {product.type}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold">
                      {product.name}
                    </h3>

                    <div className="mt-5 flex items-center justify-between gap-2">
                      <span className="text-xl font-bold text-blue-400">
                        {getPriceLabel(product)}
                      </span>

                      {/* CORRECT PRODUCT DETAILS LINK */}
                      <Link
                        href={`/products/${product._id}`}
                        className="rounded-full border border-gray-600 px-4 py-2 text-xs font-semibold hover:border-blue-500 hover:text-blue-400"
                      >
                        View Details →
                      </Link>
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
          </>
        )}
      </section>

      {/* FAVORITES */}
      <section
        id="favorites"
        className="mx-auto max-w-7xl px-6 pb-16"
      >
        <h2 className="text-xl font-bold">Your Favorites</h2>

        <p className="mt-2 text-sm text-gray-400">
          {favorites.length} product(s) added to favorites in this session.
        </p>
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
