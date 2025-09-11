"use client";
import { useSignUpForm } from "@/hooks";
import {
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Button,
} from "@/components";

export const FormSignUp = () => {
  const { form, control, onSubmit, isSubmitting } = useSignUpForm();
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          name="username"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  variant="auth"
                  autoComplete="false"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  variant="auth"
                  autoComplete="false"
                />
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
                  autoComplete="false"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...field}
                  variant="auth"
                  autoComplete="false"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full py-6">
          Submit
        </Button>
      </form>
    </Form>
  );
};
