import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "My journey learning Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full"
        style={{
          backgroundColor: "darkred",
        }}
      >
        <header
          style={{
            textAlign: "center",
          }}
        >
          <h2>My Website</h2>
          <p>Learning Next.js step by step</p>
        </header>

        {children}

        <footer style={{
          textAlign:"center"
        }}>
          <p>© 2026 My Website</p>
        </footer>
      </body>
    </html>
  );
}
