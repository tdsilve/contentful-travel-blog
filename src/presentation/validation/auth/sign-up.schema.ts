import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.email("Invalid email"),
    password: z.string().min(2, { message: "Password is required" }).trim(),
    confirmPassword: z
      .string()
      .min(2, { message: "Password is required" })
      .trim(),
    name: z.string().min(2, { message: "Name is required" }).trim(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpParams = z.infer<typeof SignUpSchema>;
