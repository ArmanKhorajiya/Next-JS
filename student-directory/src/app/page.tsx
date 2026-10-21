import Link from "next/link";
import { students } from "@/data/students";
import { departments } from "@/data/departments";

export default function HomePage() {
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

      <main className="container">
        <h1 className="page-title">Welcome to Student Directory</h1>

        <p className="page-description">
          Find student information and explore college departments.
        </p>

        <div className="department-grid">
          <section className="content-card">
            <h2>Students</h2>

            <p>
              Browse student profiles and view their department,
              semester, email, and skills.
            </p>

            <p>
              Total student records: {students.length}
            </p>

            <Link href="/students" className="primary-link">
              Browse Students →
            </Link>
          </section>

          <section className="content-card">
            <h2>Departments</h2>

            <p>
              Explore college departments and see the students
              associated with each department.
            </p>

            <p>
              Total departments: {departments.length}
            </p>

            <Link href="/departments" className="primary-link">
              Browse Departments →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
