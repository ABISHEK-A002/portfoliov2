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
                I'm an <span className="text-primary">AI Engineer & Full-Stack Developer</span> who 
                thrives at the intersection of research and real-world deployment. I don't just build 
                models — I ship <span className="text-primary">products</span> that solve hard problems 
                in manufacturing, NLP, and computer vision.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From deploying CNN models for industrial defect detection to architecting dual AI agents 
                with RAG — I optimise for impact. When I'm not fine-tuning models, I'm fine-tuning my 
                jab-cross combo in the boxing ring.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Published researcher. Hackathon finalist. Multilingual — English, Tamil, Hindi. 
                Currently designing a Boxing Trainer ML Model that analyses punch accuracy at sub-100ms latency.
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
