"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedProgressBar } from "@/components/animated-progress-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillsByProficiency = [
  {
    level: "Expert",
    skills: [
      { name: "React.js", percentage: 95 },
      { name: "Next.js", percentage: 90 },
      { name: "TypeScript", percentage: 90 },
      { name: "Node.js", percentage: 92 },
      { name: "Express.js", percentage: 90 },
      { name: "MongoDB", percentage: 88 },
    ],
  },
  {
    level: "Advanced",
    skills: [
      { name: "Python", percentage: 85 },
      { name: "FastAPI", percentage: 85 },
      { name: "PostgreSQL", percentage: 83 },
      { name: "Tailwind CSS", percentage: 85 },
      { name: "System Design", percentage: 80 },
      { name: "REST APIs", percentage: 88 },
    ],
  },
  {
    level: "Intermediate",
    skills: [
      { name: "Django", percentage: 75 },
      { name: "Docker", percentage: 72 },
      { name: "AWS", percentage: 68 },
      { name: "GraphQL", percentage: 70 },
      { name: "Redis", percentage: 65 },
      { name: "CI/CD", percentage: 70 },
    ],
  },
];

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Redux",
      "React Query",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "Django",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Database Design"],
  },
  {
    category: "Tools & Systems",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "AWS",
      "Vercel",
      "Postman",
      "Insomnia",
      "Linux",
      "Nginx",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, production-ready
            applications
          </p>
        </div>

        <Tabs defaultValue="proficiency" className="w-full mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="proficiency">Proficiency</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="proficiency" className="space-y-8">
            {skillsByProficiency.map((level, idx) => (
              <Card key={idx} className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold mb-6">{level.level}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {level.skills.map((skill, skillIdx) => (
                    <AnimatedProgressBar
                      key={skillIdx}
                      label={skill.name}
                      percentage={skill.percentage}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="categories">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-200 dark:border-blue-800">
          <p className="text-sm text-center text-muted-foreground leading-relaxed">
            <strong className="text-foreground">MERN Stack Specialist</strong>{" "}
            with strong Python/FastAPI and Django capabilities. Experienced in building
            authentication systems, dashboards, booking logic, chatbot
            integrations, and complex database modeling.
          </p>
        </Card>
      </div>
    </section>
  );
}
