"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-grid-pattern">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">About Maptifier</h1>
            <p className="mt-4 text-lg text-zinc-400">
              The story behind the first professional-grade projection mapping on Android.
            </p>
          </motion.header>
          <motion.div
            className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              Maptifier was born from a simple frustration: projection mapping has always required a laptop, cables, and
              bulky setups. We wanted to put that power in your pocket—without sacrificing quality or latency.
            </p>
            <p>
              Built for digital artists, DJs, event organizers, and guerrilla projectionists, Maptifier delivers
              professional warp and blend tools, 4K @ 60 FPS output, and sub-16ms latency on supported Android devices
              with USB-C DisplayPort. One cable. One device. Unlimited creativity.
            </p>
            <p>
              We&apos;re committed to open standards and the creator community. Whether you&apos;re mapping a building
              facade, a stage, or an art installation, Maptifier is designed to get out of your way and let you create.
            </p>
          </motion.div>
          <motion.section
            className="mt-16 rounded-xl border border-zinc-800 bg-surfaceElevated/50 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">FAQ</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-medium text-zinc-300">What if my device doesn&apos;t have USB-C DisplayPort?</dt>
                <dd className="mt-2 text-zinc-500 text-sm">
                  Maptifier requires USB-C DisplayPort output for direct connection to projectors. Check your device
                  specs; many recent flagship Android phones and tablets support it. We maintain a compatibility list—see{" "}
                  <Link href="/contact" className="text-neon-blue hover:underline">Contact</Link> for details.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-300">Is there an iOS version?</dt>
                <dd className="mt-2 text-zinc-500 text-sm">
                  Currently Maptifier is Android-first. An iOS version is under consideration as we grow.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-300">Can I use this for commercial events?</dt>
                <dd className="mt-2 text-zinc-500 text-sm">
                  Yes. Maptifier is built for professional use—festivals, corporate events, galleries, and live shows.
                  See our Terms of Use for licensing details.
                </dd>
              </div>
            </dl>
          </motion.section>
          <motion.p
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="text-neon-blue font-medium hover:underline">
              Get in touch or request access →
            </Link>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
