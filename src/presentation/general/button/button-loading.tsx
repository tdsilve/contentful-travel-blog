import { Button } from "@/presentation";
import { Loader2Icon } from "lucide-react";
import React from "react";

type ButtonLoadingProps = {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonLoading = ({
  isLoading,
  children,
  className,
  ref,
  ...rest
}: ButtonLoadingProps) => {
  return (
    <Button ref={ref} className={className} {...rest}>
      {isLoading && <Loader2Icon className="animate-spin" />} {children}
    </Button>
  );
};
