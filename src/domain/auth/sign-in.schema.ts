import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(2, "You must provide a password").trim(),
});

export type SignInInput = z.infer<typeof SignInSchema>;
