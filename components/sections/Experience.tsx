import { Briefcase, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'Simplexity',
    location: 'Tunisia',
    period: 'November 2025 - Present',
    type: 'Pre-employment Internship',
    description:
      'Design and development of web-based ERP solutions for various clients using Next.js, tailored to specific business requirements.',
    achievements: [
      'Implemented secure authentication systems and role-based access management',
      'Developed high-performance backends with Prisma ORM, including data validation and error handling',
      'Active participation in requirements analysis and resolution of complex technical issues',
      'Continuous improvement of delivered ERP solutions',
    ],
    technologies: ['Next.js', 'Prisma ORM', 'TypeScript', 'PostgreSQL', 'JWT'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Excellia Solutions',
    location: 'Tunis, Tunisia',
    period: 'February 2025 - August 2025',
    type: 'Final Year Project',
    description:
      'Designed and developed a complete HR digitalization platform from scratch using Spring Boot, Angular, and PostgreSQL.',
    achievements: [
      'Built modular architecture for leave management, attendance tracking, and remote work planning',
      'Integrated FastAPI service with MPNetBaseV2 ML model for automated employee-project matching',
      'Developed interactive telework scheduling calendar',
      'Implemented QR code-based attendance tracking system',
      'Delivered complete end-to-end solution replacing manual HR processes',
    ],
    technologies: [
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'FastAPI',
      'ML Models',
      'JWT',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Think Tank Business Solutions',
    location: 'Tunis, Tunisia',
    period: 'July 2024 - September 2024',
    type: 'Internship',
    description:
      'Designed and implemented a dynamic form generation feature in the PTS MS system.',
    achievements: [
      'Built custom drag-and-drop interface entirely from scratch without external libraries',
      'Developed Spring Boot backend handling complex queries and secure database communication',
      'Created reusable Angular components for form creation',
      'Implemented performance optimization and modular architecture',
      'Collaborated with cross-functional teams to meet business requirements',
    ],
    technologies: ['Spring Boot', 'Angular', 'SQL Server', 'TypeScript'],
  },
  {
    title: 'Desktop Application Developer Intern',
    company: 'Africa Transit Magasin Cale',
    location: 'Rades, Tunisia',
    period: 'June 2023 - July 2023',
    type: 'Internship',
    description:
      'Designed and developed a desktop application for managing commercial services using Java Swing.',
    achievements: [
      'Conducted detailed user needs analysis and translated into technical designs',
      'Worked with commercial department to validate usability',
      'Ensured application stability with validation rules for data integrity',
    ],
    technologies: ['Java', 'Swing', 'SQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Hands-on experience building scalable web applications and enterprise
            solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-slate-600">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>
              </div>

              <p className="text-slate-700 mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-blue-50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
