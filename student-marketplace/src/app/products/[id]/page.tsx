
import Link from "next/link";
import Image from "next/image";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  // Validate MongoDB product ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  // Connect to MongoDB
  await connectDB();

  // Find product
  const product = await Product.findById(id).lean();

  if (!product) {
    notFound();
  }

  // Format price
  const priceLabel =
    product.type === "Free"
      ? "Free"
      : product.type === "Exchange"
        ? "Exchange"
        : `₹${product.price.toLocaleString("en-IN")}`;

  return (
    <main className="min-h-screen bg-[#111827] px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Marketplace
        </Link>

        <div className="mt-8 grid items-start gap-10 md:grid-cols-2">

          {/* PRODUCT IMAGE */}
          <div className="relative h-87.5 overflow-hidden rounded-2xl border border-gray-700 bg-[#1F2937] sm:h-112.5">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-3"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-8xl">
                📦
              </div>
            )}
          </div>

          {/* PRODUCT INFORMATION */}
          <div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-blue-950 px-3 py-2 text-blue-300">
                {product.category}
              </span>

              <span className="rounded-full bg-green-950 px-3 py-2 text-green-300">
                {product.condition}
              </span>

              <span className="rounded-full bg-gray-700 px-3 py-2 text-gray-300">
                {product.type}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-400">
              {priceLabel}
            </p>

            {/* DESCRIPTION */}
            <div className="mt-8 border-t border-gray-700 pt-6">
              <h2 className="text-xl font-semibold">
                Description
              </h2>

              <p className="mt-3 leading-7 text-gray-300">
                {product.description}
              </p>
            </div>

            {/* SELLER INFORMATION */}
            <div className="mt-8 rounded-xl border border-gray-700 bg-[#1F2937] p-6">
              <h2 className="text-xl font-semibold">
                Seller Information
              </h2>

              <p className="mt-4 text-gray-300">
                Seller:{" "}
                <span className="text-white">
                  {product.seller}
                </span>
              </p>

              <p className="mt-3 text-gray-300">
                Contact:{" "}
                <span className="text-white">
                  {product.contact}
                </span>
              </p>

              <a
                href={`tel:${product.contact}`}
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
              >
                Contact Seller
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
