"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "Ultra-portable",
    description:
      "Run full projection mapping from your Android device. No laptop, no dongles—just your phone or tablet and a USB-C projector. Perfect for guerrilla projections and pop-up events.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    accent: "blue" as const,
  },
  {
    title: "Low latency",
    description:
      "Sub-16ms latency on supported hardware. Zero-latency output that rivals desktop software—critical for live VJ sets and real-time interaction.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "purple" as const,
  },
  {
    title: "Advanced geometry",
    description:
      "Warp and blend across curved surfaces, buildings, and irregular shapes. Professional-grade mesh warping and edge blending in the palm of your hand.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    accent: "green" as const,
  },
  {
    title: "4K @ 60 FPS",
    description:
      "High-resolution video blending at 60 frames per second. Deliver crisp, smooth projections that meet professional standards.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "pink" as const,
  },
  {
    title: "USB-C DisplayPort",
    description:
      "Direct output via USB-C to DisplayPort. Connect to projectors and displays without dongles—one cable from device to projector.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "blue" as const,
  },
  {
    title: "Built for creators",
    description:
      "Designed for digital artists, DJs, event organizers, and projectionists. Unleash your creativity anywhere—festivals, galleries, streets, or stages.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    accent: "purple" as const,
  },
];

export default function FeaturesPage() {
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Features that set us apart</h1>
            <p className="mt-4 text-lg text-zinc-400">
              Professional projection mapping, reimagined for portability. Every feature built for the way you work.
            </p>
          </motion.header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
