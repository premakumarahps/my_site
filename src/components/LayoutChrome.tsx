"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function LayoutChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
}
