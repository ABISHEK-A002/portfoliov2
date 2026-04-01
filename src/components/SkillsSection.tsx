import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["Python", "Java", "C", "C++"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Model Fine-tuning"],
  },
  {
    title: "FULL STACK",
    skills: ["React.js", "Spring Boot", "REST API", "AWS"],
  },
  {
    title: "TOOLS",
    skills: ["Git", "Jupyter", "Google Colab", "Postman"],
  },
  {
    title: "DATA",
    skills: ["DSA", "PostgreSQL", "Big Data", "Data Pipelines"],
  },
];

const achievements = [
  "Published 2 research papers on AI in medical diagnostics & NLP",
  "Finalist in international AI hackathons — top score 81.23%",
  "NPTEL Certified in Big Data Computing (Distinction Grade)",
  "Participated in 15+ national & international hackathons",
  "AI & ML Certified from Internshala (70% score)",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-secondary mb-2 font-body">04 //</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-glow-gold mb-12">SKILLS & ACHIEVEMENTS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 border border-border/50 hover:border-primary/40 text-card-foreground hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.3em] text-muted-foreground mb-6">ACHIEVEMENTS</h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 p-3 border border-primary/20 hover:border-primary/40 transition-colors bg-primary/[0.03]"
                >
                  <span className="text-primary text-xs mt-0.5" style={{ textShadow: '0 0 6px hsl(43 90% 55% / 0.5)' }}>◆</span>
                  <p className="text-xs text-card-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
