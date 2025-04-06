import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from '@vercel/analytics/next';
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamlath Eco Holding",
  description: "Gamlath Solar Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative scroll-smooth">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE] scroll-smooth")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
