import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";

type StudentProfileProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentProfile({ params }: StudentProfileProps) {
  const { id } = await params;

  const student = students.find((item) => item.id === id);

  if (!student) {
    notFound();
  }

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
        <Link href="/students" className="back-link">
          ← Back to Students
        </Link>

        <h1 className="page-title">{student.name}</h1>

        <p className="page-description">Student Profile</p>

        <section className="content-card">
          <p>
            <strong>Student ID:</strong> {student.id}
          </p>

          <p>
            <strong>Department:</strong> {student.department}
          </p>

          <p>
            <strong>Semester:</strong> {student.semester}
          </p>

          <p>
            <strong>Email:</strong> {student.email}
          </p>

          <div>
            <strong>Skills:</strong>

            <ul>
              {student.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
