import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ label, percentage, delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{label}</span>
        <span className="font-mono text-primary">{percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-50 blur-sm" />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
