import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInInput } from "@/domain";

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
  const onSubmit = handleSubmit((data: SignInInput) => console.log(data));

  return {
    form,
    control,
    onSubmit,
    isSubmitting,
  };
};
