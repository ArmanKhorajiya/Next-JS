import Link from "next/link";
import { notFound } from "next/navigation";
import { departments } from "@/data/departments";
import { students } from "@/data/students";

type DepartmentPageProps = {
  params: Promise<{
    department: string;
  }>;
};

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { department: departmentId } = await params;

  const department = departments.find((item) => item.id === departmentId);

  if (!department) {
    notFound();
  }

  const departmentStudents = students.filter(
    (student) => student.department === department.name,
  );

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
        <Link href="/departments" className="back-link">
          ← Back to Departments
        </Link>

        <h1 className="page-title">{department.name}</h1>

        <p className="page-description">{department.description}</p>

        <section className="content-card">
          <p>
            <strong>Department Head:</strong> {department.head}
          </p>

          <p>
            <strong>Total Students:</strong> {department.totalStudents}
          </p>
        </section>

        <h2 style={{ marginTop: "28px" }}>Students in this Department</h2>

        {departmentStudents.length > 0 ? (
          <div className="student-grid">
            {departmentStudents.map((student) => (
              <article className="student-card" key={student.id}>
                <h2>{student.name}</h2>
                <p>Semester: {student.semester}</p>

                <Link href={`/students/${student.id}`} className="primary-link">
                  View Profile →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-message">
            No student records are available for this department yet.
          </p>
        )}
      </main>
    </>
  );
}
