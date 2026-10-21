import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Directory",
  description: "Browse student profiles and departments",
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