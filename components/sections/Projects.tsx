import { Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'HR Digital Platform with AI Integration',
    description:
      'Complete HR digitalization platform built from scratch featuring leave management, attendance tracking with QR codes, interactive telework calendar, and AI-powered employee-project matching using MPNetBaseV2 model.',
    achievements: [
      'Automated employee-project assignment using ML',
      'Reduced manual HR processes by 80%',
      'Implemented secure JWT authentication',
      'Built scalable REST API architecture',
    ],
    technologies: [
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'FastAPI',
      'ML Models',
      'JWT',
    ],
    category: 'Enterprise Application',
  },
  {
    title: 'Dynamic Form Generator System',
    description:
      'Innovative form generation feature for PTS MS system allowing users to create, modify, and deploy custom forms with a drag-and-drop interface built entirely from scratch without external libraries.',
    achievements: [
      'Custom drag-and-drop interface without libraries',
      'Reusable component architecture',
      'Complex query optimization',
      'Modular and maintainable codebase',
    ],
    technologies: ['Spring Boot', 'Angular', 'SQL Server', 'TypeScript'],
    category: 'Business Tool',
  },
  {
    title: 'Cyclist Management Web Application - BASKEL',
    description:
      'Full-stack web application for managing cyclist data with complete CRUD operations, seamless client-server architecture, and responsive user interface.',
    achievements: [
      'RESTful API design',
      'State management implementation',
      'Responsive and interactive UI',
      'Complete deployment pipeline',
    ],
    technologies: ['Node.js', 'React.js', 'SQL', 'REST API'],
    category: 'Web Application',
  },
  {
    title: 'Academic Management System',
    description:
      'Teaching load management system for academic institutions with role-based access control, dynamic form submissions, and comprehensive validation.',
    achievements: [
      'MVC architecture implementation',
      'Role-based access control',
      'JPA/Hibernate data persistence',
      'Secure API communication',
    ],
    technologies: ['Spring Boot', 'React.js', 'JPA/Hibernate', 'REST API'],
    category: 'Academic System',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real-world projects demonstrating full-stack development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-4">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-blue-50">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto pt-4 flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a
                    href="https://github.com/MaatallahMeriam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/MaatallahMeriam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
