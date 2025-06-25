import React from 'react';
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';
import InteractiveQuiz from '@/components/InteractiveQuiz';

/**
 * QuizPage: An interactive page that presents a fun quiz about the couple's relationship.
 * This page serves as a playful gate to the next, more emotional part of the journey.
 */
const QuizPage = () => {
  console.log('QuizPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-pink-50 font-sans">
      <MinimalHeader />
      
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* The InteractiveQuiz component is self-contained with its own logic, questions, and card styling. */}
        <InteractiveQuiz />
      </main>
      
      <MinimalFooter />
    </div>
  );
};

export default QuizPage;