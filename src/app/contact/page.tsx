"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FORM_NAME = "contact";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", FORM_NAME);
    const body = new URLSearchParams(
      Array.from(formData.entries()).reduce(
        (acc, [k, v]) => ({ ...acc, [k]: String(v) }),
        {} as Record<string, string>
      )
    ).toString();

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email Daniel@NewSharpe.com.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="bg-grid-pattern">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <motion.header
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Get started</h1>
            <p className="mt-4 text-zinc-400">
              Request app access, download info, or send us a message. We&apos;ll get back to you soon.
            </p>
          </motion.header>
          {submitted ? (
            <motion.div
              className="rounded-xl border border-neon-green/30 bg-neon-green/10 p-8 text-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-neon-green font-medium">Thanks for reaching out!</p>
              <p className="mt-2 text-zinc-400 text-sm">We&apos;ll be in touch shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              name={FORM_NAME}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl border border-zinc-800 bg-surfaceElevated/50 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              {/* Honeypot for spam (keep hidden from users) */}
              <p className="hidden" aria-hidden>
                <label htmlFor="bot-field">Don’t fill this out</label>
                <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
              </p>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={sending}
                  className="w-full rounded-lg border border-zinc-700 bg-surface px-4 py-3 text-white placeholder-zinc-500 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue disabled:opacity-60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={sending}
                  className="w-full rounded-lg border border-zinc-700 bg-surface px-4 py-3 text-white placeholder-zinc-500 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue disabled:opacity-60"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={sending}
                  className="w-full rounded-lg border border-zinc-700 bg-surface px-4 py-3 text-white placeholder-zinc-500 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue resize-none disabled:opacity-60"
                  placeholder="Tell us what you're looking for..."
                />
              </div>
              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-neon-blue px-4 py-3 font-semibold text-surface hover:bg-neon-blue/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </motion.form>
          )}
          <motion.p
            className="mt-8 text-center text-zinc-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            For open-source and technical details, check out our{" "}
            <a href="https://github.com" className="text-neon-blue hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
