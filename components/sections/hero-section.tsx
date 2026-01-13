import { Github, Linkedin, Mail, ArrowRight, Download, Eye } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pb-16 pt-24"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8 w-full">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-3">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Full-Stack Software Engineer
            </div>
          </div>
          {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter ">
            Building the Future
          </h1> */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter">
            Muhammad Hasan Munir
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Building the Future
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I transform complex problems into elegant solutions.
            Production-grade web applications with clean architecture, scalable
            APIs, and user-centric design that solves real problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 ">
          <Button
            size="lg"
            onClick={() => scrollToSection("#experience")}
            className="gap-2 min-w-48"
          >
            Explore My Experience
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="gap-2 min-w-48"
          >
            <Mail className="h-4 w-4" />
            Let&apos;s Talk
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="gap-2 min-w-48"
          >
            <a
              href="/resume/Muhammad Hasan Munir Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-w-48"
            >
              <Eye className="h-4 w-4" />
              Preview CV
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <a
            href="https://github.com/hasanm4-6"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 border border-border"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hasan-munir-b9a50b394/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 border border-border"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="/resume/Muhammad Hasan Munir Resume.pdf"
            download
            className="p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 border border-border"
            aria-label="Download CV"
          >
            <Download className="h-5 w-5" />
          </a>
        </div>

        {/* <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce group"
          aria-label="Scroll to about section"
        >
          <div className="p-2 rounded-full hover:bg-accent transition-colors">
            <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </button> */}
      </div>
    </section>
  );
}
