"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F5F0] px-6 py-24 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#B9975B]/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 lg:block">
              <span className="text-sm font-medium tracking-[0.25em] text-[#B9975B]">
                01
              </span>

              <span className="h-px w-10 bg-[#B9975B]/40 lg:mt-5 lg:block" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#667085]">
              About the Firm
            </p>

            <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-[#0B1220] sm:text-5xl lg:text-6xl">
              A modern legal practice
              <span className="block text-[#B9975B]">
                built around people.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
              At Raven & Co. Law, we believe exceptional legal counsel begins
              with understanding. We combine strategic thinking, deep legal
              knowledge, and a practical approach to help our clients move
              forward with clarity and confidence.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#667085]">
              Our approach is personal, precise, and focused on achieving
              meaningful outcomes for every client we serve.
            </p>

            <motion.a
              href="#practice"
              whileHover={{ x: 4 }}
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#0B1220] pb-2 text-sm font-medium text-[#0B1220] transition-colors duration-300 hover:border-[#B9975B] hover:text-[#B9975B]"
            >
              Explore Our Practice Areas

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            {/* Office Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mt-12 aspect-[16/9] overflow-hidden bg-white"
            >
              <Image
                src="/images/office.png"
                alt="Raven & Co. Law office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>
          </motion.div>

          {/* Side Statement */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="flex items-end lg:col-span-3"
          >
            <div className="border-l border-[#B9975B]/40 pl-6">
              <p className="text-xl font-medium leading-relaxed text-[#0B1220] sm:text-2xl">
                “Clarity in complexity. Confidence in every decision.”
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#667085]">
                Our Philosophy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}