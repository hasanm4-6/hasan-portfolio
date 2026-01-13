'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AnimatedGradientBg } from '@/components/animated-gradient-bg';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Dashboard System',
    description:
      'A comprehensive dashboard with role-based access control, real-time analytics, and advanced data visualization. This project demonstrates the ability to handle complex state management, implement authentication systems, and build responsive interfaces.',
    longDescription:
      'Built an enterprise-grade dashboard serving multiple user roles with different permission levels. The system features real-time data updates using WebSockets, advanced filtering and search, exportable reports, and interactive charts. Performance was optimized for handling large datasets without compromising UX.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'JWT Auth',
      'Chart.js',
      'Tailwind CSS',
    ],
    features: [
      'Multi-role authentication and authorization system',
      'Real-time data updates and notifications',
      'Advanced analytics with interactive charts',
      'Responsive design optimized for all devices',
      'Dark/light theme support',
      'Export functionality for reports',
      'Audit logging and analytics',
    ],
    impact: 'Reduced manual reporting time by 70% and improved data accessibility across the organization.',
  },
  {
    title: 'Booking & Reservation Platform',
    description:
      'A full-featured booking system with payment integration, calendar management, and automated communications. Optimized for performance and user experience with real-time availability checking.',
    longDescription:
      'Developed a complete booking platform with Stripe payment integration, automated confirmation emails, calendar-based availability management, and admin controls. The system handles concurrent bookings with proper locking mechanisms and provides customers with real-time feedback.',
    technologies: [
      'React',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Redis',
      'Stripe',
      'Celery',
      'Docker',
    ],
    features: [
      'Real-time availability checking with conflict resolution',
      'Secure payment processing via Stripe',
      'Automated booking confirmations and reminders',
      'Admin dashboard for management',
      'Calendar view with filtering options',
      'Review and rating system',
      'Email notifications',
    ],
    impact:
      'Automated booking management reduced administrative overhead by 60% and improved customer satisfaction.',
  },
  {
    title: 'REST API Service',
    description:
      'A scalable REST API serving multiple client applications with comprehensive documentation, rate limiting, and intelligent caching. Designed for reliability and performance.',
    longDescription:
      'Built a production-ready REST API following OpenAPI specifications with extensive documentation. The API includes JWT authentication, role-based access control, request rate limiting, response caching, and comprehensive error handling.',
    technologies: [
      'Node.js',
      'Express',
      'TypeScript',
      'MongoDB',
      'Redis',
      'JWT',
      'Swagger',
      'Docker',
    ],
    features: [
      'RESTful architecture with OpenAPI/Swagger documentation',
      'JWT-based authentication and authorization',
      'Request rate limiting and throttling',
      'Intelligent caching with Redis',
      'Comprehensive error handling',
      'Request logging and monitoring',
      'API versioning support',
    ],
    impact: 'Served 100+ daily API requests with 99.9% uptime and sub-100ms response times.',
  },
  {
    title: 'AI Chatbot Integration Platform',
    description:
      'An intelligent chatbot system with FAQ management, natural language processing, and multi-channel support. Integrated with existing customer support infrastructure.',
    longDescription:
      'Created a conversational AI platform that learns from FAQ content and provides intelligent responses. The system seamlessly integrates with multiple communication channels, includes analytics to track common questions, and falls back to human agents when needed.',
    technologies: [
      'Next.js',
      'Python',
      'FastAPI',
      'Supabase',
      'OpenAI',
      'Vector DB',
      'React',
      'Tailwind CSS',
    ],
    features: [
      'Natural language understanding and context awareness',
      'Dynamic FAQ management and training',
      'Multi-channel deployment (web, email, messaging)',
      'Analytics dashboard for insights',
      'Seamless escalation to human agents',
      'Conversation history and learning',
      'Custom response templates',
    ],
    impact:
      'Handled 80% of support queries automatically, reducing support team workload and improving response times.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedGradientBg />
      <Navigation />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Featured Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Production-grade applications built with scalability, user
                experience, and clean architecture in mind
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, idx) => (
                <Card
                  key={idx}
                  className="p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      <p className="text-sm leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIdx) => (
                          <li
                            key={featureIdx}
                            className="text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/30 rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Impact:</strong> {project.impact}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <Badge key={techIdx} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4 border-t">
                        <Button variant="outline" className="gap-2 flex-1">
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                        <Button className="gap-2 flex-1">
                          <ExternalLink className="h-4 w-4" />
                          View Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
