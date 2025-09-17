import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpParams } from "@/presentation";
import { authApi } from "@/infra";

export const useSignUpForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(SignUpSchema),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  const onSubmit = handleSubmit(
    async (data: SignUpParams) => await authApi().signUp(data),
  );

  return {
    form,
    control,
    onSubmit,
    isSubmitting,
  };
};
