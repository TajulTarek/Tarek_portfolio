import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";
import { personalInfo } from "../../data/personal";

const socialLinks = [
  { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: SiCodeforces, href: personalInfo.social.codeforces, label: "Codeforces" },
  { icon: SiCodechef, href: personalInfo.social.codechef, label: "CodeChef" },
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-dark-800/50">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-t from-dark-950 via-dark-900/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display font-bold text-2xl cursor-pointer"
          >
            <span className="text-gradient">T</span>
            <span className="text-white">arek</span>
            <span className="text-primary-400">.</span>
          </motion.button>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-dark-700/50 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-500">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Tajul Islam Tarek. Built with
            <FaHeart className="text-red-400 text-xs" /> and
            <FaCode className="text-primary-400 text-xs" />
          </p>
          <p className="font-mono text-xs text-dark-600">
            React • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
