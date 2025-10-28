"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-400 border-t border-cyan-100 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 lg:px-16">
        {/* WhatsApp Contact */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-2 text-white"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          <Link
            href="https://wa.me/2348012345678"
            target="_blank"
            className="hover:text-cyan-200 transition font-medium"
          >
            Chat with us on WhatsApp
          </Link>
        </motion.div>

        {/* Copyright */}
        <p className="text-gray-700 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Deep Root Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
