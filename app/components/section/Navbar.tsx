"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Stories", href: "#stories" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-cyan-100 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-16">
        <Link href="/" className="text-2xl font-bold text-cyan-700">
          <span className="text-white bg-[#000b3d] rounded-lg text-lg p-3">DR</span>
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
            href="https://wa.me/+234 813 448 9773 / +234 704 132 1070"
            target="_blank"
            className="bg-[#c40000] hover:bg-[#c10000] text-white px-5 py-2 rounded-lg shadow-md"          >
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
            <div className="flex flex-col items-center space-y-5 py-6">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#5a5f73] hover:text-[#222] font-medium transition text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-[#c40000] hover:bg-[#c10000] text-white w-10/12 rounded-lg py-2">
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
