"use client";
import { useSignInForm } from "@/hooks";
import {
  Input,
  FormSignInContainer,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Button,
} from "@/components";

export const FormSignIn = () => {
  const { form, control, onSubmit, isSubmitting } = useSignInForm();
  return (
    <FormSignInContainer>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} variant="signIn" />
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
                    variant="signIn"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6"
            // className="bg-[#F0F2F5]"
          >
            Submit
          </Button>
        </form>
      </Form>
    </FormSignInContainer>
  );
};
