import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email("Inavlid email"),
  password: z.string().min(2, { message: "Password is required" }).trim(),
});

export type SignInParams = z.infer<typeof SignInSchema>;
