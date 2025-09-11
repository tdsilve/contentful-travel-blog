import React from "react";
import { FormSignUp, FormAuthContainer, FormAuthButton } from "@/components";

type SignInProps = {
  toggleVariant: () => void;
};

export const SignUp = ({ toggleVariant }: SignInProps) => {
  return (
    <FormAuthContainer title="Register">
      <FormSignUp />
      <div>
        Already have an account?{" "}
        <FormAuthButton onClick={toggleVariant} label="Sign in now." />
      </div>
    </FormAuthContainer>
  );
};
