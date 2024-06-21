import React from 'react'
import AnimatedSection from './AnimatedText'
import ServiceSlider from './Slider'

const OurServiceSection = () => {
  return (
    
    <div className="relative pb-10">
              <div className="relative z-50 container md:py-10 py-5">
                <div className=" transform none;">
                <AnimatedSection animationClass="animate-slide-in-left">
                  <div className="animate-slidein noto_font tracking-wide text-[#FFFDFF] md:text-[40px] text-[32px] font-normal text-center">Our Services</div>
                  </AnimatedSection>
                </div>

                <ServiceSlider />
              </div>
            </div>
  )
}

export default OurServiceSection