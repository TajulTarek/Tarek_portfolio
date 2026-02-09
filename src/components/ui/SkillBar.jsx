import { motion } from "framer-motion";

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-dark-200 font-medium group-hover:text-primary-400 transition-colors">
          {name}
        </span>
        <span className="text-xs text-dark-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-linear-to-r from-primary-500 to-accent-500"
        />
      </div>
    </div>
  );
}
