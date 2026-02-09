import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaImages } from "react-icons/fa";

export default function AchievementCard({ achievement, index }) {
  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbError, setThumbError] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());

  const images = achievement.images || [];
  const thumbnail = images[0]?.src;
  const hasMultiple = images.length > 1;

  const goNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

  const goPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!showGallery) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setShowGallery(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showGallery, goNext, goPrev]);

  // Lock body scroll when gallery is open
  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showGallery]);

  const handleImageError = (idx) => {
    setFailedImages((prev) => new Set(prev).add(idx));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="group relative glass-card rounded-2xl overflow-hidden hover:border-primary-500/20 transition-all duration-300"
      >
        {/* Thumbnail */}
        {thumbnail && (
          <div
            className="relative h-44 w-full overflow-hidden cursor-pointer"
            onClick={() => {
              setActiveIndex(0);
              setShowGallery(true);
            }}
          >
            {!thumbError ? (
              <img
                src={thumbnail}
                alt={`${achievement.event} team photo`}
                onError={() => setThumbError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className={`w-full h-full bg-linear-to-br ${achievement.color} opacity-20 flex items-center justify-center`}
              >
                <span className="text-5xl opacity-60">{achievement.icon}</span>
              </div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-dark-950/90 via-dark-950/30 to-transparent" />

            {/* Badge on image */}
            <div className="absolute top-3 left-3">
              <div
                className={`inline-flex items-center gap-1.5 text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-linear-to-r ${achievement.color} text-white shadow-lg`}
              >
                <span>{achievement.icon}</span>
                {achievement.title}
              </div>
            </div>

            {/* Photo count badge */}
            {hasMultiple && (
              <div className="absolute top-3 right-3">
                <div className="inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-lg bg-dark-950/60 text-dark-200 backdrop-blur-sm border border-white/10">
                  <FaImages size={10} />
                  {images.length}
                </div>
              </div>
            )}

            {/* View hint */}
            {!thumbError && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1.5 rounded-lg bg-dark-950/70 text-white text-xs font-medium backdrop-blur-sm border border-white/10">
                  {hasMultiple ? `View ${images.length} photos` : "Click to view"}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          {!thumbnail && (
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{achievement.icon}</span>
              <div
                className={`inline-block text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-linear-to-r ${achievement.color} text-white`}
              >
                {achievement.title}
              </div>
            </div>
          )}
          <h4 className="text-white font-medium text-sm leading-tight">
            {achievement.event}
          </h4>
          {achievement.detail && (
            <p className="text-dark-500 text-xs mt-1.5">{achievement.detail}</p>
          )}
        </div>
      </motion.div>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {showGallery && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-dark-950/95 backdrop-blur-md p-4"
            onClick={() => setShowGallery(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all cursor-pointer z-10"
            >
              <HiX size={20} />
            </button>

            {/* Main Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-4xl max-h-[70vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {!failedImages.has(activeIndex) ? (
                <img
                  src={images[activeIndex].src}
                  alt={`${achievement.event} — ${images[activeIndex].label}`}
                  onError={() => handleImageError(activeIndex)}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                />
              ) : (
                <div
                  className={`w-full h-80 bg-linear-to-br ${achievement.color} opacity-20 flex items-center justify-center rounded-2xl`}
                >
                  <span className="text-6xl opacity-60">{achievement.icon}</span>
                </div>
              )}

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-dark-950/90 to-transparent rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`inline-flex items-center gap-1.5 text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-linear-to-r ${achievement.color} text-white`}
                      >
                        <span>{achievement.icon}</span>
                        {achievement.title}
                      </div>
                      <span className="text-dark-400 text-xs font-mono">
                        {images[activeIndex].label}
                      </span>
                    </div>
                    <h4 className="text-white font-medium mt-1.5 text-sm">
                      {achievement.event}
                    </h4>
                  </div>
                  <span className="text-dark-500 text-xs font-mono">
                    {activeIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            {hasMultiple && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-dark-800/60 border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 hover:bg-dark-800/90 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <HiChevronLeft size={22} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-dark-800/60 border border-dark-700/50 flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 hover:bg-dark-800/90 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <HiChevronRight size={22} />
                </button>
              </>
            )}

            {/* Thumbnail Strip */}
            {hasMultiple && (
              <div
                className="flex items-center gap-2 mt-4"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      i === activeIndex
                        ? "border-primary-400 shadow-lg shadow-primary-500/20"
                        : "border-dark-700/50 opacity-50 hover:opacity-80"
                    }`}
                  >
                    {!failedImages.has(i) ? (
                      <img
                        src={img.src}
                        alt={img.label}
                        onError={() => handleImageError(i)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-linear-to-br ${achievement.color} opacity-30 flex items-center justify-center`}
                      >
                        <span className="text-xs">{achievement.icon}</span>
                      </div>
                    )}
                    {/* Label tooltip */}
                    <div className="absolute inset-x-0 bottom-0 bg-dark-950/70 text-center">
                      <span className="text-[9px] text-dark-200 font-mono leading-tight">
                        {img.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
