import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignClass}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 w-20 bg-linear-to-r from-primary-400 to-accent-500 rounded-full mt-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
