import { userSchema } from "@/app/schema/user";
import User from "@/app/models/user";

export async function POST(request: Request) {
  const body = await request.json();

  const result = userSchema.safeParse(body);

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
