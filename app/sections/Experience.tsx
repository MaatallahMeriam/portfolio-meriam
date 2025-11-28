"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
 {
  title: "Final-Year Engineering Intern — Full HR Portal Development",
  company: "Excellia Solutions",
  location: "Tunis, Tunisia",
  period: "Feb 2025 – Jul 2025",
  description: [
    "Designed and developed a full HR digitalization platform from scratch using Spring Boot (REST APIs), Angular, and PostgreSQL.",
    "Built a modular and scalable architecture enabling the management of leave requests, attendance tracking, remote work planning, and internal HR–employee interactions.",
    "Implemented a secure authentication & authorization system (JWT, role-based access, validation pipeline).",
    "Integrated an external FastAPI service leveraging a pre-trained MPNetBaseV2 model to automatically assign employees to projects based on syntactic similarity and skill matching, ensuring optimal allocation to projects.",
    "Developed an interactive telework scheduling calendar, allowing employees and managers to plan remote work efficiently.",
    "Implemented attendance tracking with QR code scanning for automatic clock-in/clock-out.",
    "Optimized database queries and Angular components to improve performance and reduce response times.",
    "Collaborated directly with HR stakeholders to understand business needs and translate them into functional, ergonomic UI flows.",
    "Delivered a complete end-to-end solution that replaced manual processes with a centralized, AI-assisted, and automated workflow."
  ],
},
  {
    title: "Full Stack Developer Intern — Dynamic Form Builder (Drag & Drop)",
    company: "THINK TANK Business Solutions",
    location: "Tunis, Tunisia",
    period: "Jul 2024 – Sep 2024",
    description: [
      "Built a full dynamic form generation system allowing users to assemble components based on events and business actions.",
      "Developed backend mutation & configuration logic in Spring Boot with secure data persistence in SQL databases.",
      "Implemented a complete drag-and-drop interface in Angular from scratch, without using any external UI libraries.",
      "Designed reusable and modular components with real-time visual rendering of fields and dynamic schema updates.",
      "Improved DOM manipulation performance and overall UX through clean, scalable and maintainable front-end architecture.",
      "Gained deep understanding of component-driven design and advanced UI interactions."
    ],
  },
  {
    title: "Desktop Application Development Intern — Commercial Management System",
    company: "Africa Transit Magasin Cale",
    location: "Radès, Tunisia",
    period: "Jun 2023 – Jul 2023",
    description: [
      "Designed and developed a full desktop application using Java Swing for managing commercial operations.",
      "Conducted requirement analysis with business users to understand workflow, data structure and UI needs.",
      "Implemented modules for customer management, service tracking, activity dashboards and reporting features.",
      "Learned strong foundations in user-oriented design, code structuring and event-driven desktop development."
    ],
  },
  
];


export default function Experience() {
  return (
    <section id="experience" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 hover:bg-white/10 transition"
>
      <div className="container px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Professional Experience
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
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-primary font-semibold">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        {item}
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
