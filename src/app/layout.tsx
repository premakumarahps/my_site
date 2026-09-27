import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandunpremakumara.com"),
  title: "Sandun Premakumara | Materials Science & Engineering — Sri Lanka",
  description:
    "Materials Science & Engineering Graduate from University of Moratuwa, Sri Lanka. Specializing in physical metallurgy, Abaqus FEA, sustainable composites, and scientific Python.",
  openGraph: {
    title: "Sandun Premakumara | Materials & Metallurgical Engineer",
    description: "Materials Science & Engineering Graduate from University of Moratuwa, Sri Lanka.",
    url: "https://sandunpremakumara.com",
    siteName: "Sandun Premakumara",
    images: [{ url: "/og-card.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: { 
    card: "summary_large_image", 
    title: "Sandun Premakumara | Materials & Metallurgical Engineer", 
    description: "Materials Science & Engineering Graduate from University of Moratuwa, Sri Lanka." 
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sandunpremakumara.com" },
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Skip to content
          </a>
          <LayoutChrome>{children}</LayoutChrome>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
