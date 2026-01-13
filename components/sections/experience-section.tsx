'use client';

import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    icon: Briefcase,
    title: 'Full-Stack Software Engineer',
    organization: 'Professional Experience',
    period: '10+ Months',
    description:
      'Collaborated with clients and teams in real software engineering environments, translating business requirements into technical solutions. Built production-grade applications involving authentication, role-based access, dashboards, booking systems, and API integrations.',
    highlights: [
      'Designed and implemented scalable REST APIs',
      'Built authentication and authorization systems',
      'Developed responsive dashboards with real-time data',
      'Integrated third-party services and chatbot solutions',
      'Worked with Next.js, FastAPI, MongoDB, Supabase, and PostgreSQL',
    ],
  },
  {
    icon: GraduationCap,
    title: 'C Programming Instructor',
    organization: 'Teaching Experience',
    period: 'Previous Role',
    description:
      'Taught C programming fundamentals, sharpening problem-solving skills and reinforcing disciplined approaches to memory management and logic. Developed the ability to explain complex technical concepts clearly.',
    highlights: [
      'Taught data structures, algorithms, and memory management',
      'Created curriculum and learning materials',
      'Mentored students in problem-solving approaches',
      'Reinforced fundamentals through teaching',
    ],
  },
  {
    icon: Award,
    title: 'Computer Science Student',
    organization: 'Academic Background',
    period: 'Ongoing',
    description:
      'Pursuing Computer Science degree while building real-world applications. Combining theoretical knowledge with practical engineering experience.',
    highlights: [
      'Strong foundation in algorithms and data structures',
      'Understanding of system design principles',
      'Continuous learning and skill development',
      'Active in open-source and personal projects',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world engineering experience combined with strong fundamentals
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
