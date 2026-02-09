import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaTrophy } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/personal";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "../../utils/animations";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle title="About Me" subtitle="// who am I" />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — Visual Card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-3xl border border-dashed border-primary-500/20"
              />
              
              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 text-center">
                {/* Avatar Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl shadow-primary-500/20">
                  <img src="/images/profile2.png" alt={personalInfo.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-primary-400 text-sm font-mono mb-4">
                  {personalInfo.title}
                </p>

                {/* Quick Info */}
                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center justify-center gap-2 text-dark-400">
                    <FaGraduationCap className="text-primary-500" />
                    <span>{personalInfo.universityShort}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-dark-400">
                    <FaMapMarkerAlt className="text-primary-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-dark-400">
                    <FaCode className="text-primary-500" />
                    <span>Codeforces Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-dark-300 text-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Education Details */}
            <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaGraduationCap className="text-primary-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{personalInfo.degree}</h4>
                  <p className="text-dark-400 text-sm">{personalInfo.university}</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="text-primary-400 font-mono text-sm">
                      CGPA: {personalInfo.cgpa}
                    </span>
                    <span className="text-dark-500 text-sm">
                      {personalInfo.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
