import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "WFN — Worldwide Football News",
    template: "%s | WFN"
  },
  description: "The fastest live scores, latest news, and in-depth stats for football fans worldwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wfn.vercel.app",
    siteName: "WFN",
    images: [
      {
        url: "https://wfn.vercel.app/og-image.jpg", // Needs to be created or hosted
        width: 1200,
        height: 630,
        alt: "WFN — Worldwide Football News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wfn",
    creator: "@wfn",
  },
};

import { ThemeProvider } from "@/components/theme-provider"
import { MainLayout } from "@/components/layout/main-layout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
