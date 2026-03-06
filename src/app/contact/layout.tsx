import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Maptifier",
  description: "Get Maptifier, request access, or get in touch. Download and support for projection mapping on Android.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hidden form for Netlify Forms build-time detection (form-name must match client form) */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="text" name="bot-field" />
      </form>
      {children}
    </>
  );
}
