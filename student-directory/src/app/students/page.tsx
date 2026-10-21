"use client";

import Link from "next/link";
import { useState } from "react";
import { students } from "@/data/students";

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
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
        <h1 className="page-title">Students</h1>

        <p className="page-description">
          Browse students and view their profile information.
        </p>

        <input
          type="text"
          className="search-input"
          placeholder="Search students by name..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <p className="result-count">
          Students found: {filteredStudents.length}
        </p>

        <div className="student-grid">
          {filteredStudents.map((student) => (
            <article className="student-card" key={student.id}>
              <h2>{student.name}</h2>

              <p>Student ID: {student.id}</p>
              <p>Department: {student.department}</p>
              <p>Semester: {student.semester}</p>

              <Link href={`/students/${student.id}`} className="primary-link">
                View Profile →
              </Link>
            </article>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <p className="empty-message">No students found.</p>
        )}
      </main>
    </>
  );
}
