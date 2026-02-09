import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects, projectFilters } from "../../data/projects";
import { staggerContainer, fadeInUp } from "../../utils/animations";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 -left-32 w-125 h-125 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" subtitle="// what I've built" />

        {/* Filters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {projectFilters.map((filter) => (
            <motion.button
              key={filter.value}
              variants={fadeInUp}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-primary-500/15 text-primary-400 border border-primary-500/30"
                  : "text-dark-400 border border-dark-700/30 hover:text-white hover:border-dark-600/50"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-dark-500"
          >
            <p className="text-lg">No projects in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
