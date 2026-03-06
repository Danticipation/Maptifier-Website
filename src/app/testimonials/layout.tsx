import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — Maptifier",
  description: "What digital artists, VJs, and event pros say about Maptifier. Portable projection mapping that delivers.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
