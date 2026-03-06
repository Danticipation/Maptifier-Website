"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  accent?: "blue" | "purple" | "green" | "pink";
}

const accentColors = {
  blue: "from-neon-blue/20 to-neon-blue/5 border-neon-blue/30",
  purple: "from-neon-purple/20 to-neon-purple/5 border-neon-purple/30",
  green: "from-neon-green/20 to-neon-green/5 border-neon-green/30",
  pink: "from-neon-pink/20 to-neon-pink/5 border-neon-pink/30",
};

const iconColors = {
  blue: "text-neon-blue",
  purple: "text-neon-purple",
  green: "text-neon-green",
  pink: "text-neon-pink",
};

export function FeatureCard({ title, description, icon, delay = 0, accent = "blue" }: FeatureCardProps) {
  return (
    <motion.article
      className={`rounded-xl border bg-gradient-to-br ${accentColors[accent]} p-6 transition-shadow hover:shadow-lg hover:shadow-neon-blue/10`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className={`mb-4 inline-flex rounded-lg bg-surface/80 p-3 ${iconColors[accent]}`}>{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-zinc-400">{description}</p>
    </motion.article>
  );
}
