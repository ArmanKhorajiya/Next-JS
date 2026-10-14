import Link from "next/link";

export default function About() {
  return (
    <main
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <h1>About Me</h1>
      <p>I am learning Next.js step by step.</p>
      <Link
        href="/"
        style={{
          backgroundColor: "lightcoral",
          color: "black",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Home Page
      </Link>
    </main>
  );
}
