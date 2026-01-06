import { Code2, Cpu, Database, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Expert in building end-to-end web applications with modern frameworks like Next.js, React, Angular, and Spring Boot',
  },
  {
    icon: Cpu,
    title: 'AI/ML Integration',
    description:
      'Experience integrating machine learning models and AI services to optimize business processes and automate workflows',
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description:
      'Proficient in designing scalable REST APIs, database optimization, and implementing secure authentication systems',
  },
  {
    icon: Globe,
    title: 'Enterprise Solutions',
    description:
      'Building ERP systems and enterprise applications tailored to specific business requirements',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm a passionate Software Engineer with a strong foundation in both
            front-end and back-end development. Currently working at Simplexity,
            I specialize in creating robust, scalable web applications that solve
            real-world business problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-white"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Professional Summary
          </h3>
          <div className="space-y-4 text-slate-600">
            <p>
              As a Computer Engineering graduate specializing in Software
              Engineering from ISIMM, I bring a comprehensive skill set spanning
              multiple technologies and frameworks. My experience includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Developing enterprise-grade ERP solutions with Next.js and Prisma ORM
              </li>
              <li>
                Building complete HR digitalization platforms from scratch using
                Spring Boot, Angular, and PostgreSQL
              </li>
              <li>
                Integrating AI/ML models for automated employee-project matching
                using FastAPI and pre-trained models
              </li>
              <li>
                Implementing secure authentication systems with JWT and role-based
                access control
              </li>
              <li>
                Creating dynamic form generation systems with custom drag-and-drop
                interfaces
              </li>
            </ul>
            <p>
              I'm passionate about clean code, scalable architecture, and
              delivering solutions that make a real impact. I thrive in
              collaborative environments and am always eager to learn new
              technologies and tackle challenging problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
