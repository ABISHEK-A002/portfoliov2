import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

/* ── Maze / Network SVG ring ──
   A decorative SVG that draws a maze-like circuit pattern
   symbolising networking & connectivity, rendered in gold. */
const NetworkMazeRing = ({
  size,
  className,
  duration,
  reverse = false,
}: {
  size: number;
  className?: string;
  duration: number;
  reverse?: boolean;
}) => {
  const r = size / 2 - 8;
  const gold = "hsl(43 90% 55%)";

  // Generate maze-like path segments around the circle
  const segments: string[] = [];
  const nodePositions: { x: number; y: number }[] = [];
  const segCount = 24;

  for (let i = 0; i < segCount; i++) {
    const angle1 = (i / segCount) * Math.PI * 2;
    const angle2 = ((i + 0.7) / segCount) * Math.PI * 2;
    const cx = size / 2;
    const cy = size / 2;

    // Outer arc segment
    const outerR = r;
    const innerR = r - 14;
    const ox1 = cx + Math.cos(angle1) * outerR;
    const oy1 = cy + Math.sin(angle1) * outerR;
    const ox2 = cx + Math.cos(angle2) * outerR;
    const oy2 = cy + Math.sin(angle2) * outerR;

    // Inner connector segment
    const ix1 = cx + Math.cos(angle1) * innerR;
    const iy1 = cy + Math.sin(angle1) * innerR;
    const ix2 = cx + Math.cos(angle2) * innerR;
    const iy2 = cy + Math.sin(angle2) * innerR;

    if (i % 2 === 0) {
      // Outer arc + radial connector
      segments.push(`M ${ox1} ${oy1} A ${outerR} ${outerR} 0 0 1 ${ox2} ${oy2}`);
      segments.push(`M ${ox1} ${oy1} L ${ix1} ${iy1}`);
      nodePositions.push({ x: ox1, y: oy1 });
    } else {
      // Inner arc + radial connector
      segments.push(`M ${ix1} ${iy1} A ${innerR} ${innerR} 0 0 1 ${ix2} ${iy2}`);
      segments.push(`M ${ox2} ${oy2} L ${ix2} ${iy2}`);
      nodePositions.push({ x: ix2, y: iy2 });
    }

    // Cross-connections every 3rd segment
    if (i % 3 === 0) {
      const midR = (outerR + innerR) / 2;
      const midAngle = (angle1 + angle2) / 2;
      const mx = cx + Math.cos(midAngle) * midR;
      const my = cy + Math.sin(midAngle) * midR;
      segments.push(`M ${ix1} ${iy1} L ${mx} ${my} L ${ox2} ${oy2}`);
      nodePositions.push({ x: mx, y: my });
    }
  }

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size, position: "absolute" }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        {/* Maze path segments */}
        {segments.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={gold}
            strokeWidth={0.8}
            strokeOpacity={0.35}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.05, ease: "easeOut" }}
          />
        ))}
        {/* Node dots at junction points */}
        {nodePositions.map((pos, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={1.5}
            fill={gold}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
        {/* Travelling pulse highlights */}
        {segments.filter((_, i) => i % 4 === 0).map((d, i) => (
          <motion.path
            key={`pulse-${i}`}
            d={d}
            stroke={gold}
            strokeWidth={1.5}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.3, 0],
              pathOffset: [0, 1],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Left ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      {/* Right ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pt-24 pb-16 lg:min-h-screen lg:py-24">

          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-6 font-body">
              // AI ENGINEER · FULL STACK DEVELOPER · RESEARCHER
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider leading-tight mb-6">
              <span className="text-glow-gold text-primary">ABISHEK </span>
              <span className="gradient-text">A</span>
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-10 leading-relaxed font-body mx-auto lg:mx-0">
              I turn ideas into intelligent products — from CNN-powered defect
              detectors to multi-agent AI systems. I ship fast, optimise hard,
              and stay sharp in the ring while I'm at it.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-3 text-xs tracking-widest border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 border-glow"
              >
                VIEW PROJECTS
              </motion.a>
              <motion.a
                href="/ABISHEK_A_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-3 text-xs tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 inline-flex items-center gap-2 border-glow"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                VIEW RESUME
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-3 text-xs tracking-widest border border-secondary text-secondary hover:bg-secondary/10 transition-colors duration-300"
              >
                CONTACT ME
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT: Portrait photo with maze-network decoration ── */}
          <motion.div
            className="flex-shrink-0 relative flex items-center justify-center h-[280px] sm:h-[340px] md:h-[420px] lg:h-auto w-full lg:w-auto"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* Outer maze network ring */}
            <NetworkMazeRing
              size={420}
              className="hidden md:block"
              duration={30}
            />
            <NetworkMazeRing
              size={260}
              className="md:hidden"
              duration={30}
            />

            {/* Inner maze network ring (counter-rotating) */}
            <NetworkMazeRing
              size={360}
              className="hidden md:block"
              duration={22}
              reverse
            />
            <NetworkMazeRing
              size={210}
              className="md:hidden"
              duration={22}
              reverse
            />

            {/* Gold glow backdrop */}
            <div
              className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full"
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
                  className="rounded-full overflow-hidden w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[290px] md:h-[290px]"
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

              {/* Floating gold node accents */}
              <motion.div
                className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-primary"
                style={{ boxShadow: "0 0 12px hsl(43 90% 55%)" }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-3 -left-4 w-2 h-2 rounded-full bg-primary"
                style={{ boxShadow: "0 0 10px hsl(43 90% 55% / 0.8)" }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/2 -right-6 w-1.5 h-1.5 rounded-full bg-primary"
                style={{ boxShadow: "0 0 8px hsl(43 90% 55% / 0.6)" }}
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
