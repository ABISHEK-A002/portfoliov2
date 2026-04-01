import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    title: "Cotton Cone Defect Detection",
    tags: ["TensorFlow", "OpenCV", "CNN"],
    desc: "CNN-based image classification model achieving ~87% accuracy for industrial defect detection in cotton cones.",
    stat: "87% accuracy",
    details: "Developed a multi-dimensional image-based machine learning algorithm for real-time cotton cone defect detection at Cruzoe Innotek. The system uses a Convolutional Neural Network trained on custom datasets, with OpenCV for image preprocessing. Deployed as a full-stack solution supporting both online and offline modes with real-time analytics dashboards.",
    techStack: ["Python", "TensorFlow", "OpenCV", "CNN", "NumPy", "Flask"],
    highlights: ["87% classification accuracy", "Real-time online & offline modes", "Industrial deployment ready"],
  },
  {
    title: "Dual AI Agent (RAG)",
    tags: ["RAG", "NLP", "Multi-Agent"],
    desc: "Dual-agent AI system automating airline support with 75%+ query classification accuracy and 30% faster response times.",
    stat: "75%+ accuracy",
    details: "Built a sophisticated dual-agent AI system leveraging Retrieval-Augmented Generation (RAG) for automated airline customer support. The system classifies incoming queries and routes them to specialized agents, achieving over 75% accuracy in classification and reducing response times by 30%.",
    techStack: ["Python", "LangChain", "RAG", "NLP", "Vector DB", "REST API"],
    highlights: ["75%+ query classification accuracy", "30% faster response times", "Multi-agent architecture"],
  },
  {
    title: "Boxing Trainer ML Model",
    tags: ["OpenCV", "ML", "Real-time"],
    desc: "Real-time feedback system analyzing punch accuracy, speed, and form with sub-100ms response latency.",
    stat: "<100ms latency",
    ongoing: true,
    details: "Currently developing a real-time boxing training assistant that uses computer vision to track and analyze punch mechanics. The system provides instant feedback on accuracy, speed, and form correction using pose estimation and custom ML models.",
    techStack: ["Python", "OpenCV", "MediaPipe", "TensorFlow Lite", "Real-time Processing"],
    highlights: ["Sub-100ms response latency", "Real-time punch analysis", "Form correction feedback"],
  },
  {
    title: "Tamil OCR using Transformers",
    tags: ["Transformers", "OCR", "Deep Learning"],
    desc: "Deep learning OCR to digitize handwritten Tamil reports, enabling searchable document retrieval.",
    stat: "Ongoing R&D",
    ongoing: true,
    details: "Research project focused on developing a transformer-based OCR system specifically designed for handwritten Tamil script. The goal is to digitize legacy handwritten medical and administrative reports, enabling full-text searchable document retrieval.",
    techStack: ["PyTorch", "Transformers", "OCR", "Deep Learning", "Tamil NLP"],
    highlights: ["Handwritten Tamil recognition", "Searchable document retrieval", "Transformer architecture"],
  },
  {
    title: "Face Recognition Security",
    tags: ["FaceNet", "IoT", "AI/ML"],
    desc: "FaceNet-based face recognition for smart surveillance with IoT integration, achieving 65%+ accuracy.",
    stat: "65%+ accuracy",
    details: "Developed a smart surveillance system using FaceNet for face recognition, integrated with IoT devices for real-time monitoring and alerts. The system achieves 65%+ recognition accuracy and supports multiple camera feeds with edge processing.",
    techStack: ["Python", "FaceNet", "IoT", "OpenCV", "Edge Computing"],
    highlights: ["65%+ recognition accuracy", "IoT integration", "Multi-camera support"],
  },
  {
    title: "AutoGarage",
    tags: ["React.js", "Spring Boot", "PostgreSQL"],
    desc: "Full-stack application with secure REST APIs, deployed on AWS with robust database management.",
    stat: "Full Stack",
    details: "Built a complete full-stack garage management application featuring secure REST APIs with Spring Boot, a responsive React.js frontend, and PostgreSQL for data persistence. Deployed on AWS with CI/CD pipeline for seamless updates.",
    techStack: ["React.js", "Spring Boot", "PostgreSQL", "AWS", "REST API", "Docker"],
    highlights: ["Secure REST APIs", "AWS deployment", "Full CI/CD pipeline"],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-secondary mb-2 font-body">03 //</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-glow-gold mb-12">PROJECTS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 bg-card/20 backdrop-blur-sm cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-widest text-primary">
                  {project.stat}
                </span>
                {project.ongoing && (
                  <span className="text-[9px] tracking-widest text-secondary px-2 py-0.5 border border-secondary/30">
                    ONGOING
                  </span>
                )}
              </div>

              <h3 className="font-heading text-sm mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-wider text-primary/70 px-2 py-0.5 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-[10px] tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                CLICK FOR DETAILS →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full border border-primary/30 bg-card p-5 sm:p-8 card-glow max-h-[85vh] overflow-y-auto"
            >
              {/* Close button — large and prominent on mobile */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-card border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-widest text-primary">{selectedProject.stat}</span>
                {selectedProject.ongoing && (
                  <span className="text-[9px] tracking-widest text-secondary px-2 py-0.5 border border-secondary/30">
                    ONGOING
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl md:text-2xl tracking-wider text-glow-gold mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-card-foreground leading-relaxed mb-6">
                {selectedProject.details}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] tracking-wider text-primary px-3 py-1 border border-primary/30 bg-primary/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-[10px] tracking-[0.3em] text-muted-foreground mb-3">KEY HIGHLIGHTS</h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <span className="text-secondary text-xs">◆</span>
                      <span className="text-xs text-card-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
