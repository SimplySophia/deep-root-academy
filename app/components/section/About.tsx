"use client";

import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, LineChart, Globe } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-cyan-600" />,
    title: "Hands-On Learning",
    desc: "We focus on real-world projects that build confidence and creativity through practical experience.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-cyan-600" />,
    title: "Expert Mentorship",
    desc: "Learn directly from seasoned professionals and mentors who guide your journey every step of the way.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-cyan-600" />,
    title: "Proven Results",
    desc: "Our learners consistently achieve outstanding outcomes — from internships to global recognition.",
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-600" />,
    title: "Global Community",
    desc: "Join a vibrant global network of young innovators collaborating and sharing ideas across borders.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-xl md:text-4xl font-bold text-slate-900">
            Deep root Academy. Learn with Purpose. Build with Impact.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a5f73] max-w-3xl">
    At <span className="font-semibold text-[#000b3d]">Deep Root Academy</span>, 
    a proud subsidiary of <span className="font-semibold text-[#c40000]">Deep Root Education</span>, 
    we believe in nurturing talent from the ground up — equipping learners with the 
    <span className="font-semibold text-[#000b3d]"> skills, mindset, and curiosity</span> to thrive in a 
    tech-driven world. Our programs blend hands-on experience with forward-thinking innovation, 
    empowering students to not just learn about the future, but to <span className="font-semibold text-[#c40000]">create it</span>.
  </p>
        </motion.div>

        {/* Right Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-[#d6d7f9] rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-transform"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-60 h-40 p-2">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg text-[#222]">{item.title}</h3>
                <p className="mt-2 text-[#5a5f73] text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
