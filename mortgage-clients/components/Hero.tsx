import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image - Reliable Stock Real Estate Home */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Home Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-white/90 tracking-[0.2em] uppercase text-sm font-semibold mb-6">
            Southern Utah's Premier Mortgage Lender
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-medium leading-tight mb-8">
            Turning your home <br />
            ownership dreams <br />
            <span className="italic text-gray-200">into reality.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-lg font-light leading-relaxed">
            With over 20 years of experience, Desiree Contessa provides the comprehensive service and education you deserve for your home buying journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="tel:+14258763025">
              Start Application
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" href="#contact">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};