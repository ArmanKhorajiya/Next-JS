// lib/auth/get-user.ts
import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export async function getAuthenticatedUserId() {
	const cookieStore = await cookies();
	const token = cookieStore.get("auth-token")?.value;

	if (!token) return null;

	const payload = await verifyToken(token);
	return payload?.userId ?? null;
}