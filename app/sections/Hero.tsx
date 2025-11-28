"use client";

import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Meriam Maatallah
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              Ingénieure Informatique<br />Développeuse Full Stack Junior
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Passionnée par le développement web moderne, je crée des applications performantes, 
              sécurisées et élégantes avec React, Next.js, Angular, Spring Boot et bien plus.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/cv_Meriam_Maatallah.pdf" download>
                  <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
                </a>
              </Button>
              <div className="flex gap-3">
                <a href="https://github.com/MaatallahMeriam" target="_blank" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/meriam-maatallah/" target="_blank" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:mkdmeriam22@gmail.com" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Image
                src="/images/meriam.jpg"
                alt="Meriam Maatallah"
                width={400}
                height={400}
                className="rounded-full shadow-2xl border-8 border-white dark:border-gray-800 relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}