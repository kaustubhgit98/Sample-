import { motion } from "framer-motion";
import label4 from "@/assets/label4.jpg";
import label5 from "@/assets/label5.jpg";

const FeaturedBanner = () => {
  return (
    <section id="flavors" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-deeper/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Try Out the{" "}
            <span className="text-brand-crimson">Pink</span> and{" "}
            <span className="text-foreground">Black</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our signature flavors that define the AZEL experience. Bold, intense, and unforgettable.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Pink Label */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-brand-crimson/40 blur-[80px] rounded-full group-hover:bg-brand-crimson/60 transition-colors" />
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-64 md:w-72 border border-brand-crimson/30">
              <img
                src={label4}
                alt="Pink AZEL"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-xl font-bold text-brand-crimson">PINK FURY</h3>
                <p className="font-body text-sm text-foreground/70">Berry Blast Energy</p>
              </div>
            </div>
          </motion.div>

          {/* Black Label */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-primary/40 blur-[80px] rounded-full group-hover:bg-primary/60 transition-colors" />
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-64 md:w-72 border border-primary/30">
              <img
                src={label5}
                alt="Black AZEL"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deeper/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-xl font-bold text-primary">DARK EDGE</h3>
                <p className="font-body text-sm text-foreground/70">Original Power</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-block font-display text-lg px-10 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 transition-opacity brand-glow"
          >
            EXPLORE ALL FLAVORS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
