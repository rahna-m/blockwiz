import React from 'react'
import AnimatedSection from './AnimatedText'
import Image from "next/image"

const AdaswapSection = () => {
  return (
    <div>

              <div className="container text-white md:py-10 xl:py-12 py-1 ">
                <div className="flex flex-col items-center justify-center">
                  <AnimatedSection animationClass="animate-slide-up">
                    <div className="noto_font text-2xl sm:text-[48px] md:pb-5 pb-1 font-semibold text-center">Adaswap</div>
                    </AnimatedSection>

                    <AnimatedSection animationClass="animate-slide-up">

                  <div className=" text-sm sm:text-xl text-center text-primary tracking-[0.2rem] md:tracking-[0.28rem] ">CASE STUDY</div>

                  </AnimatedSection>

                </div>
                <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                  <AnimatedSection animationClass="animate-slide-up">
                  <div className="hidden sm:flex items-center justify-center">
                    <Image alt="casestudy"
                      src="/adaswap.png" width="1200" height="620"
                      decoding="async" data-nimg="1" loading="lazy"
                    // style="color:transparent" 
                    />
                  </div>
                  </AnimatedSection>
                </div>

                <div className="sm:hidden flex items-center justify-center pt-2 sm:pt-0">
                  <img alt="walken" src="/walken.svg" width="350" height="210" decoding="async"
                    data-nimg="1" loading="lazy"
                  // style="color:transparent" 
                  />
                </div>
                <div className="sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 space-y-5 sm:py-16 py-5 px-20 ">
                  <div>
                    <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                      <AnimatedSection animationClass="animate-slide-up">
                      <div className="text-base sm:text-2xl text-primary font-semibold">Challenge</div>
                      </AnimatedSection>
                    </div>
                    <div className="text-white text-xs sm:text-base font-normal space-y-5 pt-2 sm:pt-5 sm:max-w-sm ">
                      <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                        <AnimatedSection animationClass="animate-slide-up">
                        <p className="leading-[18px] md:leading-8 capitalize">Adaswap came to us a month before their IDO Launch. They wanted to kick-start their IDO Launch and increase the token price. Adaswap also requested a minimum of 15% ER on Telegram and 25k followers on Telegram &amp;Twitter to showcase to their investors.</p>
                        </AnimatedSection>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                      <AnimatedSection animationClass="animate-slide-up">
                      <div className="text-base sm:text-2xl text-primary font-semibold">Insights</div>
                      </AnimatedSection>
                    </div>
                    <div className="text-white text-xs sm:text-base font-normal space-y-5 pt-2 sm:pt-5 sm:max-w-sm">
                      <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                        <AnimatedSection animationClass="animate-slide-up">
                        <p className="leading-[18px] md:leading-8 capitalize">The Cardano community is smaller with lesser dapps, we leveraged the first mover
                          advantage to the market to help us sail through the IDO smoothly and create a #Fudless
                          Community.</p>
                          </AnimatedSection>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-20">
                  <div className="h-[1px] w-full bg-white bg-opacity-70 hidden sm:block "></div>
                </div>

                <div className=" sm:pt-16 px-20">
                  <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                    <AnimatedSection animationClass="animate-slide-up">
                    <div className="text-base sm:text-2xl text-primary font-semibold">Solution</div>
                    </AnimatedSection>
                  </div>
                  <div className="text-white text-xs sm:text-base font-normal space-y-5 pt-2 sm:pt-5 ">
                    <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                      <AnimatedSection animationClass="animate-slide-up">
                      <p className="leading-[18px] md:leading-8">With just 4 weeks to the launch, Blockwiz created a funneled marketing strategy to address the core issues like tackling FUD, building brand credibility and creating an active community devoid of bots.</p>
                      </AnimatedSection>
                    </div>
                    <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                      <AnimatedSection animationClass="animate-slide-up">
                      <p className="leading-[18px] md:leading-8 capitalize">In due time crunch, we had to go all guns blazing right from the start. So, for Pre-IDO hype, Adaswap collaborated with premium KOL Ciervo King, boosting awareness about the launch.</p>
                      </AnimatedSection>
                    </div>
                    <div className="opacity:0;transform:translateY(20px) translateZ(0)">
                      <AnimatedSection animationClass="animate-slide-up">
                      <p className="leading-[18px] md:leading-8 capitalize">While the KOL plug-in took care of the awareness aspect of the IDO, for the FUD around the brand, we set up not 1 but 3 AMA sessions to familiarize the community with the brand. Lastly, providing the community with a detailed roadmap and timely updates ensured we had an active community supporting us before the IDO.</p>
                      </AnimatedSection>
                    </div>
                  </div>
                </div>

              </div>


            </div>
  )
}

export default AdaswapSection