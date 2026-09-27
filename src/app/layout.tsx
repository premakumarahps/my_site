import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30">
        <LayoutChrome>{children}</LayoutChrome>
        <Analytics />
      </body>
    </html>
  );
}
