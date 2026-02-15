// Editable configuration - Update these values to customize the portfolio
const CONFIG = {
  name: "GOWRI SHANKAR CHINTHA",
  resumeFile: "/assets/Gowri_Shankar_ChinthA_Resume.pdf",
  email: "gowri@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github, Code2, Database, Server, Wrench, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import SkillBar from "@/components/SkillBar";

const typingTexts = [
  "Backend Architecture Specialist",
  "Scalable Web Systems Engineer",
  "Data-Driven Developer",
  "Clean Code Advocate",
];

const techStack = {
  Frontend: {
    icon: Code2,
    skills: [
      { name: "HTML", pct: 95 },
      { name: "CSS", pct: 90 },
      { name: "JavaScript", pct: 92 },
      { name: "React", pct: 85 },
    ],
  },
  Backend: {
    icon: Server,
    skills: [
      { name: "Node.js", pct: 90 },
      { name: "Express", pct: 88 },
      { name: "REST APIs", pct: 92 },
      { name: "Auth Systems", pct: 85 },
    ],
  },
  Database: {
    icon: Database,
    skills: [
      { name: "MongoDB", pct: 85 },
      { name: "MySQL", pct: 90 },
      { name: "Query Optimization", pct: 80 },
    ],
  },
  DevOps: {
    icon: Wrench,
    skills: [
      { name: "Git", pct: 95 },
      { name: "Docker", pct: 75 },
      { name: "CI/CD Pipelines", pct: 80 },
    ],
  },
};

const featuredProjects = [
  {
    title: "Distributed Task Engine",
    stack: ["Node.js", "Redis", "Docker"],
    description: "Scalable distributed task processing engine with real-time monitoring and fault tolerance.",
    pattern: "Event-Driven Architecture",
  },
  {
    title: "AI Code Reviewer",
    stack: ["Python", "React", "OpenAI"],
    description: "Automated code review tool leveraging AI for intelligent suggestions and vulnerability detection.",
    pattern: "Microservices",
  },
  {
    title: "Real-Time Analytics Dashboard",
    stack: ["React", "WebSocket", "PostgreSQL"],
    description: "High-performance analytics platform processing millions of events with sub-second latency.",
    pattern: "CQRS Pattern",
  },
];

const Index = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="relative">
      <br /><br /><br />      <br /><br /><br />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 mx-auto">
                  <img 
                    src="/assets/profile.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2306b6d4'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='40' font-family='Arial'%3EGS%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-background"></div>
              </div>
            </motion.div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-glow text-xs font-mono text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              Full Stack Engineer | Available for Opportunities
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-foreground">{CONFIG.name}</span>
            </h1>

            <div className="h-8 mb-8">
              <span className="font-mono text-lg text-muted-foreground">
                {">"} {displayText}
                <span className="animate-glow-pulse text-primary">|</span>
              </span>
            </div>

            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Engineering scalable systems with clean architecture. 
              Passionate about building software that matters.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/architecture"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                View Architecture
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg glass border-glow text-foreground font-medium hover:scale-105 transition-all duration-300"
              >
                Explore Projects
              </Link>
              <a
                href={CONFIG.resumeFile}
                download
                className="px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Dashboard */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">// tech_stack</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
                Full Stack <span className="gradient-text">Proficiency</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, data], i) => (
              <AnimatedSection key={category} delay={i * 0.1}>
                <div className="glass border-glow rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <data.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {data.skills.map((skill, j) => (
                      <SkillBar key={skill.name} label={skill.name} percentage={skill.pct} delay={j * 0.1} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* System Thinking */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">// system_design</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
                How I Think About <span className="gradient-text">Systems</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Frontend", "API Layer", "Business Logic", "Database", "Deployment"].map((block, i) => (
                <div key={block} className="flex items-center gap-4">
                  <div className="glass border-glow rounded-xl px-6 py-4 text-center hover:glow-primary transition-all duration-300 hover:scale-105 cursor-default">
                    <span className="text-sm font-mono text-primary">{`0${i + 1}`}</span>
                    <p className="font-medium text-foreground mt-1">{block}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden sm:block text-primary/40">→</div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "LeetCode Solved", value: 200, suffix: "+" },
                { label: "GitHub Repos", value: 35, suffix: "+" },
                { label: "Projects Built", value: 20, suffix: "+" },
                { label: "Certifications", value: 8, suffix: "" },
              ].map((stat) => (
                <div key={stat.label} className="glass border-glow rounded-xl p-6 text-center">
                  <div className="text-3xl sm:text-4xl text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">// featured_work</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-foreground">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.15}>
                <div className="glass border-glow rounded-xl p-6 h-full group hover:scale-[1.02] transition-all duration-300">
                  <span className="text-xs font-mono text-primary/60">{project.pattern}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-3.5 h-3.5" /> Code
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-glow text-foreground font-medium hover:scale-105 transition-all duration-300"
              >
                View All Projects <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center glass border-glow rounded-2xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Open to collaboration, freelance projects, and full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
              <a
                href="/assets/Gowri_Shankar_ChinthA_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-mono">© 2026 {CONFIG.name}</span>
          <div className="flex gap-6">
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href={`mailto:${CONFIG.email}`} className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
