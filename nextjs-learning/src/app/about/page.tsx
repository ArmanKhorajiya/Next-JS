import Link from "next/link";

export default function About() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        About Me
      </h1>
      <p
        style={{
          textAlign: "center",
        }}
      >
        I am learning Next.js step by step.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: "lightcoral",
          color: "black",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Home Page
      </Link>
    </main>
  );
}
