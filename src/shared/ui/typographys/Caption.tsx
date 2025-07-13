import React from 'react';

interface CaptionProps {
  children: React.ReactNode;
  variant?: 'semibold' | 'regular';
  className?: string;
}

const captionClassMap = {
  semibold: 'font-semibold text-[14px] leading-[1.4]',
  regular: 'font-normal text-[14px] leading-[1.4]',
};

export const Caption: React.FC<CaptionProps> = ({ children, variant = 'regular', className = '' }) => {
  return <div className={`${captionClassMap[variant]} ${className}`}>{children}</div>;
};
