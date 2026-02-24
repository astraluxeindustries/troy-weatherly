import React from 'react';
import { Section } from './ui/Section';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-premium">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
        <h2 className="font-serif text-4xl text-secondary mb-6">Comprehensive Mortgage Solutions</h2>
        <p className="text-gray-600">Patriot Home Mortgage is the only locally owned Mortgage Bank in Southern Utah, offering products and resources tailored to our community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="group bg-white p-10 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100"
          >
            <div className="w-12 h-1 bg-primary mb-8 group-hover:w-20 transition-all duration-300" />
            <h3 className="font-serif text-2xl text-secondary mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>
            <span className="text-primary text-sm font-bold uppercase tracking-wider group-hover:underline">Learn More</span>
          </div>
        ))}
      </div>
    </Section>
  );
};