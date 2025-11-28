"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Academy Cloud Security Foundations",
    institution: "AWS Academy Graduate",
  },
  {
    title: "AWS Academy Cloud Architecting Foundations",
    institution: "AWS Academy Graduate",
  },
  {
    title: ".NET Fundamentals",
    institution: "Great Learning Academic",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 hover:bg-white/10 transition"
    >
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
