import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-primary-400 via-accent-500 to-primary-400 origin-left z-100"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
