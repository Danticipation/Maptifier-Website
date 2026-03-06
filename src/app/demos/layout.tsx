import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos — Maptifier",
  description: "Watch Maptifier in action. Projection mapping demos: warping, live VJ, multi-surface blend.",
};

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
