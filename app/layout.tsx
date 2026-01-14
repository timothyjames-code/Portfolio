import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Timothy James — Pharmacist (PharmD) & Software Engineer",
  description:
    "Healthcare-first software engineer and pharmacist (PharmD) building modern web applications with React, Next.js, TypeScript, and Angular.",
  openGraph: {
    title: "Timothy James — Pharmacist (PharmD) & Software Engineer",
    description:
      "Healthcare-first software engineer and pharmacist (PharmD) building modern web applications with React, Next.js, TypeScript, and Angular.",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy James — Pharmacist (PharmD) & Software Engineer",
    description:
      "Healthcare-first software engineer and pharmacist (PharmD) building modern web applications with React, Next.js, TypeScript, and Angular.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Navigation />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
