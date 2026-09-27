"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

export default function LayoutChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main className="pt-16">{children}</main>
      <BackToTop />
    </>
  );
}
