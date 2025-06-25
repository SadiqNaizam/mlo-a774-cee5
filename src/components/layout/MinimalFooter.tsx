import React from 'react';

const MinimalFooter: React.FC = () => {
  console.log('MinimalFooter loaded');
  // You can personalize this message
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t border-pink-200/70 bg-background/50">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          For my one and only.
        </p>
      </div>
    </footer>
  );
};

export default MinimalFooter;