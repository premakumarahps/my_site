"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPhysicsHub = pathname?.startsWith("/physics");

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Sandun Preamakumara | Physics Consultant</title>
        <meta name="description" content="Teaching Physics through First Principles and Engineering Logic. Materials Science & Engineering Undergraduate at UoM." />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30`}>
        {!isPhysicsHub && <Navbar />}
        <main className={isPhysicsHub ? "" : "pt-16"}>
          {children}
        </main>
      </body>
    </html>
  );
}
