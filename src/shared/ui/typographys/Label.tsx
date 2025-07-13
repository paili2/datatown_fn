import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  variant?: 'semibold' | 'regular';
  className?: string;
}

const labelClassMap = {
  semibold: 'font-semibold text-[12px] leading-[1.3]',
  regular: 'font-normal text-[12px] leading-[1.3]',
};

export const Label: React.FC<LabelProps> = ({ children, variant = 'regular', className = '' }) => {
  return <div className={`${labelClassMap[variant]} ${className}`}>{children}</div>;
};
