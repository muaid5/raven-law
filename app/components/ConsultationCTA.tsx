"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-[#0B1220] px-6 py-24 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#B9975B]/20" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#B9975B]/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B9975B]">
            Let&apos;s Talk
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:mt-7 sm:text-5xl lg:text-7xl">
            Have a legal challenge?
            <span className="block text-[#B9975B]">
              Let&apos;s discuss it.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 sm:mt-8 sm:text-lg">
            Start with a conversation. Our team is ready to understand your
            situation and explore the right legal path forward.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#0B1220] transition-colors duration-300 hover:bg-[#B9975B] hover:text-white sm:mt-10 sm:px-7 sm:py-4"
          >
            Schedule a Consultation

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}