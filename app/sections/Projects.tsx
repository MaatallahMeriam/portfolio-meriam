// app/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BASKEL – Cyclist Management Platform",
    year: "2023",
    tech: "React.js • Node.js • Express.js • PostgreSQL • REST API • JWT Authentication • Responsive UI",
    description:
      "Full-stack web platform for managing cyclists, including CRUD operations, secure REST API, authentication/authorization, and a responsive dashboard built with React and Tailwind CSS.",
    github: "https://github.com/MaatallahMeriam",
    demo: "#",
  },
  {
    title: "Teaching Load Management System",
    year: "2022",
    tech: "Spring Boot • React.js • JPA/Hibernate • PostgreSQL • REST API • JWT Security • Role-based Access Control",
    description:
      "Secure academic management system handling teaching loads. Features dynamic forms, structured API communication, role-based access, and a React-driven frontend.",
    github: "https://github.com/MaatallahMeriam",
    demo: "#",
  },
  {
    title: "Interactive Image Classification Interface",
    year: "2023",
    tech: "Python • TensorFlow / Keras • OpenCV • Flask • React.js • REST API • Model Evaluation Metrics • Image Preprocessing",
    description:
      "Developed an interactive interface for image classification models. Involved preprocessing techniques (normalization, resizing, augmentation), building CNN models, evaluating performance metrics (accuracy, F1-score), and integrating backend ML models with a React frontend.",
    github: "https://github.com/MaatallahMeriam",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 hover:bg-white/10 transition"
    >
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Academic Projects & Experiences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, i) => (
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
                  {project.title}
                </h3>

                <p className="text-primary font-medium mb-4">
                  {project.year} • {project.tech}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Github className="h-5 w-5" />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium opacity-70"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Demo
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
