"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
  },
  {
    value: "500+",
    label: "Clients Served",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Responsive Counsel",
  },
];

export default function TrustStats() {
  return (
    <section className="bg-[#0B1220] px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="px-6 py-7 text-center first:pt-0 last:pb-0 sm:py-5 sm:first:pt-5 sm:last:pb-5 lg:px-8"
            >
              <p className="text-4xl font-medium tracking-tight text-white sm:text-[2.75rem] lg:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#B9975B] sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}