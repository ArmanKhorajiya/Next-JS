import { connectToDatabase } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import { loginSchema } from "@/app/schema/user";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = loginSchema.safeParse(body);

    // 1. Validate request body with Zod
    if (!result.success) {
      return Response.json(
        {
          success: false,
          data: null,
          message: result.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // 2. Find user and explicitly include passwordHash
    const user = await User.findOne({
      email: result.data.email,
    }).select("+passwordHash");

    // 3. Check if user exists (replaces the duplicate !result.success check)
    if (!user) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    // 4. Verify password against stored hash
    const isPasswordValid = await bcrypt.compare(
      result.data.password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return Response.json(
        {
          success: false,
          data: null,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    // 5. Generate JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const token = await new SignJWT({
      userId: user._id.toString(),
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    // 6. Set HTTP-only cookie (Next.js 15+ async cookies)
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return Response.json(
      {
        success: true,
        data: {
          id: user._id,
          email: user.email,
        },
        message: "Login successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return Response.json(
      {
        success: false,
        data: null,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
