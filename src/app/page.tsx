"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "4K", label: "Video blending at 60 FPS" },
  { value: "<16ms", label: "Latency on supported devices" },
  { value: "Pocket", label: "Fits in your pocket" },
  { value: "Android", label: "First pro-grade on mobile" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <div className="bg-grid-pattern">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Assets/Maptifier-1.png"
            alt="Maptifier projection mapping in action"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.p
            className="mb-4 text-neon-blue font-medium tracking-wider uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The future of projection mapping is here
          </motion.p>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">Projection mapping</span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              in your pocket
            </span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The first professional-grade projection mapping on Android. Ultra-portable, low-latency, advanced geometry.
            Revolutionize gigs, events, and installations—anywhere.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/demos"
              className="rounded-lg bg-neon-blue px-6 py-3 font-semibold text-surface hover:bg-neon-blue/90 transition-all shadow-lg shadow-neon-blue/25 animate-glow-pulse"
            >
              See demos
            </Link>
            <Link
              href="/features"
              className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold text-zinc-200 hover:border-neon-purple hover:text-neon-purple transition-colors"
            >
              Explore features
            </Link>
            <Link
              href="/contact"
              className="rounded-lg text-neon-blue hover:text-neon-blue/80 font-semibold transition-colors"
            >
              Get started →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800/80 bg-surfaceElevated/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              initial: {},
              animate: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <div className="text-3xl font-bold text-neon-blue sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value prop */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Outperforms desktop software in portability and speed
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Zero-latency output on supported hardware. Warp, blend, and map on the go—join the revolution.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 rounded-lg bg-neon-purple/20 px-5 py-2.5 text-neon-purple font-medium hover:bg-neon-purple/30 transition-colors border border-neon-purple/40"
            >
              Step-by-step tutorials
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
