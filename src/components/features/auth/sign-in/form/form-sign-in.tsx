"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, FormSignInContainer } from "@/components";
import { SignInSchema } from "@/models";

export const FormSignIn = () => {
  const { control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });
  return (
    <FormSignInContainer>
      <form>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input type="email" placeholder="Email" {...field} />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input type="password" placeholder="Password" {...field} />
          )}
        />
        <Input type="submit" />
      </form>
    </FormSignInContainer>
  );
};
