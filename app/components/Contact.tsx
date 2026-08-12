"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ravenlaw.com",
    href: "mailto:hello@ravenlaw.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0188",
    href: "tel:+12125550188",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "New York, United States",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F7F5F0] px-6 py-24 sm:py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B9975B]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B9975B]">
                Contact
              </p>
            </div>

            <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0B1220] sm:text-5xl lg:text-6xl">
              Let&apos;s start a
              <span className="block text-[#B9975B]">
                conversation.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#667085] sm:mt-7">
              Tell us a little about your legal needs. Our team will review
              your message and get back to you as soon as possible.
            </p>

            {/* Building Image */}
            <div className="relative mt-10 h-56 w-full overflow-hidden sm:h-64">
              <Image
                src="/images/building.png"
                alt="Raven & Co. Law office building"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            {/* Contact Details */}
            <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 sm:gap-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#0B1220] transition-all duration-300 group-hover:border-[#B9975B] group-hover:bg-[#0B1220] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#667085]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-medium text-[#0B1220] transition-colors duration-300 group-hover:text-[#B9975B]">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={(event) => event.preventDefault()}
              className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(11,18,32,0.06)] sm:p-8 lg:p-12"
            >
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full border-b border-black/10 bg-transparent px-0 py-3 text-sm text-[#0B1220] outline-none transition-colors placeholder:text-black/30 focus:border-[#B9975B]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-black/10 bg-transparent px-0 py-3 text-sm text-[#0B1220] outline-none transition-colors placeholder:text-black/30 focus:border-[#B9975B]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="mt-3 w-full border-b border-black/10 bg-transparent px-0 py-3 text-sm text-[#0B1220] outline-none transition-colors placeholder:text-black/30 focus:border-[#B9975B]"
                  />
                </div>

                {/* Practice Area */}
                <div>
                  <label
                    htmlFor="practice"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]"
                  >
                    Practice Area
                  </label>

                  <select
                    id="practice"
                    name="practice"
                    defaultValue=""
                    className="mt-3 w-full border-b border-black/10 bg-transparent px-0 py-3 text-sm text-[#0B1220] outline-none transition-colors focus:border-[#B9975B]"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option>Corporate & Business Law</option>
                    <option>Litigation & Dispute Resolution</option>
                    <option>Commercial Contracts</option>
                    <option>Real Estate Law</option>
                    <option>Legal Advisory</option>
                    <option>Compliance & Risk</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-[#667085]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us briefly about your legal needs..."
                    className="mt-3 w-full resize-none border-b border-black/10 bg-transparent px-0 py-3 text-sm text-[#0B1220] outline-none transition-colors placeholder:text-black/30 focus:border-[#B9975B]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B1220] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#B9975B] sm:mt-10 sm:px-7 sm:py-4"
              >
                Send Inquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}