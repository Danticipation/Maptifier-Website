import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Maptifier — Professional Projection Mapping on Android",
  description:
    "The first professional-grade projection mapping on Android. Ultra-portable, low-latency, 4K blending. Revolutionize gigs, events, and installations.",
  keywords: ["projection mapping", "Android", "portable", "VJ", "digital art", "events"],
  openGraph: {
    title: "Maptifier — Projection Mapping in Your Pocket",
    description: "Professional projection mapping on Android. Portable power for artists and event pros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
