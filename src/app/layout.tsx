import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanuprakash Gowda | Portfolio",
  description: "Personal portfolio of Thanuprakash Gowda, an Information Science & Technology student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
