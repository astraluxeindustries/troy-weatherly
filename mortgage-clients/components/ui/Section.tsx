import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, light = true }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 ${light ? 'bg-white' : 'bg-premium'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};