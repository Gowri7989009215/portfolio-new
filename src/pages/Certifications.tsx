import AnimatedSection from "@/components/AnimatedSection";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
  title: "Data Scientist Intern",
  authority: "Evoastra Ventures Inc.",
  date: "September 2025 – October 2025",
  description: "Worked on real-world data science projects involving analytical modeling, structured reporting, and technical deliverables with accountability and performance tracking.",
  externalLink: "#",
},
{
  title: "Software Development Engineer (SDE) Intern",
  authority: "Bluestock Fintech",
  date: "October 2025 – November 2025",
  description: "Selected as SDE Intern contributing to software engineering tasks, backend development, and structured project execution in a fintech environment.",
  externalLink: "#",
},
{
  title: "Software Development Intern",
  authority: "Cognifyz Technologies",
  date: "June 2025",
  description: "Worked on development tasks including coding, testing, and maintaining structured software solutions in a professional environment.",
  externalLink: "#",
},
{
  title: "Full Stack Web Development Intern",
  authority: "Unified Mentor Pvt Ltd",
  date: "May 2025 – July 2025",
  description: "Completed a two-month internship demonstrating strong full-stack development skills, problem-solving ability, and consistent project delivery.",
  externalLink: "#",
},
{
  title: "Cybersecurity Analyst Job Simulation",
  authority: "Forage",
  date: "August 2025",
  description: "Completed IAM-focused cybersecurity simulation covering identity management strategy, access control systems, and platform integration.",
  externalLink: "#",
},
{
  title: "AI Tools & ChatGPT Workshop",
  authority: "be10x",
  date: "October 2024",
  description: "Hands-on training in AI-powered workflows including rapid analysis, automation, and productivity enhancement using LLM tools.",
  externalLink: "#",
},
{
  title: "Cybersecurity Analyst Job Simulation",
  authority: "Forage",
  date: "August 2025",
  description: "Completed IAM-focused cybersecurity simulation covering identity management strategy, access control systems, and platform integration.",
  externalLink: "#",
},
{
  title: "AI Tools & ChatGPT Workshop",
  authority: "be10x",
  date: "October 2024",
  description: "Hands-on training in AI-powered workflows including rapid analysis, automation, and productivity enhancement using LLM tools.",
  externalLink: "#",
},{
  title: "Aptitude and Reasoning – Skill Up",
  authority: "GeeksforGeeks",
  date: "2025",
  description: "Completed structured aptitude and reasoning program focusing on quantitative analysis and logical problem-solving.",
  externalLink: "#",
},
{
  title: "Internship Common Aptitude Test (ICAT)",
  authority: "ICAT",
  date: "May 2025",
  description: "Participated in national-level aptitude evaluation assessing reasoning, analytics, and structured thinking ability.",
  externalLink: "#",
},
{
  title: "Letter of Recommendation – Full Stack Development",
  authority: "Unified Mentor Pvt Ltd",
  date: "August 2025",
  description: "Received formal recommendation highlighting strong technical skills, creativity in design, and consistent delivery within deadlines.",
  externalLink: "#",
},
];

const Certifications = () => {
  return (
    <div className="relative pt-24 pb-16">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-mono text-primary text-sm">// certifications</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-foreground">
              Verified <span className="gradient-text">Credentials</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Continuous learning validated through industry-recognized certifications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.08}>
              <div className="glass border-glow rounded-xl p-6 h-full group hover:scale-[1.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-primary/70 font-mono mb-2">{cert.authority}</p>
                <p className="text-xs text-muted-foreground mb-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                  {cert.externalLink && (
                    <a
                      href={cert.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
