'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'figure';
};

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
