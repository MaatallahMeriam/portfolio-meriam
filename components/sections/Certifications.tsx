import { Award, Shield, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: 'AWS Academy Cloud Security Foundations',
    issuer: 'AWS Academy',
    type: 'Graduate',
    icon: Shield,
    description:
      'Comprehensive training in cloud security fundamentals, including identity and access management, encryption, and security best practices in AWS.',
    skills: [
      'Cloud Security',
      'IAM',
      'Data Encryption',
      'Security Monitoring',
      'Compliance',
    ],
  },
  {
    title: 'AWS Academy Cloud Architecting Foundations',
    issuer: 'AWS Academy',
    type: 'Graduate',
    icon: Cloud,
    description:
      'Fundamental knowledge in cloud architecture, covering core AWS services, infrastructure design, and best practices for building scalable applications.',
    skills: [
      'Cloud Architecture',
      'AWS Services',
      'Scalability',
      'High Availability',
      'Cost Optimization',
    ],
  },
];

const languages = [
  {
    language: 'Arabic',
    proficiency: 'Native',
    level: 100,
  },
  {
    language: 'French',
    proficiency: 'Fluent - Professional Proficiency',
    level: 90,
  },
  {
    language: 'English',
    proficiency: 'Fluent - Professional Proficiency',
    level: 90,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Certifications & Languages
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-orange-600 font-semibold">
                        {cert.issuer}
                      </p>
                      <Badge variant="secondary" className="mt-2">
                        {cert.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-orange-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Languages
          </h3>
          <Card className="p-8">
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-semibold text-slate-900">
                        {lang.language}
                      </span>
                      <span className="text-slate-600 text-sm ml-2">
                        ({lang.proficiency})
                      </span>
                    </div>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-teal-600 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
