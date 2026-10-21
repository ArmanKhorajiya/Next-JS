import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="not-found">
        <h1>404 - Recipe Not Found</h1>

        <p>
          Sorry, we couldn't find that recipe. Try exploring our available
          recipes instead.
        </p>

        <Link href="/recipes" className="primary-button">
          Browse Recipes
        </Link>
      </main>
    </>
  );
}
