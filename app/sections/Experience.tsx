"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Stagiaire PFE – Portail RH sur mesure",
    company: "Excellia Solutions",
    location: "Tunis, Tunisie",
    period: "Fév 2025 – Juil 2025",
    description: [
      "Architecture Spring Boot + Angular + PostgreSQL",
      "Digitalisation complète des processus RH (télétravail, pointage, congés…)",
      "Interface interactive, ergonomie poussée et sécurité des données",
    ],
  },
  {
    title: "Stagiaire Full Stack",
    company: "THINK TANK BUSINESS SOLUTIONS",
    location: "Tunis, Tunisie",
    period: "Juil 2024 – Sept 2024",
    description: [
      "Génération dynamique de formulaires selon les actions utilisateur",
      "Back-end Spring Boot + base SQL",
      "Interface drag-and-drop 100 % from scratch (sans Material)",
      "Focus performance et architecture propre",
    ],
  },
  {
    title: "Stagiaire Développement Desktop",
    company: "AFRICA TRANSIT MAGASIN CALE",
    location: "Radès, Tunisie",
    period: "Juin 2023 – Juil 2023",
    description: [
      "Application Java Swing de gestion commerciale",
      "Gestion clients, services, rapports",
      "Analyse des besoins et validation avec les utilisateurs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Expériences professionnelles
        </motion.h2>

        <div className="space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}