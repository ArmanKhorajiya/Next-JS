import { PassThrough } from "stream";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string("name should be string").min(5),
  email: z.email(),
  password: z.coerce.string().min(3),
});
const signupSchema = userSchema
  .extend({
    confirmPassword: z.string(),
    terms: z.boolean().refine((value) => value, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = userSchema.omit({
  name: true,
});
