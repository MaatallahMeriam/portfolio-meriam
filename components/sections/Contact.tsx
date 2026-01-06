import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mkdmeriam22@gmail.com',
    href: 'mailto:mkdmeriam22@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+216 28 401 413',
    href: 'tel:+21628401413',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Rades, Ben Arous, Tunisia',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/MaatallahMeriam',
    color: 'hover:bg-slate-700',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/meriam-maatallah/',
    color: 'hover:bg-blue-700',
  },
  
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm currently open to new opportunities and would love to hear from
            you. Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-slate-600">{item.value}</p>
                </>
              );

              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block hover:text-blue-600 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Card>
              );
            })}
          </div>

          <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-teal-50 border-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Connect With Me
            </h3>
            <p className="text-slate-600 mb-6">
              Let's connect and discuss how we can work together
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={index}
                    size="lg"
                    className={`bg-slate-800 hover:bg-slate-900 ${link.color} transition-all duration-300`}
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
