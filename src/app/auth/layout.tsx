import { Header } from "@/presentation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=' min-h-screen w-full bg-[url("/image/backgrounds/capadocia.png")] bg-cover bg-bottom bg-no-repeat'>
      <div className="w-full min-h-screen bg-black/35">
        <Header />
        {children}
      </div>
    </div>
  );
}
