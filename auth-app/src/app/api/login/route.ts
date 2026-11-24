import { connectToDatabase } from "@/app/lib/mongodb";
import User from "@/models/user";
import { loginSchema } from "@/schema/user";

export async function POST(request: Request) {
  const body = await request.json();
  const result = loginSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        success: false,
        data: null,
        message: result.error.issues[0].message,
      },
      { status: 400 },
    );
  }

  await connectToDatabase();

  const user = await User.findOne({
    email: result.data.email,
  }).select("+passwordHash");

  if (!result.success) {
    return Response.json(
      {
        success: false,
        data: null,
        message: result.error.issues[0].message,
      },
      { status: 400 },
    );
  }
}
