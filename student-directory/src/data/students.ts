export type Student = {
  id: string;
  name: string;
  department: string;
  semester: number;
  email: string;
  skills: string[];
};

export const students: Student[] = [
  {
    id: "101",
    name: "Aarav Patel",
    department: "Computer Science",
    semester: 3,
    email: "aarav@example.com",
    skills: ["React", "JavaScript"],
  },
  {
    id: "102",
    name: "Diya Shah",
    department: "Information Technology",
    semester: 3,
    email: "diya@example.com",
    skills: ["Next.js", "CSS"],
  },
  {
    id: "103",
    name: "Krish Mehta",
    department: "Computer Science",
    semester: 4,
    email: "krish@example.com",
    skills: ["Python", "DSA"],
  },
  {
    id: "104",
    name: "Anaya Desai",
    department: "Electronics",
    semester: 3,
    email: "anaya@example.com",
    skills: ["C++", "Arduino"],
  },
];
