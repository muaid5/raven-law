"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Attorneys", href: "#attorneys" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md sm:px-6">
        {/* Logo */}
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-sm font-semibold tracking-[0.2em] text-[#0B1220]"
        >
          RAVEN <span className="text-[#B9975B]">&</span> CO.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#667085] transition-colors duration-300 hover:text-[#0B1220]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-[#0B1220] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#B9975B] md:flex"
        >
          Book a Consultation

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#0B1220] transition-colors duration-300 hover:border-[#B9975B] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={18} /> : <span className="text-lg">☰</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-4 mt-3 rounded-3xl border border-black/10 bg-white/95 p-5 shadow-lg backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                  }}
                  className="border-b border-black/5 py-4 text-sm font-medium text-[#0B1220] transition-colors duration-300 hover:text-[#B9975B]"
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group mt-5 flex items-center justify-center gap-2 rounded-full bg-[#0B1220] px-5 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#B9975B]"
              >
                Book a Consultation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}