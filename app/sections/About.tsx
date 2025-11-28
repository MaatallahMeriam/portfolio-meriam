"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="a-propos" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">À propos</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-left leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="text-lg mb-6">
              Diplômée d’un <span className="font-semibold text-primary">Diplôme d’Ingénieur en Informatique – Génie Logiciel</span> 
              (mention Très Bien) de l’Institut Supérieur d’Informatique et des Mathématiques de Monastir, je suis une développeuse 
              full-stack junior passionnée par la création de solutions digitales modernes, performantes et centrées utilisateur.
            </p>
            <p className="text-lg mb-6">
              À travers mon parcours, j’ai eu l’opportunité de travailler sur des projets concrets en entreprise 
              (portail RH sur mesure, génération dynamique de formulaires, applications desktop) et académiques 
              (BASKEL, système de gestion de charge d’enseignement), me permettant de maîtriser à la fois le back-end 
              (Spring Boot, Node.js) et le front-end (Angular, React, Next.js).
            </p>
            <p className="text-lg">
              Je suis motivée par les défis techniques, l’architecture propre, la sécurité des données et surtout 
              par la satisfaction des utilisateurs finaux.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}