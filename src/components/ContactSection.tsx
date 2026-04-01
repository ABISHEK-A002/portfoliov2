import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-[0.3em] text-secondary mb-2 font-body">05 //</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-glow-gold mb-6">GET IN TOUCH</h2>
          <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
            Whether you want to discuss AI, collaborate on a project, or just trade boxing tips — 
            my inbox is always open. Let's build something remarkable.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "EMAIL", value: "abishekarumugam2004@gmail.com", href: "mailto:abishekarumugam2004@gmail.com", external: false },
              { label: "GITHUB", value: "ABISHEK-A002", href: "https://github.com/ABISHEK-A002", external: true },
              { label: "LINKEDIN", value: "/abishekarumugam2004", href: "https://linkedin.com/in/abishekarumugam2004", external: true },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                whileHover={{ y: -2 }}
                className="p-4 border border-border/50 hover:border-primary/40 transition-all duration-300 group"
              >
                <span className="text-[10px] tracking-widest text-muted-foreground block mb-1">{link.label}</span>
                <span className="text-xs text-card-foreground group-hover:text-primary transition-colors break-all">{link.value}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:abishekarumugam2004@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 text-xs tracking-widest border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 border-glow"
          >
            SAY HELLO →
          </motion.a>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border/30 text-center">
          <p className="text-[10px] tracking-widest text-muted-foreground">
            DESIGNED & BUILT BY ABISHEK A · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
