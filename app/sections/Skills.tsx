"use client";

import { motion } from "framer-motion";

const skills = {
  "Langages": ["Java", "Python", "JavaScript", "TypeScript", "C", "C#"],
  "Front-end": ["React.js", "Next.js", "Angular", "HTML", "CSS/Tailwind"],
  "Back-end": ["Spring Boot", "Node.js", "Laravel"],
  "Bases de données": ["PostgreSQL", "MySQL", "MongoDB"],
  "Outils & Autres": ["Docker", "Kubernetes", "Git", "GitHub", "GitLab", "Figma", "AWS"],
};

export default function Skills() {
  return (
    <section id="competences" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}