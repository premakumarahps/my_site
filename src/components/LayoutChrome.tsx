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
      <div className="pt-16 min-h-screen">{children}</div>
      <BackToTop />
    </>
  );
}
