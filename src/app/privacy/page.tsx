import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Maptifier",
  description: "Maptifier privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl prose prose-invert prose-zinc">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mt-2">Last updated: {new Date().toLocaleDateString("en-US")}</p>
        <div className="mt-8 space-y-6 text-zinc-400">
          <p>
            Your privacy matters. This page is a placeholder. Replace with your actual privacy policy covering data
            collection, usage, storage, and user rights (e.g., GDPR, CCPA). Include contact information for privacy
            inquiries.
          </p>
        </div>
      </div>
    </div>
  );
}
