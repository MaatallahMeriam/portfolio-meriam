'use client';

import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Available for Full-Time Opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Meriam Maatallah
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-4">
            Full Stack Software Engineer
          </p>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Junior Full Stack Web Developer specializing in building scalable web
            applications with React, Next.js, Angular, Spring Boot, and AI/ML
            integration
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
            <MapPin className="h-5 w-5" />
            <span>Rades, Ben Arous, Tunisia</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/MaatallahMeriam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/Maatallah%20Meriam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors animate-bounce"
          >
            <span>Learn more</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
