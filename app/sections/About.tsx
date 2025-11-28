"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 hover:bg-white/10 transition">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-left leading-relaxed text-gray-300 dark:text-gray-300">
            <p className="text-lg mb-6">
              I hold an{" "}
              <span className="font-semibold text-primary">
                Engineering Degree in Software Engineering
              </span>{" "}
              (with Highest Distinction) from the Higher Institute of Computer
              Science and Mathematics of Monastir. I am a passionate full-stack
              developer who loves building modern, performant and user-centric
              digital experiences.
            </p>

            <p className="text-lg mb-6">
              Through my academic and professional journey, I’ve gained
              hands-on experience on real-world projects such as HR portals,
              dynamic form builders, drag-and-drop interfaces, and desktop
              applications. I work confidently across both back-end technologies
              (Spring Boot, Node.js) and front-end ecosystems (Angular, React,
              Next.js).
            </p>

            <p className="text-lg">
              I am driven by technical challenges, clean architecture, data
              security, and — above all — delivering meaningful value to end
              users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
