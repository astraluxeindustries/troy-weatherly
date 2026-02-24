import React from 'react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="max-w-sm">
          <h3 className="font-serif text-xl font-bold text-secondary mb-4">{BUSINESS_INFO.company}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Providing comprehensive mortgage services with a commitment to integrity, education, and community relationships in Southern Utah.
          </p>
          <p className="text-xs text-gray-400">
            {BUSINESS_INFO.name} NMLS: {BUSINESS_INFO.nmls}<br/>
            Company NMLS: {BUSINESS_INFO.companyNmls}
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-6">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-secondary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-6">Legal</h4>
             <ul className="space-y-4">
               <li><a href="#" className="text-sm text-gray-600 hover:text-secondary">Privacy Policy</a></li>
               <li><a href="#" className="text-sm text-gray-600 hover:text-secondary">Terms of Service</a></li>
               <li><a href="#" className="text-sm text-gray-600 hover:text-secondary">NMLS Consumer Access</a></li>
             </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.company}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Equal Housing Lender</p>
      </div>
    </footer>
  );
};