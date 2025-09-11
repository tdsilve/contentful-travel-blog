import React from "react";
import { FormSignIn, FormAuthContainer, FormAuthButton } from "@/components";
import Link from "next/link";

type SignInProps = {
  toggleVariant: () => void;
};

export const SignIn = ({ toggleVariant }: SignInProps) => {
  return (
    <FormAuthContainer title="SignIn">
      <FormSignIn />
      <div className="text-center text-white">
        <Link href="/">Forgot your password?</Link>
      </div>
      <div>
        New to Travel Blog?{" "}
        <FormAuthButton onClick={toggleVariant} label="Create an account" />
      </div>
    </FormAuthContainer>
  );
};
