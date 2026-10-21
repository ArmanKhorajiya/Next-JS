import Link from "next/link";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
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
        <h1 className="page-title">Departments</h1>

        <p className="page-description">
          Explore the departments in our college.
        </p>

        <div className="department-grid">
          {departments.map((department) => (
            <article className="department-card" key={department.id}>
              <h2>{department.name}</h2>

              <p>{department.description}</p>
              <p>Department Head: {department.head}</p>
              <p>Students: {department.totalStudents}</p>

              <Link
                href={`/departments/${department.id}`}
                className="primary-link"
              >
                View Department →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
