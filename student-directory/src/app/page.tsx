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
    <main className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Student Directory</h1>

        <p className="mt-2 text-gray-600">
          Search and view student information.
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student by name..."
          className="mt-6 w-full rounded border border-gray-300 bg-white p-3 outline-none focus:border-blue-500"
        />

        <p className="mt-4 text-sm text-gray-600">
          Total students found: {filteredStudents.length}
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="rounded border border-gray-200 bg-white p-5"
            >
              <h2 className="text-xl font-semibold">{student.name}</h2>

              <p className="mt-2 text-gray-600">
                Roll Number: {student.rollNo}
              </p>

              <p className="mt-1 text-gray-600">
                Department: {student.department}
              </p>

              <p className="mt-1 text-gray-600">Semester: {student.semester}</p>

              <p className="mt-1 break-words text-blue-600">
                Email: {student.email}
              </p>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <p className="mt-6 text-center text-gray-600">No students found.</p>
        )}
      </div>
    </main>
  );
}
