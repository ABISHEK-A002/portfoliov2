import { motion } from "framer-motion";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Left ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      {/* Right ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-screen py-24">

          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-6 font-body">
              // AI ENGINEER · FULL STACK DEVELOPER · RESEARCHER
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider leading-tight mb-6">
              <span className="text-glow-gold text-primary block">ABISHEK</span>
              <span className="gradient-text block">A</span>
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-10 leading-relaxed font-body">
              Strategic Product Developer turning creative ideas into market-ready
              AI solutions — delivered with the precision of a well-tuned model
              and the grit of a boxer.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-xs tracking-widest border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 border-glow"
              >
                VIEW PROJECTS
              </motion.a>
              <motion.a
                href="/ABISHEK_A_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 inline-flex items-center gap-2 border-glow"
              >
                <Download className="w-3.5 h-3.5" />
                DOWNLOAD RESUME
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-xs tracking-widest border border-secondary text-secondary hover:bg-secondary/10 transition-colors duration-300"
              >
                CONTACT ME
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT: Portrait photo ── */}
          <motion.div
            className="flex-shrink-0 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* Outer decorative spinning ring */}
            <motion.div
              className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full"
              style={{
                background: "transparent",
                border: "1px solid hsl(43 90% 55% / 0.15)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle decorative ring */}
            <motion.div
              className="absolute w-[290px] h-[290px] md:w-[360px] md:h-[360px] rounded-full"
              style={{
                background: "transparent",
                border: "1px dashed hsl(43 90% 55% / 0.25)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            {/* Gold glow backdrop */}
            <div
              className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(43 90% 55% / 0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Portrait container with gold border */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div
                style={{
                  padding: "3px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, hsl(43 90% 55%), hsl(350 70% 50%), hsl(43 90% 55%))",
                  boxShadow: "0 0 40px hsl(43 90% 55% / 0.4), 0 0 80px hsl(43 90% 55% / 0.15), inset 0 0 20px hsl(43 90% 55% / 0.1)",
                }}
              >
                <div
                  className="rounded-full overflow-hidden w-[230px] h-[230px] md:w-[290px] md:h-[290px]"
                  style={{ background: "hsl(0 0% 4%)" }}
                >
                  <img
                    src="/portrait.png"
                    alt="Abishek A"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      filter: "contrast(1.05) brightness(1.02)",
                    }}
                  />
                </div>
              </div>

              {/* Floating gold dot accents */}
              <motion.div
                className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-primary"
                style={{ boxShadow: "0 0 12px hsl(43 90% 55%)" }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-3 -left-4 w-2 h-2 rounded-full bg-secondary"
                style={{ boxShadow: "0 0 10px hsl(350 70% 50%)" }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/2 -right-6 w-1.5 h-1.5 rounded-full bg-accent"
                style={{ boxShadow: "0 0 8px hsl(280 60% 55%)" }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
