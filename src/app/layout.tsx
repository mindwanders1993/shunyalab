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
  title: "ShunyaLabs — Software Consulting & Custom Systems Engineering",
  description: "We build custom SaaS software, automated workflows, and digital growth engines for founders and growing businesses. Delivered in 4–8 weeks with 100% code ownership.",
  keywords: ["ShunyaLabs", "Software Consulting", "SaaS Development", "Custom Software", "Next.js", "FastAPI", "Digital Growth", "Bangalore Software Agency"],
  authors: [{ name: "ShunyaLabs Team" }],
  openGraph: {
    title: "ShunyaLabs — Software Consulting for Growing Businesses",
    description: "Custom software platforms, intelligent automations, and high-conversion web systems delivered directly by experienced engineers.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased min-h-screen selection:bg-brand-100 selection:text-brand-900`}>
        {children}
      </body>
    </html>
  );
}
