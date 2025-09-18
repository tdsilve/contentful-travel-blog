"use client";
import { useSignInForm } from "@/hooks";
import {
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  ButtonLoading,
} from "@/presentation";

export const FormSignIn = () => {
  const { form, control, onSubmit, isSubmitting } = useSignInForm();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          name="email"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} variant="auth" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  variant="auth"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading
          isLoading={isSubmitting}
          disabled={isSubmitting}
          type="submit"
          className="w-full py-6"
        >
          Login
        </ButtonLoading>
      </form>
    </Form>
  );
};
