import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom Component Imports
import MinimalHeader from '@/components/layout/MinimalHeader';
import MinimalFooter from '@/components/layout/MinimalFooter';
import AnimatedTextReveal from '@/components/AnimatedTextReveal';

/**
 * TheQuestionPage is the final, climactic page of the proposal journey.
 * It uses timed animations to create a dramatic reveal.
 */
const TheQuestionPage: React.FC = () => {
  console.log('TheQuestionPage loaded');

  // State to control the sequential appearance of the page elements
  const [showQuestion, setShowQuestion] = useState(false);
  const [showLookUp, setShowLookUp] = useState(false);

  useEffect(() => {
    // A timer to reveal the main question after a pause for suspense.
    const questionTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 2000); // 2-second delay before the question appears

    // A timer to reveal the final instruction. This should be timed to appear
    // after the main question has finished animating.
    const lookUpTimer = setTimeout(() => {
      setShowLookUp(true);
    }, 5500); // 2s initial delay + ~3.5s for the text animation

    // Cleanup timers on component unmount to prevent memory leaks
    return () => {
      clearTimeout(questionTimer);
      clearTimeout(lookUpTimer);
    };
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-pink-50 font-sans text-center overflow-hidden">
      <MinimalHeader />

      <main className="flex-grow flex flex-col justify-center items-center p-4 w-full">
        {/* A container with a fixed height to prevent the layout from shifting when the text appears */}
        <div className="h-48 flex flex-col justify-center items-center">
          {showQuestion && (
            <AnimatedTextReveal
              text="Will you marry me?"
              className="text-5xl md:text-7xl font-serif text-slate-800"
              stagger={0.1} // Slower stagger for a more dramatic effect
              delay={0.5}   // A small delay after the component is rendered
            />
          )}
        </div>

        {/* A container for the final instruction to prevent layout shift */}
        <div className="h-24 mt-8">
          {showLookUp && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-2xl md:text-3xl text-slate-600 italic"
            >
              Now, look up...
            </motion.p>
          )}
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default TheQuestionPage;