import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShunyaLabs (शून्य Labs) — Scalable SaaS, AI & Autonomous Systems",
  description: "A modern Teal technology consulting studio & venture lab. We build high-converting web presences, intelligent automated workflows, and scalable B2B SaaS platforms.",
  keywords: ["ShunyaLabs", "Teal Organization", "SaaS Studio", "FastAPI", "Next.js", "AI Automation", "ATS", "MSME Growth"],
  authors: [{ name: "ShunyaLabs Engineering Team" }],
  openGraph: {
    title: "ShunyaLabs — From Zero to Infinite Architecture",
    description: "Engineering scalable SaaS, AI, and autonomous data systems with zero middle-management overhead.",
    url: "https://shunyalabs.com",
    siteName: "ShunyaLabs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased min-h-screen selection:bg-brand-500/20 selection:text-brand-300`}>
        {children}
      </body>
    </html>
  );
}
