"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const matters = [
  {
    number: "01",
    category: "Corporate",
    title: "Strategic Business Advisory",
    description:
      "Advising a growing enterprise through a complex corporate restructuring and long-term strategic transition.",
  },
  {
    number: "02",
    category: "Commercial",
    title: "High-Value Contract Negotiation",
    description:
      "Supporting a commercial client through the negotiation and development of a complex multi-party agreement.",
  },
  {
    number: "03",
    category: "Dispute Resolution",
    title: "Complex Commercial Dispute",
    description:
      "Developing a strategic legal position for a sophisticated commercial dispute involving multiple stakeholders.",
  },
];

export default function SelectedMatters() {
  return (
    <section
      id="insights"
      className="bg-white px-6 py-24 sm:py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B9975B]" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B9975B]">
              Selected Matters
            </p>
          </div>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0B1220] sm:text-5xl lg:text-6xl">
            Strategic thinking.
            <span className="block text-[#B9975B]">
              Meaningful outcomes.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085] sm:mt-7 sm:text-lg">
            A selection of representative matters demonstrating the breadth
            of our legal capabilities and strategic approach.
          </p>
        </motion.div>

        {/* Matters */}
        <div className="mt-14 border-t border-black/10 sm:mt-16">
          {matters.map((matter, index) => (
            <motion.article
              key={matter.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-5 border-b border-black/10 py-8 sm:gap-6 sm:py-10 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-1">
                <span className="text-xs font-medium tracking-[0.2em] text-[#B9975B]">
                  {matter.number}
                </span>
              </div>

              <div className="lg:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
                  {matter.category}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xl font-medium leading-snug text-[#0B1220] transition-colors duration-300 group-hover:text-[#B9975B] sm:text-2xl">
                  {matter.title}
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-sm leading-7 text-[#667085]">
                  {matter.description}
                </p>
              </div>

              <div className="lg:col-span-1 lg:text-right">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#B9975B] group-hover:bg-[#0B1220] group-hover:text-white">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}