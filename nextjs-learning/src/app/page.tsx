import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>My First Next.js Website</h1>
      <p>I am learning Next.js from scratch.</p>
      <Link
        href="/about"
        style={{
          backgroundColor: "lightcoral",
          color: "black",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        About Page
      </Link>
    </main>
  );
}
