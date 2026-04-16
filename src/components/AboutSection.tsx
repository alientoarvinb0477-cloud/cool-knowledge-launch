import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Shield, label: "Licensed & Insured", value: "MEPFS" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Clock, label: "Availability", value: "Always Open" },
  { icon: Users, label: "Happy Clients", value: "500+" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
          About <span className="text-gradient">Cool Knowledge</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          From Concept to Completion — Your Partner in All Mechanical & MEPFS Solutions 🛠️. 
          We are a trusted mechanical contractor providing world-class services and solutions to our customers.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all"
          >
            <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="font-heading font-bold text-2xl text-foreground">{stat.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
