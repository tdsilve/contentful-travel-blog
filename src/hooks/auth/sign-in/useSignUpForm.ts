import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpInput } from "@/models";

export const useSignUpForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(SignUpSchema),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;
  const onSubmit = handleSubmit((data: SignUpInput) => console.log(data));

  return {
    form,
    control,
    onSubmit,
    isSubmitting,
  };
};
