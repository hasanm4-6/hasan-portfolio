"use client";

import Link from "next/link";
import { Code2, Layers, Users, Zap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Systems Thinking",
    description:
      "I design systems, shape APIs, and think in terms of scalability, performance, and long-term maintainability.",
  },
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description:
      "Comfortable moving between frontend UX decisions and backend architecture without losing context.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "10+ months working with clients and teams, translating business requirements into technical solutions.",
  },
  {
    icon: Zap,
    title: "Pragmatic Mindset",
    description:
      "Solve the problem first, write readable code, optimize only when it matters, ship and improve.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            About My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            More Than Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science student and Full-Stack Software Engineer with
            hands-on experience building real-world, production-grade
            applications that solve real problems.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <Card className="p-6 sm:p-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">
                I&apos;m a Computer Science student and Full-Stack Software Engineer
                with hands-on experience building real-world, production-grade
                web applications. My journey has been defined by learning,
                building, and continuously refining my craft.
              </p>

              <p className="text-base leading-relaxed">
                My core strength lies in the <strong>MERN stack{" "}
                (MongoDB, Express.js, React.js, Node.js)</strong>, complemented by{" "}
                <strong>Next.js</strong>, <strong>Python</strong>, <strong>FastAPI</strong>, and working
                knowledge of Django. I don&apos;t just write code—I design
                systems, shape APIs, and think in terms of scalability,
                performance, and long-term maintainability.
              </p>
              <p className="text-base leading-relaxed">
                I&apos;ve spent over <strong>1 year</strong> working within
                real software engineering environments, collaborating with
                clients and teams, translating business requirements into
                technical solutions, and shipping features that actually get
                used.
              </p>
              {/* <p className="text-base leading-relaxed">
                Earlier in my journey, I <strong>taught C programming</strong>,
                which sharpened my fundamentals and reinforced a disciplined
                approach to problem-solving, memory, and logic. Teaching helped
                me learn how to explain complex ideas clearly—an underrated but
                powerful engineering skill.
              </p> */}
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <item.icon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold mb-4 text-lg">
            My Engineering Philosophy
          </h3>
          <ul className="space-y-3 text-sm mb-4">
            <li className="flex items-start gap-3">
              <span className="text-primary text-lg mt-0.5">→</span>
              <div>
                <strong>Solve the problem first</strong>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Understand what needs to be built before writing code
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-lg mt-0.5">→</span>
              <div>
                <strong>Write readable, maintainable code</strong>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Code is read more often than written; clarity is paramount
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-lg mt-0.5">→</span>
              <div>
                <strong>Optimize only when it matters</strong>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Premature optimization is the root of all evil
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-lg mt-0.5">→</span>
              <div>
                <strong>Ship, measure, improve</strong>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Get something out there, learn from real usage, iterate
                </p>
              </div>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I value clean architecture, predictable APIs, and user-centric
            design. I&apos;m constantly learning, questioning patterns, and
            refining my craft—because good software isn&apos;t written once,
            it&apos;s evolved.
          </p>
        </Card>

        {/* <div className="flex justify-center mt-8">
          <Link href="/about">
            <Button variant="outline" className="gap-2">
              Read My Full Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
