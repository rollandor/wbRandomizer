import React from 'react';

interface NumberDisplayProps {
  value: string | number;
  className?: string;
}

export const NumberDisplay: React.FC<NumberDisplayProps> = ({ value, className = '' }) => {
  return (
    <div
      className={`number-display text-4xl md:text-5xl font-bold text-indigo-600 mb-8 h-16 flex items-center justify-center ${className}`}
    >
      {value}
    </div>
  );
}; 

NumberDisplay.displayName = 'NumberDisplay';
