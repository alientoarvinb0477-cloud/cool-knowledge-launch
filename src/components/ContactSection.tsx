import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-navy">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
          Get In <span className="text-sky-brand">Touch</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Call Us", value: "0995 792 8639" },
            { icon: Mail, label: "Email", value: "coolknowledge2015@gmail.com" },
            { icon: MapPin, label: "Location", value: "Bulacan, Philippines, 3020" },
            { icon: Clock, label: "Hours", value: "Always Open" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-navy-light rounded-2xl p-5"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                <p className="text-primary-foreground font-semibold">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl h-80 md:h-full min-h-[300px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123168.89547498788!2d120.87890645!3d14.7942336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0019846dc7b%3A0x9ed71bba2ac5a650!2sBulacan%2C%20Philippines!5e0!3m2!1sen!2sph!4v1697000000000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cool Knowledge Enterprises Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
