import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Maptifier",
  description: "Maptifier terms of use.",
};

export default function TermsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl prose prose-invert prose-zinc">
        <h1 className="text-4xl font-bold text-white">Terms of Use</h1>
        <p className="text-zinc-500 text-sm mt-2">Last updated: {new Date().toLocaleDateString("en-US")}</p>
        <div className="mt-8 space-y-6 text-zinc-400">
          <p>
            This page is a placeholder. Replace with your actual terms of use covering license, acceptable use,
            disclaimers, and limitations of liability. Consult legal counsel before launch.
          </p>
        </div>
      </div>
    </div>
  );
}
