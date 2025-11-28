// app/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BASKEL – Gestion des cyclistes",
    year: "2023",
    tech: "React.js • Node.js • SQL",
    description: "Application web full-stack complète : API REST + interface moderne et fluide.",
    github: "https://github.com/MaatallahMeriam", // à remplacer par le vrai lien plus tard
    demo: "#",
  },
  {
    title: "Système de Gestion de la Charge d’Enseignement",
    year: "2022",
    tech: "Spring Boot • React.js • JPA/Hibernate",
    description: "Plateforme sécurisée avec rôles, formulaires dynamiques et communication API REST.",
    github: "https://github.com/MaatallahMeriam",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Projets académiques
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {p.year} • {p.tech}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex gap-6">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Github className="h-5 w-5" />
                    Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium opacity-70"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Démo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}