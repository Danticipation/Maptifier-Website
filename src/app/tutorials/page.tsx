"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tutorials = [
  {
    title: "Quick start: Connect and project",
    steps: [
      "Connect your Android device to the projector via USB-C to DisplayPort cable.",
      "Open Maptifier and allow display permissions if prompted.",
      "Load your content (image or video) and use the warp tools to align to your surface.",
      "Adjust edge blending if using multiple projectors.",
    ],
  },
  {
    title: "Warping on curved surfaces",
    steps: [
      "Capture or import a reference image of your projection surface.",
      "Add mesh control points along curves and edges.",
      "Drag points to warp the output until it aligns with the physical space.",
      "Save your warp preset for reuse at the same venue.",
    ],
  },
  {
    title: "Advanced: Unity integration",
    steps: [
      "Export your Unity scene for Android (IL2CPP, ARM64).",
      "Use the Maptifier SDK to send rendered frames to the output display.",
      "Configure latency and resolution in the Maptifier settings.",
      "Test on device with USB-C DisplayPort before your event.",
    ],
  },
];

function AccordionItem({ title, steps, isOpen, onToggle }: { title: string; steps: string[]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-surfaceElevated/50">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-white hover:bg-zinc-800/50 transition-colors"
        aria-expanded={isOpen}
      >
        {title}
        <span className="text-neon-blue">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6"
        >
          <ol className="list-decimal list-inside space-y-3 text-zinc-400">
            {steps.map((step, i) => (
              <li key={i} className="pl-2">{step}</li>
            ))}
          </ol>
        </motion.div>
      )}
    </div>
  );
}

export default function TutorialsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Tutorials & instructions</h1>
            <p className="mt-4 text-lg text-zinc-400">
              Step-by-step guides to get you from zero to projection mapping in minutes.
            </p>
          </motion.header>
          <div className="space-y-4">
            {tutorials.map((tutorial, i) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem
                  title={tutorial.title}
                  steps={tutorial.steps}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-12 text-center text-zinc-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Need help? <a href="/contact" className="text-neon-blue hover:underline">Contact us</a> or check the FAQ on the About page.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
