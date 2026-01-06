import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const education = [
  {
    degree: 'Computer Engineering Degree in Software Engineering',
    institution: 'Higher Institute of Computer Science and Mathematics (ISIMM)',
    location: 'Al Munastir, Tunisia',
    period: '2020 - 2025',
    description:
      'Comprehensive software engineering program covering full-stack development, algorithms, data structures, software architecture, and AI/ML fundamentals.',
    highlights: [
      'Specialized in Software Engineering and Web Development',
      'Final Year Project: AI-integrated HR Digital Platform',
      'Coursework in Advanced Algorithms, Database Systems, Web Technologies',
      'Hands-on experience with modern development frameworks',
    ],
  },
  {
    degree: 'Baccalaureate in Mathematical Sciences',
    institution: 'Technical High School of Rades',
    location: 'Rades, Ben Arous, Tunisia',
    period: '2020',
    description:
      'Strong foundation in mathematics and sciences, developing analytical and problem-solving skills.',
    
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Academic foundation in software engineering and computer science
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-teal-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-teal-600 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{edu.description}</p>
                  <div>
                    
                    <ul className="space-y-1">
                    
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
