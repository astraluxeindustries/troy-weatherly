import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    outline: "border border-current text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-secondary hover:bg-gray-100 shadow-lg"
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, className: `${baseStyles} ${variants[variant]} ${className}` } : { onClick, className: `${baseStyles} ${variants[variant]} ${className}` };

  return (
    // @ts-ignore
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
};