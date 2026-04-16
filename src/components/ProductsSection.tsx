import { motion } from "framer-motion";
import dehumidifier from "@/assets/product-dehumidifier.jpg";
import purifier from "@/assets/product-purifier.jpg";

const products = [
  {
    img: dehumidifier,
    title: "Ceiling Dehumidifiers",
    subtitle: "DONE, DOF & CLA Series",
    desc: "High-performance ceiling-mounted dehumidifiers designed for commercial spaces. Efficient moisture control for optimal indoor air quality.",
  },
  {
    img: purifier,
    title: "Air Purifiers",
    subtitle: "AM900 / AM1000",
    desc: "Industrial-grade air purification systems with HEPA filtration for clean, healthy environments in offices and facilities.",
  },
];

const ProductsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          Product <span className="text-gradient">Showcase</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all"
          >
            <div className="h-56 bg-muted flex items-center justify-center overflow-hidden">
              <img src={product.img} alt={product.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl text-foreground">{product.title}</h3>
              <p className="text-primary font-semibold text-sm mb-2">{product.subtitle}</p>
              <p className="text-muted-foreground text-sm">{product.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
