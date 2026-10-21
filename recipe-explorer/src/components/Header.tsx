import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="site-title">
          Recipe Explorer
        </Link>

        <nav className="navigation">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/recipes/catalog">Catalog</Link>
        </nav>
      </div>
    </header>
  );
}
