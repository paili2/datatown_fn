import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

const headingClassMap = {
  h1: 'font-bold text-[60px] leading-[1.2]',
  h2: 'font-semibold text-[48px] leading-[1.2]',
  h3: 'font-semibold text-[40px] leading-[1.2]',
};

export const Heading: React.FC<HeadingProps> = ({ children, as = 'h1', className = '' }) => {
  const Component = as;
  return <Component className={`${headingClassMap[as]} ${className}`}>{children}</Component>;
};
