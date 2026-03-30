import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Intern",
    company: "Cognitica AI",
    location: "Coimbatore, India",
    period: "December 2025 — Present",
    current: true,
    points: [
      "Industrial Safety Automation: Developed and optimized a computer vision pipeline using NanoDet to automate identification of false positives in human detection models within manufacturing environments.",
      "Large-scale Event Analytics: Engineered a vehicle counting system deployed during the Isha Maha Shivaratri event, utilizing object detection and tracking algorithms to manage high-density traffic flow.",
      "CI/CD for ML: Streamlined the transition from development to production by building robust CI/CD pipelines, ensuring seamless updates and monitoring for deployed machine learning models.",
    ],
  },
  {
    role: "Product Development Intern",
    company: "Cruzoe Innotek Pvt Ltd",
    location: "India",
    period: "Dec 2024 — Mar 2025",
    current: false,
    points: [
      "Developed multi-dimensional image-based ML algorithm for cotton cone defect detection.",
      "Deployed full-stack system using Python with real-time analytics in online & offline modes.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Copyva",
    location: "Remote",
    period: "Oct 2024 — Dec 2024",
    current: false,
    points: [
      "Designed responsive frontend UI with React.js and CSS for user-friendly interaction.",
      "Integrated backend APIs and deployed on AWS for seamless data flow.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-secondary mb-2 font-body">02 //</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-glow-gold mb-12">EXPERIENCE</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 pl-8 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(43,90%,55%,0.6)]" />

              <div className={`p-6 border transition-all duration-300 card-glow bg-card/30 backdrop-blur-sm ${
                exp.current
                  ? "border-primary/50 shadow-[0_0_20px_hsl(43,90%,55%,0.12)]"
                  : "border-border/50 hover:border-primary/30"
              }`}>
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <span className="text-[10px] tracking-widest text-secondary">{exp.period}</span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 text-[9px] tracking-widest text-secondary border border-secondary/40 px-2 py-0.5 bg-secondary/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      CURRENTLY WORKING
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-base text-foreground">{exp.role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-primary">{exp.company}</p>
                  <span className="text-muted-foreground/40 text-xs">·</span>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
