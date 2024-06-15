import React from 'react';

type Logo = {
  src: string;
  alt: string;
};

interface ScrollingLogosProps {
  logos: Logo[];
  scrollDirection: string;
}

const ScrollingLogos: React.FC<ScrollingLogosProps> = ({ logos , scrollDirection}) => {
  return (
    <div className= {`${scrollDirection}`}>
      <div className="logos">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="logo-box">
            <img src={logo.src} alt={logo.alt} width="40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;