"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-40 top-40 h-80 w-80 rounded-full border border-[#B9975B]/10" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full border border-[#0B1220]/5" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-2 lg:px-8">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B9975B]"
          >
            <span className="h-px w-10 bg-[#B9975B]" />
            RAVEN & CO. LAW
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-[#0B1220] sm:text-6xl lg:text-7xl"
          >
            Counsel Built on
            <span className="block italic text-[#B9975B]">
              Trust & Excellence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-xl text-base leading-8 text-[#667085] sm:text-lg"
          >
            Strategic legal counsel for individuals, businesses, and
            organizations navigating complex challenges with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 rounded-full bg-[#0B1220] px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#B9975B]"
            >
              Book a Consultation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-[#0B1220]/15 px-6 py-4 text-sm font-medium text-[#0B1220] transition-all duration-300 hover:border-[#B9975B] hover:text-[#B9975B]"
            >
              Discover Our Firm
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex gap-8 border-t border-black/10 pt-6"
          >
            <div>
              <p className="text-2xl font-semibold text-[#0B1220]">15+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#667085]">
                Years of Experience
              </p>
            </div>

            <div className="h-10 w-px bg-black/10" />

            <div>
              <p className="text-2xl font-semibold text-[#0B1220]">98%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#667085]">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[460px] overflow-hidden rounded-[2rem] sm:h-[560px] lg:h-[680px]"
        >
          <motion.div
            animate={{ scale: [1, 1.025, 1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero.png"
              alt="Raven & Co. Law office"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/30 via-transparent to-transparent" />

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md"
          >
            <span className="text-xs font-medium tracking-wide text-[#0B1220]">
              Trusted Legal Counsel
            </span>
          </motion.div>

          {/* Gold Accent */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "30%" }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="absolute right-0 top-0 w-1 bg-[#B9975B]"
          />
        </motion.div>
      </div>
    </section>
  );
}