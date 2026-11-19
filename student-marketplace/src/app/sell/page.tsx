
"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";

export default function SellProduct() {
  const [form, setForm] = useState({
    name: "",
    category: "Electronics",
    condition: "Good",
    type: "Sale",
    price: "",
    description: "",
    image: "",
    seller: "",
    contact: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    if (
      !form.name.trim() ||
      !form.description.trim() ||
      !form.seller.trim() ||
      !form.contact.trim()
    ) {
      setIsSuccess(false);
      setMessage("Please fill in all required fields.");
      return;
    }

    if (form.type === "Sale" && Number(form.price) <= 0) {
      setIsSuccess(false);
      setMessage("Please enter a valid price.");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          price: form.type === "Sale" ? Number(form.price) : 0,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add product.");
      }

      setIsSuccess(true);
      setMessage("Product added successfully!");

      setForm({
        name: "",
        category: "Electronics",
        condition: "Good",
        type: "Sale",
        price: "",
        description: "",
        image: "",
        seller: "",
        contact: "",
      });
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#111827] px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Marketplace
        </Link>

        <div className="mb-8 mt-6">
          <h1 className="text-3xl font-bold md:text-4xl">
            Sell Your Product
          </h1>

          <p className="mt-3 text-gray-400">
            Share your unused items with other students.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gray-700 bg-[#1F2937] p-6 md:p-8"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Product Name *
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Engineering Calculator"
              required
              className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Category *
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
              >
                <option>Electronics</option>
                <option>Books</option>
                <option>Furniture</option>
                <option>Accessories</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Condition *
              </label>

              <select
                name="condition"
                value={form.condition}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
              >
                <option>Like New</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Listing Type *
            </label>

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
            >
              <option>Sale</option>
              <option>Free</option>
              <option>Exchange</option>
            </select>
          </div>

          {form.type === "Sale" && (
            <div>
              <label className="mb-2 block text-sm font-medium">
                Price (₹) *
              </label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                min="1"
                placeholder="Enter your price"
                required
                className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description *
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your product..."
              rows={4}
              required
              className="w-full resize-y rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Product Image URL
            </label>

            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-500">
              We&apos;ll add proper image uploads later.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h2 className="mb-5 text-xl font-semibold">
              Seller Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Seller Name *
                </label>

                <input
                  type="text"
                  name="seller"
                  value={form.seller}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Contact Number *
                </label>

                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  required
                  className="w-full rounded-lg border border-gray-600 bg-[#111827] px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {message && (
            <div
              className={`rounded-lg p-4 text-sm ${
                isSuccess
                  ? "bg-green-950 text-green-300"
                  : "bg-red-950 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 py-4 font-semibold hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Saving Product..." : "Submit Product Details"}
          </button>
        </form>
      </div>
    </main>
  );
}
