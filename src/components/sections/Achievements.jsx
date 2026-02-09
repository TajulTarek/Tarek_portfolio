import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import AchievementCard from "../ui/AchievementCard";
import { achievements, competitiveHighlights } from "../../data/achievements";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-125 h-100 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Achievements"
          subtitle="// milestones & recognition"
        />

        {/* Competitive Programming Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <FaTrophy className="text-primary-400" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-white">
              Competitive Programming
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competitiveHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card rounded-xl p-5 hover:border-primary-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm font-medium group-hover:text-primary-400 transition-colors leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-dark-500 text-xs mt-1">
                          {item.detail}
                        </p>
                      </div>
                      <FaExternalLinkAlt className="text-dark-600 group-hover:text-primary-400/60 text-xs mt-1 shrink-0 transition-colors" />
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-xl p-5 hover:border-primary-500/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="text-white text-sm font-medium leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-dark-500 text-xs mt-1">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathon / Competition Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
        >
          {achievements.map((achievement, i) => (
            <AchievementCard
              key={achievement.event}
              achievement={achievement}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
