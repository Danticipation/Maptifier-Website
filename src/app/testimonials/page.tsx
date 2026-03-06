"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Maptifier saved my gig—portable power like never before. I left my laptop at home and ran the whole set from my phone.",
    author: "Alex R.",
    role: "VJ & Digital Artist",
    rating: 5,
  },
  {
    quote: "Finally, professional-grade projection mapping that fits in my backpack. The latency is incredible for live work.",
    author: "Jordan M.",
    role: "Event Producer",
    rating: 5,
  },
  {
    quote: "We used Maptifier for a guerrilla projection on a downtown building. Setup in minutes, zero hassle. Game changer.",
    author: "Sam K.",
    role: "Projectionist",
    rating: 5,
  },
  {
    quote: "Outperforms my old desktop setup in portability and the warp tools are just as capable. Join the revolution.",
    author: "Casey L.",
    role: "Installation Artist",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-grid-pattern">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.header
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">What creators are saying</h1>
            <p className="mt-4 text-lg text-zinc-400">
              Digital artists, event pros, and projectionists on why they chose Maptifier.
            </p>
          </motion.header>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                className="rounded-xl border border-zinc-800 bg-surfaceElevated/50 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-neon-blue">★</span>
                  ))}
                </div>
                <p className="text-lg text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <cite className="not-italic font-semibold text-white">{t.author}</cite>
                  <span className="text-zinc-500 text-sm block">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
