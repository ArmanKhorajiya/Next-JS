import { userSchema } from "@/app/schema/user";

export async function POST(request: Request) {
  const body = await request.json();

  const result = userSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        message: "Validation failed",
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 },
    );
  }
}
