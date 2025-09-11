import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.email("Invalid email address"),
    password: z.string().min(2, "You must provide a password").trim(),
    confirmPassword: z.string().min(2, "You must provide a password").trim(),
    username: z.string().min(1, "You must provide an username"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type SignUpInput = z.infer<typeof SignUpSchema>;
