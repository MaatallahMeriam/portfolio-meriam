import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C#'],
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    color: 'from-teal-500 to-green-500',
    skills: [
      'React.js',
      'Next.js',
      'Angular',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    icon: Database,
    title: 'Backend Development',
    color: 'from-orange-500 to-red-500',
    skills: [
      'Spring Boot',
      'Node.js',
      'Django',
      'REST APIs',
      'Prisma ORM',
      'JPA/Hibernate',
      'FastAPI',
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'from-blue-600 to-slate-600',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    icon: Cloud,
    title: 'Machine Learning & AI',
    color: 'from-violet-500 to-pink-500',
    skills: [
      'ML Model Integration',
      'FastAPI',
      'Pre-trained Models',
      'MPNetBaseV2',
    ],
  },
  {
    icon: Wrench,
    title: 'DevOps & Tools',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      'Docker',
      'Kubernetes',
      'Git',
      'GitHub',
      'GitLab',
      'Figma',
      'JWT Authentication',
    ],
  },
];

const frameworks = [
  { name: 'Next.js', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Angular', level: 85 },
  { name: 'Spring Boot', level: 90 },
  { name: 'Node.js', level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Core Framework Proficiency
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {frameworks.map((framework, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700">
                    {framework.name}
                  </span>
                  <span className="text-slate-600">{framework.level}%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000"
                    style={{ width: `${framework.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
