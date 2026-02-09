import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { personalInfo } from "../../data/personal";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "../../utils/animations";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: SiCodeforces, href: personalInfo.social.codeforces, label: "Codeforces" },
  { icon: SiCodechef, href: personalInfo.social.codechef, label: "CodeChef" },
];

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Send auto-reply copy to the sender
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            to_email: formData.email,
            to_name: formData.name,
            subject: formData.subject || "Portfolio Contact",
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setSubmitted(true);
        setSending(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(() => {
        setSending(false);
        setError(true);
        setTimeout(() => setError(false), 4000);
      });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="// let's connect" />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-dark-400 leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing. Feel free to reach
              out!
            </motion.p>

            {/* Contact Details */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {contactInfo.map((info) => {
                const Wrapper = info.href ? "a" : "div";
                return (
                  <Wrapper
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                    {...(info.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <div className="w-10 h-10 rounded-xl bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 group-hover:text-primary-400 group-hover:border-primary-500/30 transition-all">
                      <info.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500 font-mono">
                        {info.label}
                      </p>
                      <p className="text-dark-200 text-sm group-hover:text-primary-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeInUp}>
              <p className="text-dark-500 text-sm font-mono mb-3">
                // find me on
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Download CV */}
            <motion.div variants={fadeInUp}>
              <Button
                variant="secondary"
                href={personalInfo.resumeUrl}
                download
                icon={<HiDownload />}
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-dark-500 font-mono mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white text-sm placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:bg-dark-800/80 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-dark-500 font-mono mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white text-sm placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:bg-dark-800/80 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-dark-500 font-mono mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white text-sm placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:bg-dark-800/80 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs text-dark-500 font-mono mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white text-sm placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:bg-dark-800/80 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted || sending}
                className={`w-full py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  submitted
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : error
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-linear-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                }`}
              >
                {submitted ? (
                  <>
                    <span>✓</span> Message Sent!
                  </>
                ) : error ? (
                  <>
                    <span>✕</span> Failed to send. Try again.
                  </>
                ) : sending ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
