import React from 'react'
import AnimatedSection from './AnimatedText'

const FudLessSection = () => {
  return (
    <div className="container sm:py-20 py-10 px-20">
              {/* <div className="opacity-1 transform translate-x-10"> */}
              <AnimatedSection animationClass="animate-slide-in-left">
              <div className="animate-slidein noto_font text-[24px] sm:text-[36px] text-white text-center pb-5 font-light">
                <span className=" text-primary">#FUDLess</span>Marketing
              </div>
              </AnimatedSection>

              {/* </div> */}

             

              <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 sm:gap-8">

              <AnimatedSection animationClass="animate-slide-up">

                <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
                  <div className="section_two_outerbox">
                    <div className="section_two_innerbox">
                      <div className="section_two_innertext_top">36+</div>
                      <div className="section_two_innertext_bottom">Months of experience</div>
                    </div>
                  </div>
                </div>

                </AnimatedSection>

                <AnimatedSection animationClass="animate-slide-up">

                <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
                  <div className="section_two_outerbox">
                    <div className="section_two_innerbox">
                      <div className="section_two_innertext_top">148+</div>
                      <div className="section_two_innertext_bottom"> IDO’s</div>
                    </div>
                  </div>
                </div>

                </AnimatedSection>

                <AnimatedSection animationClass="animate-slide-up">

                <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
                  <div className="section_two_outerbox">
                    <div className="section_two_innerbox">
                      <div className="section_two_innertext_top">132+ </div>
                      <div className="section_two_innertext_bottom">Mints</div>
                    </div>
                  </div>
                </div>

                </AnimatedSection>

                <AnimatedSection animationClass="animate-slide-up">

                <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
                  <div className="section_two_outerbox">
                    <div className="section_two_innerbox">
                      <div className="section_two_innertext_top">2</div>
                      <div className="section_two_innertext_bottom">Bear markets</div>
                    </div>
                  </div>
                </div>

                </AnimatedSection>

                <AnimatedSection animationClass="animate-slide-up">

                <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
                  <div className="section_two_outerbox" >
                    <div className="section_two_innerbox">
                      <div className="section_two_innertext_top">254+</div>
                      <div className="section_two_innertext_bottom">successful projects</div>
                    </div>
                  </div>
                </div>

                </AnimatedSection>
                <AnimatedSection animationClass="animate-slide-up">
                <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
                  <div className="section_two_outerbox">
                    <div className="section_two_innerbox">
                      <div className="section_two_innertext_top">1</div>
                      <div className="section_two_innertext_bottom">mission</div>
                    </div>
                  </div>
                </div>
                </AnimatedSection>
              </div>

            

            </div>
  )
}

export default FudLessSection