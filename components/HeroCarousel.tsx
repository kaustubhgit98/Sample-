import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import can1 from "@/assets/can1.png";
import can2 from "@/assets/can2.png";
import can3 from "@/assets/can3.png";
import can4 from "@/assets/can4.png";
import can5 from "@/assets/can5.png";

const cans = [can1, can2, can3, can4, can5];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cans.length - 1 ? 0 : prev + 1));
  };

  const getTransform = (index: number) => {
    const diff = index - activeIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        z: 100,
        opacity: 1,
      };
    } else if (absIndex === 1) {
      return {
        x: diff * 200,
        scale: 0.85,
        rotateY: diff * -20,
        z: 50,
        opacity: 0.9,
      };
    } else if (absIndex === 2) {
      return {
        x: diff * 300,
        scale: 0.7,
        rotateY: diff * -30,
        z: 0,
        opacity: 0.7,
      };
    } else {
      return {
        x: diff * 400,
        scale: 0.5,
        rotateY: diff * -40,
        z: -50,
        opacity: 0,
      };
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Title */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold gradient-text text-shadow-glow mb-4">
          AZEL ENERGY
        </h1>
        <p className="font-body text-xl md:text-2xl text-muted-foreground">
          Unleash Your Power
        </p>
      </motion.div>

      {/* 3D Carousel */}
      <div className="relative w-full h-[50vh] perspective-500 preserve-3d">
        <div className="absolute inset-0 flex items-center justify-center">
          {cans.map((can, index) => {
            const transform = getTransform(index);
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                initial={false}
                animate={{
                  x: transform.x,
                  scale: transform.scale,
                  rotateY: transform.rotateY,
                  zIndex: 10 - Math.abs(index - activeIndex),
                  opacity: transform.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                onClick={() => setActiveIndex(index)}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="reflection">
                  <img
                    src={can}
                    alt={`AZEL Can ${index + 1}`}
                    className="h-[300px] md:h-[400px] w-auto object-contain drop-shadow-2xl"
                    style={{
                      filter: index === activeIndex 
                        ? "drop-shadow(0 0 40px hsl(0 85% 55% / 0.6))" 
                        : "none",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="relative z-20 flex gap-6 mt-8">
        <motion.button
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="text-primary" size={24} />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="text-primary" size={24} />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 mt-6">
        {cans.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex 
                ? "bg-gradient-to-r from-primary to-secondary w-8" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
