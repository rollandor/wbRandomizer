import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  className?: string;
  isGenerating?: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  className = '',
  isGenerating = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button-glow w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
        isGenerating ? 'animate-ping' : 'pulse'
      } ${className}`}
    >
      Generate WB's item
    </button>
  );
}; 

GenerateButton.displayName = 'GenerateButton';
