"use client";

import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section
  id="home"
  className="min-h-screen flex items-center justify-center bg-hero-gradient dark:bg-hero-gradient"
>

      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Meriam Maatallah
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              Software Engineer<br />Full-Stack Developer
            </p>

            <p className="text-lg text-gray-400 dark:text-gray-300 mb-8 max-w-lg">
              I build reliable, elegant and high-performance web applications
              using modern technologies such as React, Next.js, Angular,
              Spring Boot, Node.js and more.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume_Meriam_Maatallah.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                <Download className="mr-2 h-5 w-5" /> Download My CV
              </a>


              <div className="flex gap-3">
                <a
                  href="https://github.com/MaatallahMeriam"
                  target="_blank"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 text-gray-900 dark:text-white transition"
                >
                  <Github className="h-6 w-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/meriam-maatallah/"
                  target="_blank"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 text-gray-900 dark:text-white transition"
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                <a
                  href="mailto:mkdmeriam22@gmail.com"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 text-gray-900 dark:text-white transition"
                >
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
             <div className="absolute inset-0 rounded-full blur-3xl bg-primary/20 animate-pulse"></div>


              <Image
                src="/images/meriam.jpg"
                alt="Meriam Maatallah"
                width={400}
                height={400}
                priority
                className="rounded-full shadow-2xl border-8 border-white dark:border-gray-800 relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
