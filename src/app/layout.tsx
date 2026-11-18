import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thanuprakash Gowda | AI/ML & Full-Stack Systems Engineer",
  description: "Portfolio of Thanuprakash Gowda – Engineering intelligent on-device ML models, native Android systems, and scalable full-stack web platforms. B.E. Information Science & Engineering.",
  keywords: [
    "Thanuprakash Gowda",
    "AI/ML Engineer",
    "Machine Learning",
    "On-Device ML",
    "Android Developer",
    "Jetpack Compose",
    "Full-Stack Developer",
    "Next.js",
    "Python",
    "Kotlin",
    "Outlier AI",
    "Canara Engineering College"
  ],
  authors: [{ name: "Thanuprakash Gowda" }],
  creator: "Thanuprakash Gowda",
  openGraph: {
    title: "Thanuprakash Gowda | AI/ML & Full-Stack Systems Engineer",
    description: "Engineering intelligent on-device ML models, native Android systems, and scalable full-stack web platforms.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-900`}>
        {children}
      </body>
    </html>
  );
}
