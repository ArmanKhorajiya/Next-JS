import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <Link href="/" className="site-title">
            Student Directory
          </Link>

          <nav className="navigation">
            <Link href="/students">Students</Link>
            <Link href="/departments">Departments</Link>
          </nav>
        </div>
      </header>

      <main className="not-found">
        <h1>404 - Page Not Found</h1>

        <p>
          Sorry, the student or department you are looking for does not exist.
        </p>

        <Link href="/" className="primary-link">
          Return to Home
        </Link>
      </main>
    </>
  );
}
