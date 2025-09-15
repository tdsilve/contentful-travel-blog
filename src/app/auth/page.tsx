"use client";
import { SignIn, SignUp } from "@/presentation";
import React from "react";

export default function Page() {
  const [variant, setVariant] = React.useState<"signIn" | "signOut">("signIn");
  if (variant === "signIn")
    return <SignIn toggleVariant={() => setVariant("signOut")} />;
  return <SignUp toggleVariant={() => setVariant("signIn")} />;
}
