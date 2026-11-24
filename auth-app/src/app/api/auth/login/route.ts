// app/api/auth/login/route.ts
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import User from "@/app/models/user";
import { connectToDatabase } from "@/app/lib/mongodb";
import { signToken } from "@/app/lib/auth/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findOne({ email }).select("+passwordHash");

    if (!user) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);

    if (!valid) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await signToken(user._id.toString());
    const cookieStore = await cookies();

    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
