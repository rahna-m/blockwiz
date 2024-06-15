import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  children: React.ReactNode;
  animationClass: string;
}

const AnimatedSection: React.FC<AnimatedTextProps> = ({ children , animationClass }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    //  triggerOnce: true,
    threshold: 0.6, // Trigger when 50% of the component is in view
  });

  return (
    <div
      ref={ref}
      // className={`transition-transform duration-1000 ${
      //   inView ? 'opacity-100 translate-y-0' : 'opacity-1 translate-y-5'
      // }`}

      className={`transition duration-1000 ${inView ? animationClass : 'opacity-1'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;