import type { Metadata, Viewport } from "next";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sadun Premakumara | Materials Science & Engineering",
  description:
    "Materials Science & Engineering Graduate (University of Moratuwa). Specializing in physical metallurgy, continuum FEA simulations, sustainable composites, and scientific Python computing.",
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
        <Analytics />
      </body>
    </html>
  );
}
