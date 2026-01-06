import { motion } from "framer-motion";
import { Zap, Flame, Star, Shield } from "lucide-react";
import rock1 from "@/assets/rock1.jpg";

const features = [
  {
    icon: Zap,
    title: "Pure Energy",
    description: "200mg of natural caffeine to fuel your adventures",
  },
  {
    icon: Flame,
    title: "Zero Sugar",
    description: "All the power, none of the crash",
  },
  {
    icon: Star,
    title: "B-Vitamins",
    description: "Essential vitamins for peak performance",
  },
  {
    icon: Shield,
    title: "Natural Ingredients",
    description: "No artificial colors or preservatives",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={rock1}
          alt="Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text text-shadow-glow">About</span>{" "}
              <span className="text-foreground">Us</span>
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Why Azel!?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Born from the desire to create something truly exceptional, AZEL Energy represents 
              the perfect fusion of science and taste. We believe energy drinks should do more 
              than just wake you up—they should elevate your entire experience.
            </p>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Every can of AZEL is crafted with precision, using only the finest ingredients 
              sourced from around the world. Our unique formula delivers sustained energy 
              without the jitters or crash associated with other energy drinks.
            </p>

            <motion.a
              href="#"
              className="inline-block font-display text-lg px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors group border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/50 group-hover:to-secondary/30 transition-colors">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
