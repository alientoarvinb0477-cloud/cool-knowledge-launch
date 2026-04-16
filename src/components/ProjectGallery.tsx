import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, label: "Mechanical Room Installation" },
  { img: p2, label: "Kitchen Ventilation" },
  { img: p3, label: "Rooftop HVAC System" },
  { img: p4, label: "Fire Alarm Control Panel" },
  { img: p5, label: "Plumbing & Sanitary" },
  { img: p6, label: "Electrical Panel" },
];

const ProjectGallery = () => (
  <section id="projects" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Project <span className="text-gradient">Accomplishments</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]"
          >
            <img
              src={project.img}
              alt={project.label}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base">
                {project.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectGallery;
