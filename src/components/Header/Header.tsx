import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      <p className="text-gray-600 mb-8">
        {description}
      </p>
    </>
  );
}; 

Header.displayName = 'Header';
