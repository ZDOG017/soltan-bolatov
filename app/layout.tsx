import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from '@/components/CustomCursor';
import InteractiveBackground from '@/components/InteractiveBackground';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import ScrollProgress from '@/components/ScrollProgress';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soltan Bolatov | Frontend Developer",
  description: "Professional portfolio of Soltan Bolatov, showcasing frontend development expertise and projects",
  keywords: ["frontend developer", "web development", "React", "Next.js", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InteractiveBackground />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <PerformanceMetrics />
      </body>
    </html>
  );
}
