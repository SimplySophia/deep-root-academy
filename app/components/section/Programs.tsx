"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Laptop, Trophy, Phone, Globe } from "lucide-react";

export default function Programs() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Section background tint */}
      <div className="absolute inset-0 -z-10 bg-purple-50/40"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Deep Root Academy <span className="text-purple-600">Event</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our specialized tech courses and key highlights for the upcoming program.
          </p>
        </motion.div>

        {/* Split layout */}
<div className="grid md:grid-cols-2 gap-8 mb-5">
  {/* Left - Courses */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-8 border border-purple-100"
  >
    <h3 className="text-2xl font-semibold text-purple-700 mb-4">
      EVENT COURSES
    </h3>
    <ul className="space-y-3 text-gray-700 leading-relaxed list-none">
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        <span>
          <strong>AI-Powered Learning Sessions:</strong> Break into Generative AI
        </span>
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Software Development (Frontend and Backend)
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Creative Design (Graphics)
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Product Design
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Cloud Computing
      </li>
    </ul>
  </motion.div>

  {/* Right - Highlights */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-8 border border-purple-100"
  >
    <h3 className="text-2xl font-semibold text-purple-700 mb-4">
      EVENT HIGHLIGHTS
    </h3>
    <ul className="space-y-3 text-gray-700 leading-relaxed list-none">
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        <span>
          <strong>AI-Powered Learning Sessions:</strong> Break into Generative AI
        </span>
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Business and Entrepreneurship Design
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Virtual mentorship sessions with Expert Speakers
      </li>
      <li className="flex items-start">
        <span className="w-3 h-3 mt-2 mr-3 bg-purple-600 rounded-full shrink-0"></span>
        Real-Life Projects + Certificates + Mentorship
      </li>
    </ul>
  </motion.div>
</div>


        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-purple-50 rounded-2xl p-10 shadow-inner text-gray-800"
        >
          <h3 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
            EVENT DETAILS
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <CalendarDays className="text-cyan-600" />
                <span>
                  <strong>Date:</strong> January – April 2025
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="text-cyan-600" />
                <span>
                  <strong>Time:</strong> Friday & Sunday: 5:00pm – 6:30pm <br />
                  Saturday: 4:00pm – 6:30pm
                </span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-cyan-600" />
                <span>
                  <strong>Venue:</strong> Virtual (Google Meet / DeepRoots Academy Portal)
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Laptop className="text-cyan-600" />
                <span>
                  <strong>Requirements:</strong> Laptop, Headphones & Stable Internet
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Trophy className="text-cyan-600" />
                <span>
                  <strong>Certificate:</strong> Certificate of Completion for all participants
                </span>
              </p>
              <p className="flex items-center gap-3">
                💰 <span>Participation Fee: Partnership with Afrihomes Property Limited</span>
              </p>
            </div>
          </div>

          {/* Registration Info */}
          <div className="border-t border-purple-200 pt-6 mt-4 text-center">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              REGISTRATION INFO
            </h4>
            <p className="flex justify-center items-center gap-2 text-gray-700 mb-1">
              <Phone className="text-green-600 w-5 h-5" />
              <span>
                Inquiries: +234 813 448 9773 / +234 704 132 1070 |{" "}
                <a
                  href="mailto:williamswilliamsfavour@gmail.com"
                  className="text-green-600 underline"
                >
                  williamswilliamsfavour@gmail.com
                </a>
              </span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <Globe className="text-green-600 w-5 h-5" />
              <a
                href="https://www.deeprootedu.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                www.deeprootedu.tech
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              Learn Future Skills. Build Real Projects. Get Certified.
            </h4>
            <p className="text-gray-600 mb-6">
              Don’t miss the biggest Tech Learning Event this January!
            </p>
            <Button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
              Register Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
