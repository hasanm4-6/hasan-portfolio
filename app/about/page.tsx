'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AnimatedGradientBg } from '@/components/animated-gradient-bg';
import { Card } from '@/components/ui/card';
import { Code2, Layers, Users, Zap, BookOpen, Target } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    {
      icon: BookOpen,
      title: 'Early Foundation',
      description:
        'Taught C programming, building strong fundamentals in data structures, memory management, and problem-solving.',
    },
    {
      icon: Layers,
      title: '10+ Months Experience',
      description:
        'Worked within real software engineering environments, collaborating with teams and delivering production-grade applications.',
    },
    {
      icon: Target,
      title: 'Full-Stack Expertise',
      description:
        'Mastered the MERN stack alongside Python/FastAPI, becoming comfortable across the entire application stack.',
    },
    {
      icon: Code2,
      title: 'System Design',
      description:
        'Evolved from writing code to designing systems, APIs, and scalable architectures for real-world problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Learned to translate business requirements into technical solutions while communicating clearly with teams.',
    },
    {
      icon: Zap,
      title: 'Pragmatic Engineering',
      description:
        'Adopted a problem-first approach: solve, write readable code, optimize when it matters, ship and improve.',
    },
  ];

  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedGradientBg />
      <Navigation />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                About My Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                From teaching fundamentals to building production systems
              </p>
            </div>

            <Card className="p-8 space-y-6">
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <p className="text-base leading-relaxed">
                  I'm a Computer Science student and Full-Stack Software Engineer
                  with hands-on experience building real-world, production-grade
                  web applications. My journey has been defined by learning,
                  building, and continuously refining my craft.
                </p>

                <p className="text-base leading-relaxed">
                  My core strength lies in the{' '}
                  <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>
                  , complemented by Python, FastAPI, and working knowledge of
                  Django. But beyond frameworks, I focus on designing systems
                  that are scalable, maintainable, and user-centric.
                </p>

                <p className="text-base leading-relaxed">
                  Over <strong>10 months of professional experience</strong>,
                  I've worked within real software engineering environments,
                  collaborating with clients and teams. I've translated business
                  requirements into technical solutions, built authentication
                  systems, designed dashboards, integrated APIs, and shipped
                  features that people actually use.
                </p>

                <p className="text-base leading-relaxed">
                  Teaching C programming early in my journey shaped how I think.
                  It taught me to respect fundamentals, understand memory and
                  logic deeply, and communicate complex ideas clearly. That
                  clarity is something I bring to every project.
                </p>
              </div>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Key Milestones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {milestones.map((milestone, idx) => (
                  <Card
                    key={idx}
                    className="p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <milestone.icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4">My Engineering Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">→</span>
                  <span className="text-sm leading-relaxed">
                    <strong>Solve the problem first</strong> - Understand what
                    needs to be built and why before writing code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">→</span>
                  <span className="text-sm leading-relaxed">
                    <strong>Write readable, maintainable code</strong> - Code is
                    read more often than written; clarity is paramount
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">→</span>
                  <span className="text-sm leading-relaxed">
                    <strong>Optimize only when it matters</strong> - Premature
                    optimization is the root of all evil
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">→</span>
                  <span className="text-sm leading-relaxed">
                    <strong>Ship, measure, improve</strong> - Get something out
                    there, learn from real usage, iterate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">→</span>
                  <span className="text-sm leading-relaxed">
                    <strong>Value clean architecture and user design</strong> -
                    Systems should be predictable; interfaces should be intuitive
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
