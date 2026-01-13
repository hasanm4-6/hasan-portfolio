'use client';

import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Enterprise Dashboard System',
    description:
      'Built a comprehensive dashboard with role-based access control, real-time analytics, and data visualization. Handled complex state management and API integrations.',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'JWT Auth',
      'Chart.js',
    ],
    features: [
      'Role-based authentication system',
      'Real-time data updates',
      'Advanced analytics and reporting',
      'Responsive design for all devices',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Booking & Reservation Platform',
    description:
      'Developed a full-featured booking system with payment integration, calendar management, and automated email notifications. Optimized for performance and user experience.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Stripe'],
    features: [
      'Real-time availability checking',
      'Payment processing integration',
      'Automated booking confirmations',
      'Admin panel for management',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'REST API Service',
    description:
      'Designed and implemented a scalable REST API with comprehensive documentation, rate limiting, and caching. Serves multiple client applications with high reliability.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'JWT',
      'Swagger',
    ],
    features: [
      'RESTful architecture with OpenAPI docs',
      'Authentication and authorization',
      'Rate limiting and caching',
      'Comprehensive error handling',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Chatbot Integration Platform',
    description:
      'Created an AI chatbot integration system with FAQ management, natural language processing, and multi-channel support. Reduced customer support workload significantly.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'Supabase', 'OpenAI'],
    features: [
      'Natural language understanding',
      'FAQ management system',
      'Multi-channel deployment',
      'Analytics and insights dashboard',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade applications built with scalability and user
            experience in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button variant="outline" size="sm" className="gap-2 flex-1">
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className="gap-2 flex-1">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <Card className="p-6 text-center bg-accent/30">
            <p className="text-sm text-muted-foreground mb-4">
              These projects showcase real-world solutions involving
              authentication, complex state management, API design, database
              modeling, and production deployment.
            </p>
          </Card>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button className="gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
