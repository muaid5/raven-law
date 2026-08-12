"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Building2,
  Scale,
  BriefcaseBusiness,
  Landmark,
  FileText,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const practices = [
  {
    number: "01",
    title: "Corporate & Business Law",
    description:
      "Strategic legal guidance for companies, entrepreneurs, and organizations navigating complex business matters.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Litigation & Dispute Resolution",
    description:
      "Focused representation and strategic counsel for commercial disputes and complex legal proceedings.",
    icon: Scale,
  },
  {
    number: "03",
    title: "Commercial Contracts",
    description:
      "Careful drafting, review, and negotiation of agreements designed to protect your interests.",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Real Estate Law",
    description:
      "Legal support for property transactions, development, leasing, and real estate disputes.",
    icon: Landmark,
  },
  {
    number: "05",
    title: "Legal Advisory",
    description:
      "Practical legal advice that helps individuals and businesses make informed decisions with confidence.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Compliance & Risk",
    description:
      "Proactive legal strategies to identify, manage, and reduce regulatory and business risks.",
    icon: ShieldCheck,
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice"
      className="bg-white px-6 py-24 sm:py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B9975B]" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B9975B]">
              Our Expertise
            </p>
          </div>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0B1220] sm:text-5xl lg:text-6xl">
            Legal expertise for
            <span className="block text-[#B9975B]">
              complex challenges.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085] sm:mt-7 sm:text-lg">
            We provide focused legal counsel across a range of practice areas,
            combining experience, strategic thinking, and a deep understanding
            of our clients&apos; objectives.
          </p>
        </motion.div>

        {/* Legal Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-12 h-72 overflow-hidden sm:mt-14 sm:h-80 lg:h-96"
        >
          <Image
            src="/images/legal-scales.png"
            alt="Legal books and scales"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid border-t border-black/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice, index) => {
            const Icon = practice.icon;

            return (
              <motion.article
                key={practice.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className={[
                  "group border-b border-black/10 p-7",
                  "transition-colors duration-300 hover:bg-[#F7F5F0]",
                  "sm:p-8 lg:p-10",
                  index % 2 === 0 ? "sm:border-r" : "",
                  index % 3 !== 2 ? "lg:border-r" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#B9975B]">
                    {practice.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B1220]/10 text-[#0B1220] transition-all duration-300 group-hover:border-[#B9975B] group-hover:bg-[#0B1220] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-medium leading-snug text-[#0B1220] sm:mt-12">
                  {practice.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  {practice.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#0B1220] transition-colors duration-300 group-hover:text-[#B9975B]">
                  Learn More

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}