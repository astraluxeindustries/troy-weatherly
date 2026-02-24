import React from 'react';
import { Section } from './ui/Section';
import { BUSINESS_INFO } from '../constants';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" light>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-100 relative z-10">
            {/* Placeholder for Desiree's actual photo. Using a professional business woman placeholder from Unsplash that matches description */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
              alt="Desiree Contessa" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 z-0" />
        </motion.div>

        {/* Text Column */}
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">About Desiree</span>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-8">
            {BUSINESS_INFO.name}, <br/>
            <span className="text-gray-400 italic text-3xl md:text-4xl">{BUSINESS_INFO.title}</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            {BUSINESS_INFO.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-gray-100 flex flex-wrap gap-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Experience</p>
              <p className="font-serif text-2xl text-secondary">20+ Years</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">NMLS #</p>
              <p className="font-serif text-2xl text-secondary">{BUSINESS_INFO.nmls}</p>
            </div>
             <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Education</p>
              <p className="font-serif text-2xl text-secondary">CWU Alumni</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};