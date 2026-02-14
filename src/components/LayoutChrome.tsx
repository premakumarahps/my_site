"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LayoutChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPhysicsHub = pathname?.startsWith("/physics");

  return (
    <>
      {!isPhysicsHub && <Navbar />}
      <main className={isPhysicsHub ? "" : "pt-16"}>{children}</main>
    </>
  );
}
