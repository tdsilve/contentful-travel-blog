import { Flex } from "@/components/ui/flex";
import React from "react";

export const FormSignInContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Flex justify="center">
      <div className="self-center lg:max-w-md w-full bg-black/70 p-4 rounded-md mt-2">
        <h2 className="text-white font-semibold text-4xl mb-8">Sign in</h2>
        {children}
      </div>
    </Flex>
  );
};
