import React from 'react';
import { Section } from './ui/Section';
import { REVIEWS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <Section id="reviews" light>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
           <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Testimonials</span>
           <h2 className="font-serif text-4xl text-secondary mb-6">What clients say</h2>
           <p className="text-gray-600 mb-8">
             Building relationships is at the core of what we do. Here is what some of our valued clients have to say about their experience.
           </p>
           <div className="flex items-center gap-2">
             <span className="text-3xl font-bold text-secondary">5.0</span>
             <div className="flex text-yellow-500 text-xl">★★★★★</div>
           </div>
           <p className="text-sm text-gray-500 mt-2">Based on Google Reviews</p>
        </div>

        <div className="md:w-2/3 grid gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-sm">
               <div className="flex text-yellow-500 text-sm mb-4">★★★★★</div>
               <p className="font-serif text-xl text-secondary italic mb-6">"{review.text}"</p>
               <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                 <span className="font-bold text-sm uppercase tracking-wide text-secondary">{review.author}</span>
                 <span className="text-xs text-gray-400">via {review.source}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};