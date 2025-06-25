import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}

const AnimatedTextReveal: React.FC<AnimatedTextRevealProps> = ({
  text,
  className,
  stagger = 0.08,
  delay = 0,
}) => {
  console.log('AnimatedTextReveal loaded');

  const words = text.split(' ').map((word) => [...word, '\u00A0']); // Add a non-breaking space after each word

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn('flex justify-center items-center flex-wrap', className)}
      aria-label={text}
    >
      {words.flat().map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextReveal;