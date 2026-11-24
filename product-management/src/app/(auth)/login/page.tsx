// app/(auth)/login/page.tsx
import { redirect } from "next/navigation";
import { getAuthenticatedUserId } from "@/lib/auth/get-user";
// import LoginForm from "@/components/auth/login-form";

export default async function LoginPage() {
	const userId = await getAuthenticatedUserId();

	if (userId) {
		redirect("/dashboard");
	}

	// return <LoginForm />;
}