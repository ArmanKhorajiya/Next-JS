export type Department = {
  id: string;
  name: string;
  description: string;
  head: string;
  totalStudents: number;
};

export const departments: Department[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Study programming, software development, and computer systems.",
    head: "Dr. Mehta",
    totalStudents: 120,
  },
  {
    id: "information-technology",
    name: "Information Technology",
    description: "Learn web technologies, networks, and information systems.",
    head: "Dr. Shah",
    totalStudents: 95,
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Explore electronic circuits, embedded systems, and hardware.",
    head: "Dr. Patel",
    totalStudents: 80,
  },
];
