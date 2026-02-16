import type { Metadata, Viewport } from "next";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";

export const metadata: Metadata = {
  title: "Sandun Preamakumara | Physics Consultant",
  description:
    "Teaching Physics through First Principles and Engineering Logic. Materials Science & Engineering Undergraduate at UoM.",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30">
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
