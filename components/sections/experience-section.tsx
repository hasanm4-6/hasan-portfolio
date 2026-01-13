import { Briefcase } from "@/lib/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    organization: "TSN (The Social Nexus)",
    web: "https://thesocialnexus.org/",
    period: "6+ Months",
    description:
      "Worked as a Full Stack Software Engineer, delivering production-grade features across multiple consumer, B2B, and healthcare platforms. Operated with end-to-end ownership, translating product requirements into scalable, secure, and maintainable solutions in a remote, milestone-driven environment.",
    highlights: [
      "Built and maintained end-to-end product features, covering frontend interfaces, backend logic, data modeling, and integrations.",
      "Designed and implemented authentication systems, role-based access, onboarding flows, and account lifecycle management.",
      "Developed subscription, billing, and payment workflows, supporting freemium, premium, recurring, and end-of-month consolidated billing models.",
      "Implemented event-driven and booking systems, including multi-step creation flows, recurring reservations, and dynamic availability logic.",
      "Designed intelligent user-matching and behavioral logic based on shared interests, overlapping activities, and contextual interactions.",
      "Built admin panels and internal tools for content management, FAQs, waitlists, questionnaires, and data exports.",
      "Implemented email communication pipelines for transactional, onboarding, and product-engagement messaging.",
      "Delivered analytics instrumentation, tracking user actions, funnel progress, and feature adoption.",
      "Translated design prototypes into responsive, accessible user interfaces while maintaining consistent styling and performance standards.",
      "Supported multi-phase product milestones, including feature delivery, UAT fixes, documentation, and handover.",
      "Collaborated closely with product and stakeholders to align technical execution with business goals.",
    ],
  },
  {
    title: "Backend Engineer",
    organization: "Websolixs",
    web: "https://websolixs.com/",
    period: "6+ Months",
    description: "",
    highlights: [
      "Designed, built, and maintained scalable backend systems, owning API design, application flow, and database schema architecture across multiple projects.",
      "Led database modeling and optimization, defining relationships, schemas, and data flow to support performance and scalability.",
      "Collaborated with frontend teams to deliver secure, well-structured backend services aligned with product requirements.",
    ],
  },
  {
    title: "Full Stack Web Developer Trainee",
    organization: "SeeBiz",
    web: "https://see.biz/",
    period: "Previous Role",
    description: "",
    highlights: [
      "Strong foundation in algorithms and data structures",
      "Understanding of system design principles",
      "Continuous learning and skill development",
      "Active in open-source and personal projects",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
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
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href={exp.web}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {exp.organization}
                        </a>
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  Key Responsibilities & Contributions:
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm">
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
