import React from 'react';
import type { PropsWithChildren } from 'react';

interface LayoutProps {
  className?: string;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${className}`}>
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        {children}
      </div>
    </div>
  );
}; 

Layout.displayName = 'Layout';
