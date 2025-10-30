"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex justify-between overflow-hidden bg-[#f8f9fc]">
      <div className="absolute inset-0 -z-10 bg-cyan-50/40"></div>

      <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:justify-between md:py-28 lg:px-16">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-bold leading-tight text-[#000b3d] sm:text-2xl lg:text-3xl">
            Empowering the Next Generation of Innovation with{" "}
            <span className="text-[#f5d17a]">AI & Technology</span>
          </h1>

          <p className="mt-6 text-lg text-[#5a5f73] max-w-lg mx-auto md:mx-0">
            Learn, build, and innovate-The Future Stats with You
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link href="#Programs" scroll={true} >
              <Button className="bg-[#c40000] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#c10000] transition">
                Request info
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex flex-col items-center text-center relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 rounded-full bg-[#9093cf] shadow-md" />
            <div className="w-6 h-6 rounded-full bg-[#c40000] shadow-md" />
            <div className="w-6 h-6 rounded-full bg-[#000b3d] shadow-md" />
            <span className="text-sm md:text-lg font-semibold text-[#5a5f73]">
              Reboot 2026 Tech BootCamp
            </span>
          </div>

          <motion.div
            className="relative flex flex-col items-center z-50 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/hero-image1.png"
              alt="Students learning technology"
              className="w-[280px] md:w-[400px] lg:w-[430px] h-auto transition duration-500"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000b3d"
          fillOpacity=""
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
