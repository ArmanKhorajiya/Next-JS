import { connectToDatabase } from "@/app/lib/mongodb";
import { userSchema } from "@/schema/user";
import { connect } from "http2";

export async function POST(request: Request){

    const body = await request.json();
    const {name, email, password} = body;

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

  await connectToDatabase()
  console.log(body)
  console.log()

    console.log(result.data)

    // console.log(result.data);

return Response.json(
  {
    success: true,
    data: result.data,
    message: "Registration complete",
  },
  { status: 200 }
);
}