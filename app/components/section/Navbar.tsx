"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-cyan-100 z-50">
      <div
        className="
          container mx-auto 
          flex items-center justify-between 
          h-16           
          px-6 lg:px-16
        "
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/images/DRE-Logo.png"
            alt="Students learning technology"
            className="w-[85px] md:w-[85px] lg:w-[95px] object-contain"
            width={100}
            height={100}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                className="text-[#5a5f73] hover:text-[#222] font-medium transition"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <Link
            href="https://wa.me/2348134489773?text=Hello%20I%27m%20interested%20in%20your%20program!"
            target="_blank"
            className="bg-[#c40000] hover:bg-[#a60000] text-white px-3 py-1 rounded-lg shadow-md transition"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="md:hidden text-[#000b3d] hover:text-[#222] transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-purple-100 shadow-lg"
          >
            <div className="flex flex-col items-center space-y-3 py-5">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#222] hover:text-[#5a5f73] font-medium transition text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/2348134489773?text=Hello%20I%27m%20interested%20in%20your%20program!"
                target="_blank"
                className="bg-[#c40000] hover:bg-[#a60000] text-white px-10 py-2 rounded-lg shadow-md transition"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
