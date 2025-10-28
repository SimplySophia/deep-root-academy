"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, CheckCircle, DollarSign, ToolCase } from "lucide-react";

const programs = [
  {
    title: "Fullstack Web Development",
    duration: "12 Weeks",
    learn:
      "Learn how to build dynamic, responsive web applications using modern technologies like React, Node.js, and Tailwind CSS.",
    highlights: ["Real projects", "Team collaboration", "Mentor-led sessions"],
    tools: ["React", "Next.js", "Node.js", "MongoDB"],
    prerequisite: "Basic HTML & CSS knowledge",
    amount: "$350",
  },
  {
    title: "UI/UX Design Bootcamp",
    duration: "8 Weeks",
    learn:
      "Master user-centered design, wireframing, prototyping, and visual design with industry-standard tools and methods.",
    highlights: ["Live design critiques", "Portfolio-ready projects", "Mentor feedback"],
    tools: ["Figma", "Adobe XD", "Notion"],
    prerequisite: "Interest in digital design",
    amount: "$250",
  },
  {
    title: "Data Science & AI",
    duration: "10 Weeks",
    learn:
      "Dive into data analysis, visualization, and machine learning models while working on practical, high-impact datasets.",
    highlights: ["Python labs", "AI projects", "Industry mentorship"],
    tools: ["Python", "Pandas", "TensorFlow", "Tableau"],
    prerequisite: "Basic programming knowledge",
    amount: "$400",
  },
];

export default function ProgramsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-cyan-50 py-20 px-6 lg:px-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Our Programs
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Choose a learning path designed to elevate your skills and unlock opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {programs.map((program, index) => {
          const isExpanded = expanded === index;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-left transition-all"
            >
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                {program.title}
              </h3>

              <div className="flex items-center text-gray-600 mb-3">
                <Clock className="w-4 h-4 mr-2 text-cyan-600" /> {program.duration}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {isExpanded ? program.learn : program.learn.slice(0, 100) + "..."}
              </p>

              {isExpanded && (
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <BookOpen className="w-4 h-4 mr-2 text-cyan-600 mt-1" />
                    <span>
                      <strong>Program Highlights:</strong>{" "}
                      {program.highlights.join(", ")}.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <ToolCase className="w-4 h-4 mr-2 text-cyan-600 mt-1" />
                    <span>
                      <strong>Tools:</strong> {program.tools.join(", ")}.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-cyan-600 mt-1" />
                    <span>
                      <strong>Prerequisite:</strong> {program.prerequisite}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-4 h-4 mr-2 text-cyan-600 mt-1" />
                    <span>
                      <strong>Amount:</strong> {program.amount}
                    </span>
                  </div>
                </div>
              )}

              <div className="mt-4">
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-cyan-600 font-semibold text-sm hover:underline"
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              </div>

              <div className="mt-6">
                <Button className="bg-cyan-600 text-white w-full rounded-lg py-2 hover:bg-cyan-700">
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
