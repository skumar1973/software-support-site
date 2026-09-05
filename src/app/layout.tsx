import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Software Engineering & Application Support",
    template: "%s | Software Engineering & Support",
  },

  description:
    "Software engineering, application maintenance, production support, API integration and software modernization services.",

  keywords: [
    "software engineering",
    "software maintenance",
    "application support",
    "production support",
    "software modernization",
    "API integration",
    "software consultant",
    "software training",
    "software internship",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Software Engineering & Application Support",
    description:
      "Practical software engineering, application maintenance and production support services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
