import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { skillCategories, competitiveProgramming } from "../../data/skills";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-150 h-100 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle title="Skills & Expertise" subtitle="// what I know" />

        {/* Competitive Programming Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {competitiveProgramming.map((cp, i) => (
            <motion.a
              key={cp.platform}
              href={cp.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass-card rounded-2xl p-6 text-center hover:border-primary-500/20 transition-all duration-300 block"
            >
              <div className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                {cp.platform}
              </div>
              <div className="text-primary-400 font-mono text-sm mb-3">
                {cp.rating}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-dark-500 text-xs group-hover:text-primary-400/60 transition-colors">
                <FaExternalLinkAlt size={10} />
                <span>View Profile</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* All Skills Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center bg-linear-to-br ${cat.color}`}
                >
                  <cat.icon className="text-white" size={16} />
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-200 hover:text-primary-400 hover:border-primary-500/30 transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
