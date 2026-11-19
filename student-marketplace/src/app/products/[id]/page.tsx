
import { Suspense } from "react";
import ProductDetailsClient from "./ProductDetailsClient";

function LoadingProduct() {
  return (
    <main className="min-h-screen bg-[#111827] p-10 text-center text-white">
      Loading product details...
    </main>
  );
}

export default function ProductDetailsPage() {
  return (
    <Suspense fallback={<LoadingProduct />}>
      <ProductDetailsClient />
    </Suspense>
  );
}
