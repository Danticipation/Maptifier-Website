import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Maptifier",
  description:
    "Ultra-portable projection mapping, low latency, advanced geometry, 4K @ 60 FPS. See what makes Maptifier professional-grade.",
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
