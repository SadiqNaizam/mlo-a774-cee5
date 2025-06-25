import React from 'react';
import { Heart } from 'lucide-react';

const MinimalHeader: React.FC = () => {
  console.log('MinimalHeader loaded');
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-pink-200/70 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3 text-pink-500">
          <Heart className="h-5 w-5 fill-current" />
          <h1 className="text-xl font-semibold tracking-wider text-slate-700">
            ProposeMate
          </h1>
        </div>
      </div>
    </header>
  );
};

export default MinimalHeader;