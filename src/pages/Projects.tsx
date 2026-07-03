import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

const filters = ["All", "Web", "Backend", "AI", "System", "Automation"];

const projects = [
  {
  title: "Mini Social Media Platform",
  category: "Web",
  stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  description: "Full-stack social media application with authentication, post creation, likes, comments, and real-time interaction features.",
  architecture: "MVC-based backend with REST APIs, JWT authentication, role-based access control, and MongoDB schema design for scalable post and user relationships.",
  github: "https://github.com/Gowri7989009215/msm_frontend.git",
  demo: "https://msm-frontend.vercel.app/",
},
{
  title: "Invigilation Management System",
  category: "System",
  stack: ["Node.js", "Express", "MySQL", "JavaScript", "HTML", "CSS"],
  description: "Comprehensive exam management system handling timetable generation, dynamic room allocation, faculty scheduling, and seating arrangements.",
  architecture: "Modular backend architecture with branch-wise student allocation logic, normalized relational database design, and dynamic timetable generation algorithms.",
  github: "https://github.com",
  demo: "http://ims-jntua.infinityfreeapp.com/",
},
{
  title: "Personal Portfolio Website",
  category: "Frontend",
  stack: ["HTML", "CSS", "JavaScript"],
  description: "Futuristic, high-performance personal portfolio showcasing projects, architecture thinking, certifications, and technical expertise.",
  architecture: "Component-based layout with modular sections, optimized animation pipeline, intersection observer for scroll-triggered effects, and responsive design principles.",
  github: "https://github.com/Gowri7989009215/invigilation-management-system.git",
  demo: "https://portfolio-new-five-henna.vercel.app/",
},
{
  title: "AI News Aggregator (RSS Based)",
  category: "AI",
  stack: ["Node.js", "Python", "RSS Parser", "MongoDB", "Email API"],
  description: "Automated AI-focused news aggregation system that collects articles via RSS feeds, filters content, and sends curated summaries via email.",
  architecture: "Event-driven pipeline with RSS ingestion service, content processing layer, database storage, and scheduled email distribution module.",
  github: "https://github.com/Gowri7989009215/AI-News-Aggregator-by-RSS.git",
  demo: "https://ai-news-aggregator-rss.vercel.app/",
},
{
  title: "Electronic Health Record System (Blockchain-Based)",
  category: "System",
  stack: ["Node.js", "Express", "Blockchain", "MongoDB", "Smart Contracts"],
  description: "Secure digital health record management system leveraging blockchain for tamper-proof medical data storage and controlled access.",
  architecture: "Hybrid architecture with off-chain database storage and on-chain hash verification using smart contracts for data integrity and decentralized trust.",
  github: "https://github.com/Gowri7989009215/Electronic_Health_Records.git",
  demo: "https://ehrf-ff.vercel.app/",
},
  {
  title: "AI Interview Assistant",
  category: "AI",
  stack: ["React", "Node.js", "Express", "OpenAI API", "Speech Recognition"],
  description: "An AI-powered mock interview platform that simulates real interview scenarios, asks technical questions, and provides intelligent feedback on user responses.",
  architecture: "React frontend provides the interactive interview interface while the Node.js/Express backend processes AI prompts and evaluates responses using AI models. Speech recognition converts voice responses to text for analysis.",
  github: "https://github.com/Gowri7989009215/ai_interview_frontend",
  demo: "https://ai-interview-frontend-ruddy.vercel.app/"
},
  {
  title: "AI Resume Analyzer",
  category: "AI",
  stack: ["React", "Node.js", "Express", "OpenAI API", "NLP"],
  description: "An AI-powered resume analysis tool that evaluates resumes against job descriptions and provides insights, skill matching, and improvement suggestions to help candidates optimize their resumes.",
  architecture: "React frontend allows users to upload resumes and job descriptions, while the Node.js/Express backend processes the data using NLP and AI models to extract skills, analyze content, and generate feedback.",
  github: "https://github.com/Gowri7989009215/ai-resume-analyzer",
  demo: "https://vercel.com/chintha-gowri-shankars-projects/portfolio-new"
},
  {
  title: "Video Notes AI",
  category: "AI",
  stack: [
    "React",
    "Node.js",
    "Express",
    "Supabase",
    "Google Gemini API",
    "YouTube API"
  ],
  description:
    "AI-powered video note generation platform that extracts transcripts from YouTube videos and generates structured notes, summaries, key points, timestamps, and interview-ready content.",

  architecture:
    "Built with a React frontend and Node.js/Express backend following a modular architecture. The backend processes YouTube videos, extracts transcripts, leverages Gemini AI for note generation, stores user data in Supabase, and exposes secure REST APIs. The system supports authentication, note history, and scalable AI-powered content generation.",

  github: "https://github.com/Gowri7989009215/videonotes_ai_frontend",
  demo: "https://videonotes-ai-frontend.vercel.app/"
},
  
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="relative pt-24 pb-16">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-mono text-primary text-sm">// projects</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-foreground">
              Built & <span className="gradient-text">Shipped</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Production-grade projects demonstrating full-stack capabilities and system design thinking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "glass text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass border-glow rounded-xl p-6 cursor-pointer group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-primary/60 px-2 py-0.5 rounded bg-primary/5">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-primary/5 text-primary/70 border border-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong border-glow rounded-2xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-primary/60">{selectedProject.category}</span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-3">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Architecture</h4>
                <p className="text-sm text-muted-foreground">{selectedProject.architecture}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.stack.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass border-glow text-sm text-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> View Code
                </a>
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20 hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
