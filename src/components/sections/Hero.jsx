import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { HiDownload, HiMail } from "react-icons/hi";
import Button from "../ui/Button";
import { personalInfo } from "../../data/personal";
import { staggerContainer, fadeInUp } from "../../utils/animations";

const roles = personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Code Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] text-dark-700/30 font-mono text-sm hidden lg:block select-none"
        >
          {"{ code }"}
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[10%] text-dark-700/30 font-mono text-sm hidden lg:block select-none"
        >
          {"<solve />"}
        </motion.div>
        <motion.div
          animate={{ y: [-15, 5, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[8%] text-dark-700/20 font-mono text-xs hidden lg:block select-none"
        >
          {"while(true) { learn(); }"}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-primary-400 font-mono text-sm md:text-base mb-4 tracking-wider"
        >
          {"<hello world />"}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight"
        >
          <span className="text-white">I'm </span>
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          variants={fadeInUp}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <span className="text-lg md:text-2xl text-dark-300 font-light">
            {text}
          </span>
          <span className="text-primary-400 text-lg md:text-2xl animate-pulse ml-0.5">
            |
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-dark-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CSE student at{" "}
          <span className="text-dark-200">{personalInfo.universityShort}</span>{" "}
          • Codeforces{" "}
          <span className="text-primary-400 font-medium">Expert</span> •
          Building solutions with code & creativity
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            variant="primary"
            icon={<HiMail />}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </Button>
          <Button
            variant="secondary"
            icon={<HiDownload />}
            href={personalInfo.resumeUrl}
            download
          >
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
            { icon: FaLinkedinIn, href: personalInfo.social.linkedin, label: "LinkedIn" },
            { icon: SiCodeforces, href: personalInfo.social.codeforces, label: "Codeforces" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-xl border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <FaArrowDown size={12} />
        </motion.div>
      </motion.button>
    </section>
  );
}
