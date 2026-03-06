import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Maptifier",
  description: "The story behind the first professional-grade projection mapping on Android. Built for creators.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
