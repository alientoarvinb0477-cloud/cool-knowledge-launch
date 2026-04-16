import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  { img: hero1, title: "Chilled Water Systems", sub: "Precision cooling for commercial facilities" },
  { img: hero2, title: "Fire Protection", sub: "Complete detection & suppression systems" },
  { img: hero3, title: "Ducting & Ventilation", sub: "Industrial-grade air distribution" },
  { img: hero4, title: "Gas Line Systems", sub: "Safe and reliable gas installations" },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Increased to 3000ms (3 seconds)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[80vh] md:h-screen overflow-hidden pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Adjusted duration to 1.2s for a professional feel over a 3s total cycle
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12">
        <div className="container mx-auto">
          <motion.p
            key={`title-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary font-heading font-bold text-3xl md:text-6xl mb-3"
          >
            {slides[current].title}
          </motion.p>
          <motion.p
            key={`sub-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-primary-foreground/80 text-lg md:text-2xl mb-6 font-light"
          >
            {slides[current].sub}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-primary-foreground font-heading font-semibold text-xl md:text-3xl"
          >
            Keeping It Cool, Building It Right 💪
          </motion.p>
        </div>
      </div>

      {/* Aligned Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-500 ease-in-out ${
              i === current 
                ? "bg-primary w-10 opacity-100" 
                : "bg-white/40 w-3 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
