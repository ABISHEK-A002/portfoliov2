import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-secondary mb-2 font-body">01 //</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-glow-gold mb-12">ABOUT</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-sm text-card-foreground leading-relaxed">
                B.Tech student in <span className="text-primary">Artificial Intelligence & Data Science</span> at 
                Sri Krishna College of Technology with a CGPA of <span className="text-primary">8.09</span>. 
                I build intelligent systems that bridge the gap between research and real-world applications.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From deploying CNN models for industrial defect detection to building dual AI agents with RAG — 
                I optimize for impact. When I'm not fine-tuning models, I'm fine-tuning my jab-cross combo in the boxing ring.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Published researcher. Hackathon finalist. Multilingual — English, Tamil, Hindi. 
                Currently designing a Boxing Trainer ML Model that analyzes punch accuracy at sub-100ms latency.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "LOCATION", value: "Coimbatore, India" },
                { label: "EDUCATION", value: "B.Tech AI & DS" },
                { label: "CGPA", value: "8.09 (Rank Holder)" },
                { label: "LANGUAGES", value: "English, Tamil, Hindi" },
                { label: "INTERESTS", value: "AI/ML, Boxing, Full Stack" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-3 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <span className="text-[10px] tracking-widest text-muted-foreground w-28 shrink-0">{item.label}</span>
                  <span className="text-xs text-card-foreground">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
