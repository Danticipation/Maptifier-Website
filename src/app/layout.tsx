import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = "https://maptifier.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maptifier — Professional Projection Mapping on Android",
    template: "%s | Maptifier",
  },
  description:
    "The first professional-grade projection mapping on Android. Ultra-portable, low-latency, 4K blending. Revolutionize gigs, events, and installations—anywhere.",
  keywords: [
    "projection mapping",
    "Android",
    "portable projection",
    "VJ",
    "digital art",
    "event projection",
    "USB-C DisplayPort",
    "video mapping",
  ],
  authors: [{ name: "Maptifier", url: siteUrl }],
  creator: "Maptifier",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Maptifier",
    title: "Maptifier — Projection Mapping in Your Pocket",
    description:
      "Professional projection mapping on Android. Ultra-portable, low-latency, 4K @ 60 FPS. Built for artists, VJs, and event pros.",
    locale: "en_US",
    images: [
      {
        url: "/Assets/Maptifier-1.png",
        width: 1200,
        height: 630,
        alt: "Maptifier projection mapping in action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maptifier — Projection Mapping in Your Pocket",
    description: "Professional projection mapping on Android. Portable power for creators.",
    images: ["/Assets/Maptifier-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
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
