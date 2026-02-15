import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — connect to backend later
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative pt-24 pb-16">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-mono text-primary text-sm">// contact</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-foreground">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Open to opportunities, collaborations, and interesting conversations about technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, want to discuss technology, 
                  or are looking for a developer who thinks in systems — I'd love to hear from you.
                </p>
              </div>

       <div className="space-y-4">
  {[
    {
      icon: Mail,
      label: "chinthagowrishankar18@gmail.com",
      href: "mailto:chinthagowrishankar18@gmail.com",
    },
    {
      icon: Github,
      label: "github.com/Gowri7989009215",
      href: "https://github.com/Gowri7989009215",
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/chintha-gowri-shankar-a7a4242a0",
      href: "https://www.linkedin.com/in/chintha-gowri-shankar-a7a4242a0",
    },
    {
      icon: MapPin,
      label: "India",
      href: "#",
    },
  ].map((item) => (
    <a
      key={item.label}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
        <item.icon className="w-4 h-4" />
      </div>
      <span className="text-sm">{item.label}</span>
    </a>
  ))}
</div>
            </div>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass border-glow rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:glow-primary transition-all duration-300"
              >
                {sent ? "Message Sent ✓" : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
