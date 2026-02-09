import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SkillBar from "../ui/SkillBar";
import { skillCategories, competitiveProgramming } from "../../data/skills";
import { staggerContainer, fadeInUp, scaleIn } from "../../utils/animations";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

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

        {/* Skills Section */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Tabs - Side */}
          <div className="lg:col-span-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex lg:flex-col gap-3"
            >
              {skillCategories.map((cat, i) => (
                <motion.button
                  key={cat.title}
                  variants={fadeInUp}
                  onClick={() => setActiveCategory(i)}
                  whileHover={{ x: 4 }}
                  className={`group relative flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 w-full cursor-pointer ${
                    activeCategory === i
                      ? "glass-card border-primary-500/30 text-white"
                      : "text-dark-400 hover:text-white hover:bg-dark-800/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-linear-to-br ${cat.color} ${
                      activeCategory === i ? "opacity-100" : "opacity-40 group-hover:opacity-70"
                    } transition-opacity`}
                  >
                    <cat.icon className="text-white" size={18} />
                  </div>
                  <span className="font-medium text-sm">{cat.title}</span>

                  {activeCategory === i && (
                    <motion.div
                      layoutId="skill-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-primary-400"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Skill Bars - Right */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center bg-linear-to-br ${skillCategories[activeCategory].color}`}
                  >
                    {(() => {
                      const Icon = skillCategories[activeCategory].icon;
                      return <Icon className="text-white" size={16} />;
                    })()}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>

                <div className="grid gap-5">
                  {skillCategories[activeCategory].skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
