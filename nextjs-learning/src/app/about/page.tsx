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
          fontSize: 35,
          marginBottom: 30,
          color: "black",
        }}
      >
        Home Page
      </h1>
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
          backgroundColor: "green",
          color: "black",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Go To Home Page
      </Link>
    </main>
  );
}
