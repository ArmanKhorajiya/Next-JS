import { z } from "zod";

export const userSchema = z.object({
  name: z.string("name should be string").min(5),
  email: z.email(),
  password: z.coerce.string().min(3),
});
