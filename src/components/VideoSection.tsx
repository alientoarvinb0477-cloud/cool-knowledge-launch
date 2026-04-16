import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
];

const VideoSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Project <span className="text-gradient">Walk-throughs</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            <iframe
              key={current}
              src={`${videos[current]}?autoplay=0&rel=0`}
              title="Project video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
