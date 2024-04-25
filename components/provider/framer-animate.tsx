"use client";

import FramerContainer from "./framer-container";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const FramerAnimate = ({ children, className }: Props) => {
  return (
    <FramerContainer
      initial={{
        y: 200,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </FramerContainer>
  );
};
