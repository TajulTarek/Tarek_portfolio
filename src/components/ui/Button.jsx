import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  download,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-linear-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
    secondary:
      "border border-dark-600 text-dark-200 hover:border-primary-500/50 hover:text-primary-400 hover:bg-primary-500/5",
    ghost:
      "text-dark-300 hover:text-primary-400 hover:bg-dark-800/50",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      download={download}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </Tag>
  );
}
