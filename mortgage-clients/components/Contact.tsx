import React from 'react';
import { Section } from './ui/Section';
import { BUSINESS_INFO } from '../constants';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-secondary text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Start your journey today.</h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Whether you are buying your first home or refinancing, I am here to help guide you through the process.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Office Address</p>
              <p className="text-xl font-serif">{BUSINESS_INFO.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Contact</p>
              <p className="text-xl font-serif hover:text-primary transition-colors">
                <a href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a>
              </p>
              <p className="text-lg mt-1 text-gray-300 hover:text-primary transition-colors break-words">
                <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
              </p>
            </div>
             <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Hours</p>
              <p className="text-lg text-gray-300">{BUSINESS_INFO.hours}</p>
            </div>
            
            <div className="pt-6">
              <Button href={`mailto:${BUSINESS_INFO.email}`} variant="primary">
                Send Message
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-96 lg:h-auto min-h-[400px] bg-gray-800 rounded-sm overflow-hidden">
           {/* Static Map Image using Picsum for location approximation vibe or just a generic map UI */}
           <img 
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2662&auto=format&fit=crop"
            alt="St George Utah Map Location"
            className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
           />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-4 shadow-xl">
                 <p className="text-secondary font-bold text-xs uppercase tracking-widest text-center">Patriot Home<br/>Mortgage</p>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};