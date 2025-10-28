"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex justify-between overflow-hidden bg-white">
      {/* Background tint */}
      <div className="absolute inset-0 -z-10 bg-cyan-50/40"></div>

      <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:justify-between md:py-28 lg:px-16">
        {/* Left content */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Empowering the Next Generation of{" "}
            <span className="text-cyan-600">Tech Leaders</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Learn, build, and innovate with real-world programs designed to
            nurture young minds with cutting-edge tech skills, entrepreneurial
            thinking, and world-class mentorship.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition">
              Explore Programs
            </Button>
            <Button
              variant="outline"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-lg font-semibold"
            >
              Join the Academy
            </Button>
          </div>
        </motion.div>

        {/* Right illustration */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hero/hero-illustration.png"
            alt="Students learning technology"
            width={500}
            height={500}
            className="drop-shadow-md"
            priority
          />

          {/* Second image aligned properly */}
          <motion.div
            className="absolute top-0 right-0 translate-y-8 md:translate-y-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/hero-image.png"
              alt="App Usage Demo"
              className="w-[120px] md:w-[560px] lg:w-[500px] h-auto rounded-2xl transition duration-500"
              width={300}
              height={300}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle flat cyan wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#06B6D4"
          fillOpacity="0.15"
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
