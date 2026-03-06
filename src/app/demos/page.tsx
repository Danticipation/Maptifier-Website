"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const demos = [
  {
    title: "Warping on curved surfaces",
    description: "Transform a building facade or curved screen in seconds. Real-time mesh warping with sub-frame accuracy.",
    placeholder: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Live VJ set",
    description: "Low-latency output for live performances. Sync visuals to music without lag—portable power for gigs.",
    placeholder: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Multi-surface blend",
    description: "Edge blending across multiple projectors. Seamless canvas from a single Android device.",
    placeholder: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
  },
];

export default function DemosPage() {
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Demos</h1>
            <p className="mt-4 text-lg text-zinc-400">
              See Maptifier in action. Real-world projection mapping—portable, fast, and professional.
            </p>
          </motion.header>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, i) => (
              <motion.article
                key={demo.title}
                className="group rounded-xl border border-zinc-800 bg-surfaceElevated overflow-hidden hover:border-neon-blue/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="aspect-video bg-zinc-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={`https://www.youtube.com/watch?v=${demo.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-neon-blue/90 text-surface hover:bg-neon-blue transition-colors"
                      aria-label={`Play: ${demo.title}`}
                    >
                      <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">{demo.title}</h2>
                  <p className="mt-2 text-zinc-400">{demo.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p
            className="mt-12 text-center text-zinc-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Have your own Maptifier demo? <Link href="/contact" className="text-neon-blue hover:underline">Get in touch</Link> to be featured.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
