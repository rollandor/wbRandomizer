import React from 'react';

interface DiceProps {
  className?: string;
}

export const Dice: React.FC<DiceProps> = ({ className = '' }) => {
  return (
    <div className={`dice mb-8 flex justify-center ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20V20H4V4Z"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="6" cy="6" r="1" fill="#4F46E5" />
        <circle cx="12" cy="12" r="1" fill="#4F46E5" />
        <circle cx="18" cy="18" r="1" fill="#4F46E5" />
        <circle cx="18" cy="6" r="1" fill="#4F46E5" />
        <circle cx="6" cy="18" r="1" fill="#4F46E5" />
      </svg>
    </div>
  );
}; 

Dice.displayName = 'Dice';