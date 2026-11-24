// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { getAuthenticatedUserId } from "@/lib/auth/get-user";

export default async function DashboardPage() {
  const userId = await getAuthenticatedUserId();

  if (!userId) {
    redirect("/login");
  }

  return <h1>Dashboard</h1>;
}
