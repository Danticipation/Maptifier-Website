import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials — Maptifier",
  description: "Step-by-step guides: connect and project, warping, Unity integration. Get started with Maptifier.",
};

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
