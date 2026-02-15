import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SkillBar from "@/components/SkillBar";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Wrench, BrainCircuit, Terminal } from "lucide-react";

const categories = [
  {
    name: "Programming & Core Skills",
    icon: Terminal,
    skills: [
      { name: "Java", pct: 85 },
      { name: "Data Structures", pct: 90 },
      { name: "Algorithms", pct: 88 },
      { name: "Aptitude", pct: 82 },
    ],
  },
  {
    name: "Backend Stack",
    icon: Cpu,
    skills: [
      { name: "Node.js", pct: 90 },
      { name: "Express.js", pct: 88 },
      { name: "REST APIs", pct: 92 },
      { name: "Auth Systems", pct: 85 },
    ],
  },
  {
    name: "Frontend Stack",
    icon: Code2,
    skills: [
      { name: "React", pct: 85 },
      { name: "JavaScript", pct: 92 },
      { name: "TypeScript", pct: 85 },
      { name: "TailwindCSS", pct: 90 },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", pct: 85 },
      { name: "MySQL", pct: 90 },
      { name: "PostgreSQL", pct: 82 },
      { name: "Redis", pct: 70 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", pct: 95 },
      { name: "Docker", pct: 75 },
      { name: "VS Code", pct: 95 },
      { name: "Postman", pct: 88 },
      { name: "Linux", pct: 78 },
    ],
  },
  {
    name: "AI / ML",
    icon: BrainCircuit,
    skills: [
      { name: "TensorFlow", pct: 65 },
      { name: "Pandas", pct: 75 },
      { name: "NumPy", pct: 72 },
      { name: "Scikit-learn", pct: 68 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="relative pt-24 pb-16">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-mono text-primary text-sm">// skills</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-foreground">
              Technical <span className="gradient-text">Arsenal</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit built through years of building production systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === i
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "glass text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass border-glow rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                {(() => {
                  const Icon = categories[activeCategory].icon;
                  return (
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  );
                })()}
                <h3 className="text-xl font-semibold text-foreground">{categories[activeCategory].name}</h3>
              </div>
              <div className="space-y-5">
                {categories[activeCategory].skills.map((skill, j) => (
                  <SkillBar key={skill.name} label={skill.name} percentage={skill.pct} delay={j * 0.08} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* All Skills Overview */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16">
              <h3 className="text-xl font-bold text-foreground mb-8 text-center">Complete Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                  <div key={cat.name} className="glass border-glow rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <cat.icon className="w-4 h-4 text-primary" />
                      <h4 className="font-medium text-foreground text-sm">{cat.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span key={skill.name} className="text-xs font-mono px-2 py-1 rounded-md bg-primary/5 text-primary/80 border border-primary/10">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Skills;
