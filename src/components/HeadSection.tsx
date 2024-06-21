import React from 'react'
import AnimatedSection from './AnimatedText'

const HeadSection = () => {
  return (
    <div className="banner_gradient text-white overflow-hidden">
              <div className="container">
                {/* <div className="opacity: 1; transform: translate-x-10;"> */}
                <div className="section_one px-20">
                  <div className="animate-slide-up">

                  <AnimatedSection animationClass="animate-slide-up">
                      <div className="section_one_heading noto_font">
                        Work with the
                        <span className="font-bold uppercase ">
                          &nbsp;largest &amp; the best </span>
                        Web3 marketing team on the planet!</div>
                        </AnimatedSection>
                  </div>
                  <div className="pt-8 sm:pt-0">
                  <AnimatedSection animationClass="animate-slide-up">
                    <button className="section_one_button">
                      Get a proposal</button>
                      </AnimatedSection>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
  )
}

export default HeadSection