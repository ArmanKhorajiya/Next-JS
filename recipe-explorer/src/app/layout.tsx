
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Explorer",
  description: "Explore recipes, ingredients, and cooking instructions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
