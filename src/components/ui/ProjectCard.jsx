import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 120;
  const isLong = project.description.length > MAX_LENGTH;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl glass-card h-full flex flex-col transition-all duration-500 hover:border-primary-500/30">
        {/* Gradient Top Bar */}
        <div
          className={`h-1.5 w-full bg-linear-to-r ${project.iconGradient}`}
        />

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-display font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-dark-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Thumbnail — after heading */}
          {project.thumbnail && !imgError ? (
            <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
              <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-950/40 to-transparent rounded-xl" />
            </div>
          ) : null}

          {/* Description with See More */}
          <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
            {isLong && !expanded
              ? project.description.slice(0, MAX_LENGTH) + "... "
              : project.description}
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors cursor-pointer ml-0.5"
              >
                {expanded ? "See less" : "See more"}
              </button>
            )}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-dark-800/80 text-dark-300 rounded-md border border-dark-700/50 hover:border-primary-500/30 hover:text-primary-400 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-dark-700/30">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="text-base" />
                <span>Code</span>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
        />
      </div>
    </motion.div>
  );
}
