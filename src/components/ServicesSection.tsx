import { motion } from "framer-motion";
import serviceChilled from "@/assets/service-chilled.jpg";
import serviceAC from "@/assets/service-ac.jpg";
import serviceCold from "@/assets/service-cold.jpg";
import serviceFire from "@/assets/service-fire.jpg";

const services = [
  {
    img: serviceChilled,
    title: "Chilled Water System",
    desc: "High-efficiency chilled water systems for commercial and industrial cooling needs.",
  },
  {
    img: serviceAC,
    title: "Air Conditioning System",
    desc: "Complete HVAC solutions including split-type, cassette, and centralized AC systems.",
  },
  {
    img: serviceCold,
    title: "Cold Storage System",
    desc: "Walk-in freezers and refrigeration systems built for food service and industrial use.",
  },
  {
    img: serviceFire,
    title: "Fire Protection System",
    desc: "Fire detection, suppression, and sprinkler systems for total building safety.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Comprehensive MEPFS solutions tailored for every project scale.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:border-primary/30 transition-all"
          >
            <div className="overflow-hidden h-56">
              <img
                src={svc.img}
                alt={svc.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{svc.title}</h3>
              <p className="text-muted-foreground">{svc.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
