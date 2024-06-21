import React from 'react'
import AnimatedSection from './AnimatedText'

const OurDNASection = () => {
  return (
    <div className="bg-[#171717] overflow-hidden relative z-50">
              <div className="container sm:py-16 py-12 px-20">
                {/* <div className="opacity-1 transform none"> */}
                <AnimatedSection animationClass="animate-slide-up">

                  <div className="animate-slideup text-primary text-xl font-semibold">
                    Our DNA
                  </div>

                  </AnimatedSection>

                {/* </div> */}

                <div className="opacity-1 transform none">
                  <div className=" flex flex-col items-start justify-between py-6 sm:py-8">

                    <AnimatedSection animationClass="animate-slide-up">
                    <div className=" animate-slideup text-[24px] xl:text-[40px] font-normal md:font-bold text-white md:leading-[56px]">
                      “Creating a buzz and excitement over fake hype & shilling, documenting a moderate
                      growth with real numbers over hyper-inflated growth with bots and building a community
                      which incubates a brand is our way to success in Web3.0.”
                    </div>
                    </AnimatedSection>

                  </div>
                </div>

              </div>
            </div>
  )
}

export default OurDNASection