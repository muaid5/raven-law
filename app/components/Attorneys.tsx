"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const attorneys = [
  {
    name: "Alexander Raven",
    role: "Managing Partner",
    image: "/images/attorney-1.png",
  },
  {
    name: "Daniel Morgan",
    role: "Senior Corporate Attorney",
    image: "/images/attorney-2.png",
  },
  {
    name: "James Carter",
    role: "Litigation Attorney",
    image: "/images/attorney-3.png",
  },
];

export default function Attorneys() {
  return (
    <section
      id="attorneys"
      className="bg-[#F7F5F0] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B9975B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B9975B]">
                Our Attorneys
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0B1220] sm:text-5xl lg:text-6xl">
              Experienced minds.
              <span className="block text-[#B9975B]">
                Dedicated advocates.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#667085]">
            Our attorneys combine legal experience with a practical,
            client-focused approach to deliver thoughtful strategies and
            meaningful results.
          </p>
        </motion.div>

        {/* Attorneys Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 h-72 overflow-hidden bg-white sm:h-80 lg:h-[420px]"
        >
          <Image
            src="/images/attorneys-team.png"
            alt="Raven & Co. Law attorneys"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Attorneys Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {attorneys.map((attorney, index) => (
            <motion.article
              key={attorney.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group"
            >
              {/* Attorney Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Hover Profile Button */}
                <div className="absolute inset-x-5 bottom-5 flex translate-y-3 items-center justify-between rounded-full border border-white/20 bg-white/90 px-4 py-3 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium text-[#0B1220]">
                    View Profile
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[#B9975B]"
                  />
                </div>
              </div>

              {/* Attorney Information */}
              <div className="border-b border-black/10 py-6">
                <h3 className="text-xl font-medium text-[#0B1220]">
                  {attorney.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#B9975B]">
                  {attorney.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}