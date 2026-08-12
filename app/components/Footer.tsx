"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Attorneys", href: "#attorneys" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <a
              href="#"
              className="inline-block text-xl font-semibold tracking-[0.08em]"
            >
              RAVEN <span className="text-[#B9975B]">&</span> CO.
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50 sm:mt-6">
              Strategic legal counsel built around trust, clarity, and
              meaningful results.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-[#B9975B]"
            >
              Start a Conversation

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B9975B]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B9975B]">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60 sm:mt-6 sm:space-y-4">
              <p>hello@ravenlaw.com</p>
              <p>+1 (212) 555-0188</p>
              <p>New York, United States</p>
            </div>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-xs font-medium text-white/60 transition-all duration-300 hover:border-[#B9975B] hover:bg-[#B9975B] hover:text-white sm:mt-7"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-7">
          <p>
            © {new Date().getFullYear()} Raven & Co. Law. All rights reserved.
          </p>

          <div className="flex gap-5 sm:gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}