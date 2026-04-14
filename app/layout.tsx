import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { SkipToContent } from "@/components/skip-to-content";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const gardaEmpty = localFont({
  src: "../fonts/Gardaempty.ttf",
  variable: "--font-garda-empty",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#F0BB78",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${gardaEmpty.variable} relative min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          <SkipToContent />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
