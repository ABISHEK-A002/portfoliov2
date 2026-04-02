import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING");

  useEffect(() => {
    const phases = [
      { at: 0, text: "INITIALIZING" },
      { at: 20, text: "LOADING NEURAL SCHEMA..." },
      { at: 50, text: "CALIBRATING AI MODELS..." },
      { at: 75, text: "SYNCING PORTFOLIO DATA..." },
      { at: 95, text: "READY" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 2.0 + 1.5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        const currentPhase = [...phases].reverse().find((p) => next >= p.at);
        if (currentPhase) setPhase(currentPhase.text);
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background bg-grid"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-12 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border border-primary/50 rotate-45" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(43,90%,55%,0.6)]" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="font-display text-2xl md:text-3xl tracking-widest text-glow-gold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {phase}
        </motion.h1>

        <div className="w-64 md:w-80 mt-6">
          <div className="h-[2px] bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground font-body">
            <span>{Math.floor(progress)}%</span>
            <span>{progress < 100 ? "Loading..." : "Complete"}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
