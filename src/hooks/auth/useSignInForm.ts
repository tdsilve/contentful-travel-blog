import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInParams } from "@/presentation";
import { signIn } from "next-auth/react";

export const useSignInForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(SignInSchema),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  const onSubmit = handleSubmit(
    async ({ email, password }: SignInParams) =>
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      }),
  );

  return {
    form,
    control,
    onSubmit,
    isSubmitting,
  };
};
