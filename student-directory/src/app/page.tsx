"use client";

import { useState } from "react";

type Student = {
  id: number;
  name: string;
  rollNo: string;
  department: string;
  semester: number;
  email: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Aarav Patel",
    rollNo: "CS001",
    department: "Computer Science",
    semester: 3,
    email: "aarav@example.com",
  },
  {
    id: 2,
    name: "Diya Shah",
    rollNo: "CS002",
    department: "Computer Science",
    semester: 3,
    email: "diya@example.com",
  },
  {
    id: 3,
    name: "Krish Mehta",
    rollNo: "IT003",
    department: "Information Technology",
    semester: 4,
    email: "krish@example.com",
  },
  {
    id: 4,
    name: "Anaya Desai",
    rollNo: "IT004",
    department: "Information Technology",
    semester: 3,
    email: "anaya@example.com",
  },
  {
    id: 5,
    name: "Reyansh Joshi",
    rollNo: "CS005",
    department: "Computer Science",
    semester: 5,
    email: "reyansh@example.com",
  },
  {
    id: 6,
    name: "Myra Trivedi",
    rollNo: "EC006",
    department: "Electronics",
    semester: 3,
    email: "myra@example.com",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        .page {
          min-height: 100vh;
          background: #f3f4f6;
          padding: 35px 20px;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page h1 {
          margin: 0;
          font-size: 32px;
        }

        .description {
          margin-top: 10px;
          color: #666;
        }

        .search-input {
          width: 100%;
          padding: 12px;
          margin-top: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          font-size: 16px;
        }

        .search-input:focus {
          outline: 2px solid #93c5fd;
          border-color: #2563eb;
        }

        .result-count {
          margin: 20px 0 12px;
          color: #555;
          font-size: 14px;
        }

        .student-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .student-card {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: white;
        }

        .student-card h2 {
          margin: 0 0 14px;
          font-size: 20px;
        }

        .student-card p {
          margin: 8px 0;
          color: #555;
          font-size: 14px;
          overflow-wrap: anywhere;
        }

        .empty-message {
          margin-top: 25px;
          text-align: center;
          color: #666;
        }

        @media (max-width: 750px) {
          .student-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 500px) {
          .student-list {
            grid-template-columns: 1fr;
          }

          .page h1 {
            font-size: 27px;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <h1>Student Directory</h1>

          <p className="description">Search and view student information.</p>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student by name..."
            className="search-input"
          />

          <p className="result-count">
            Total students found: {filteredStudents.length}
          </p>

          <div className="student-list">
            {filteredStudents.map((student) => (
              <div className="student-card" key={student.id}>
                <h2>{student.name}</h2>
                <p>Roll Number: {student.rollNo}</p>
                <p>Department: {student.department}</p>
                <p>Semester: {student.semester}</p>
                <p>Email: {student.email}</p>
              </div>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <p className="empty-message">No students found.</p>
          )}
        </div>
      </main>
    </>
  );
}
