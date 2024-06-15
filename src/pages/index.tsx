"use client"
import React from 'react';

import ServiceSlider from "@/components/Slider";
import MainLayout from "@/layouts/layout";
import Image from "next/image"
import AnimatedSection from '@/components/AnimatedText';
import ScrollingLogos from '@/components/ScrollingLogos';
import TestimonialSlider from '@/components/Testimonial';


const logos = [
  { src: '/img1.png', alt: 'Logo 1' },
  { src: '/img2.png', alt: 'Logo 2' },
  { src: '/img3.png', alt: 'Logo 3' },
  { src: '/img4.png', alt: 'Logo 4' },
  { src: '/img5.png', alt: 'Logo 5' },
  { src: '/img6.png', alt: 'Logo 6' },
  { src: '/img7.png', alt: 'Logo 7' },
  { src: '/img8.png', alt: 'Logo 8' },
  // Add more logos as needed
];



export default function Home() {
 
  return (
    <>
      <MainLayout>
        <div className="overflow-x-hidden">
          <div className="bg-bgmain">

            {/* Section 1 */}
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

            {/* Section 2 */}
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

            {/* Section 3 */}
            <div className="relative px-20">
              <div className="opacity: 1; transform: none;">
                <div className="flex items-center justify-center py-5 sm:py-10 container z-50 relative ">
                  <div className="w-full h-[273px] md:h-[355px] lg:h-[465px] xl:h-[630px] overflow-hidden rounded-3xl ">
                    <div className="w-full h-full">
                      <div className="w-full h-full">
                        <iframe frameBorder="0"
                          // allowFullScreen= "true"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          // referrerpolicy="strict-origin-when-cross-origin" 
                          title="YouTube video player"
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/null?autoplay=0&amp;mute=1&amp;controls=1&amp;origin=https%3A%2F%2Fblockwiz-web3-agency.netlify.app&amp;playsinline=1&amp;listType=playlist&amp;list=PL6EwHw-dOS1zfO5JjBjx6UXuNOTXYJbpQ&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=5" id="widget6">
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 - horizondal scroll */}

            <div className='blur-left-right px-20'>
            <div className="container sm:py-20 py-5 ">
              {/* <div className="opacity-1 transform none" > */}
                {/* style="opacity: 1; transform: none;" */}
             
                 <AnimatedSection animationClass="animate-slide-in-left">
                <div className="noto_font text-[30px] sm:text-[40px] text-white text-center pb-5 font-normal">Some Web3 projects we have helped moon 🚀</div>
                </AnimatedSection>
                </div>
              <div className="py-6">
                {/* <div className=" space-y-5 overflow-hidden  marquee-container"> */}

                <div className='pb-5'>
                <ScrollingLogos logos={logos} scrollDirection="scroll-horizontal" />
                </div>
                <div>
                <ScrollingLogos logos={logos}  scrollDirection="scroll-horizontal reverse"/>
                </div>

               

              

                  {/* <div className="flex animate-loopscroll items-center justify-center space-x-6 ">
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <Image alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3 ">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      //  style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      //  style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      //  style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      //  style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      //  style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="pr-5"><div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      //  style="color: transparent;"
                      />
                    </div>
                    </div>
                  </div>


                  <div className="flex flex-row items-center justify-center space-x-6 ">
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3 ">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                      <img alt=""
                        src="/img1.png"
                        width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                      // style="color: transparent;"
                      /></div>
                    <div className="pr-5">
                      <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                        <img alt=""
                          src="/img1.png"
                          width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                        // style="color: transparent;"
                        /></div>
                    </div>
                  </div> */}
                {/* </div> */}
              {/* </div> */}

            </div>

            </div>

            {/* Section 5 - Our Services */}
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


            {/* Section 6 - Our DNA */}

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


            {/* Section 7 */}

            <div className="relative">
              <div className="container lg:pt-20 md:pt-16 overflow-hidden relative z-50">
                <div className="grid xl:grid-cols-2 sm:gap-5 gap-5 xl:content-start xl:justify-items-start items-center md:justify-items-center md:content-center ">
                  {/* <div className="w-440px h-440px hidden md:block"> */}
                  {/* <div className="CircularProgressbar"> */}

                  {/* <div className="absolute w-100% h-100% m-t-100% flex flex-column justify-content-center align-center">
                        <div className="font-size-12px m-top-5px"> */}





                  <div className="w-full flex items-center justify-center">
                    <div className="noto_font text-primary text-[56px] font-semibold">
                      <div className=" transition-all ease-in-out duration-500  cursor-pointer opacity-1 ">
                        Loyality
                      </div>
                    </div>
                  </div>


                  {/* </div>

                      </div> */}
                  {/* </div> */}

                  {/* </div> */}
                  <div className="flex items-center justify-center space-x-2 pt-10">

                    <div >
                      <div className="noto_font md:block hidden text-white text-[32px] sm:text-[40px] md:text-center pb-2 font-semibold">
                        Our Approach
                      </div>
                      <div className="w-full md:w-[560px] md:h-auto h-[550px] relative pt-3 ">
                        <div className="space-y-5">

                          {/* <div className="opacity-0 transform translateX(10px) translateZ(0)"> */}
                          <div className="text-white md:text-[32px] text-[20px] font-normal text-start md:text-center capitalize  leading-[36px]">
                            <span className="text-primary font-semibold">The awareness phase </span>
                            is where <br className="hidden md:block" />
                            we help brands share their story,
                            <br className="hidden md:block" />
                            mission, and vision with
                            <br className="hidden md:block" />
                            audiences in order to build a
                            <br className="hidden md:block" />connection by
                          </div>
                        </div>
                        <div className="md:h-[320px] capitalize ">
                          <ul className="text-[#DDDDDD] text-base md:text-xl list-outside list-disc  font-light pl-5 space-y-6 pt-5">
                            <li>Building excitement for the upcoming launch by sharing teasers and sneak peeks of your Web3 product.</li>
                            <li>Write about the brand’s mission and vision and share how the holders will be an essential part of it.</li>
                            <li>Share the unique selling proposition — what makes your project and community stand out? </li>
                          </ul>
                        </div>

                      </div>
                      {/* </div> */}

                    </div>

                  </div>
                </div>
              </div>

            </div>


            {/* Section 8 */}
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


            {/* Section 9 */}

           <TestimonialSlider/>

            {/* Section 10 */}

            <div className=" px-20 sm:py-16 py-12">
              {/* <div className="xl:h-[50px] md:h-[70px] h-[50px] w-20 bg-[#0F0F11]"></div> */}
              <div className="relative z-50 container overflow-hidden text-white py-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex relative md:top-[20%] ">
                    <div className="noto_font font-semibold xl:text-[48px] text-[32px] text-3xl lg:pr-12 leading-[36px] sm:leading-[54px]">
                      Talk to a Web3 strategist today and get featured as our next big
                      <span className="text-primary"> SUCCESS! </span>
                    </div>
                  </div>
                  <div>

                  <iframe src="https://calendly.com/blockwiz-client-success-team/let-s-talk-blockwiz-client-success?embed_domain=blockwiz-web3-agency.netlify.app&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1" 
                  width="100%" height="100%"  title="Select a Date &amp; Time - Calendly"></iframe>
                    {/* <div className="calendly-inline-widget min-w-80 h-1/2"
                      data-url="https://calendly.com/blockwiz-client-success-team/let-s-talk-blockwiz-client-success?hide_event_type_details=1&hide_gdpr_banner=1"
                    // style="min-width:320px;height:630px;"
                    ></div> */}
                    {/* <script type="text/javascript" 
                                        src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 11 */}

            <div className="relative bg-[#0F0F11] sm:pb-20 text-[#FFFDFF] text-opacity-80 overflow-x-hidden px-20">
              <div className="relative z-50 container hidden sm:block ">
                <div className="flex flex-row sm:space-x-0 space-x-2 sm:grid xl:grid-cols-2 md:grid-cols-3 sm:gap-16 gap-0 sm:py-16 py-5 text-[#FFFDFF] ">
                  <div className="xl:col-span-1 md:col-span-2 ">
                    <div className="noto_font text-[26px] sm:text-[64px] font-semibold pt-6 sm:pt-0 whitespace-nowrap">Get In Touch.</div>
                    <div className="grid grid-cols-2 gap-6 md:pt-14 pt-5">
                      <ul className="space-y-4 lg:text-base md:text-sm text-xs capitalize">
                        <li>
                          <a href="https://blockwiz.com/" target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Home Page</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/influencer-campaigns"
                            target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Influencer Marketing</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/cryptocurrency-content-writing"
                            target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Content Marketing</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/web3-consulting-services"
                            target="_blank" rel="noreferrer"
                            className="text-white hover:text-opacity-70">Web3 Consulting Services</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/search-engine-optimisation"
                            target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Search Engine Optimization</a>
                        </li>
                      </ul>
                      <ul className="space-y-5 lg:text-base md:text-sm text-xs ">
                        <li>
                          <a href="https://blockwiz.com/services/discord-and-telegram-community-growth"
                            target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Community Management</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/social-media-marketing"
                            target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Social Media Marketing</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/pr-sponsored-articles"
                            target="_blank" rel="noreferrer"
                            className="text-[#FFFDFF] hover:text-opacity-70">Press Releases</a>
                        </li>
                        <li>
                          <a href="https://blockwiz.com/services/crypto-video-creation-marketing"
                            target="_blank" rel="noreferrer"
                            className="text-white hover:text-opacity-70">Animated Videos</a>
                        </li>
                      </ul>
                    </div>
                    <div className="py-10 pr-14 flex items-center justify-between ">
                      <a href="https://www.linkedin.com/company/blockwiz/?originalSubdomain=in"
                        target="_blank" rel="noreferrer">
                        <img src="/linkedin.png" alt="linkedin" />
                      </a>
                      <a href="https://twitter.com/blockwiz_global?lang=en" target="_blank" rel="noreferrer">
                        <img src="/twitter.png" alt="twitter" />
                      </a>
                      <a href="https://t.me/Blockwiz_official" target="_blank" rel="noreferrer">
                        <img src="/telegram.png" alt="telegram" />
                      </a>
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="hidden md:block ">
                      <a href="https://blockwiz.com/contact-us" target="_blank" rel="noreferrer">
                        <img alt="walken" src="/foot_get.svg" width="430"
                          height="380" decoding="async" data-nimg="1"
                          className="rotate linear infinite animate-spin" loading="lazy"
                        // style="color:transparent" 
                        />
                      </a>
                    </div>
                    <div className="md:hidden flex items-end justify-end">
                      <a href="https://blockwiz.com/contact-us" target="_blank" rel="noreferrer">
                        <img alt="walken" src="/foot_get.svg" width="118"
                          height="118" decoding="async" data-nimg="1"
                          className="rotate linear infinite animate-spin" loading="lazy"
                        // style="color:transparent" 
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-50 container sm:hidden block py-10">
                <div className="flex items-center justify-between ">
                  <div className="text-[30px] font-semibold pt-6 sm:pt-0 whitespace-nowrap">Get In Touch.</div>
                  <div className="animate-spin">
                    <img alt="walken"
                      src="Ffoot_get_mobi.png"
                      width="118" height="118" decoding="async" data-nimg="1"
                      className="rotate linear infinite" loading="lazy"
                    // style="color:transparent"
                    />
                  </div>
                </div>
                <div className="flex items justify-between py-10">
                  <div>
                    <ul className="space-y-5 lg:text-base md:text-sm text-xs capitalize">
                      <li>
                        <a href="https://blockwiz.com/" target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">Home Page</a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/influencer-campaigns"
                          target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">
                          Influencer Marketing
                        </a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/cryptocurrency-content-writing"
                          target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">Content Marketing</a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/web3-consulting-services"
                          target="_blank" rel="noreferrer"
                          className="text-white hover:text-opacity-70">Web3 Consulting Services</a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/search-engine-optimisation"
                          target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">Search Engine Optimization</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <ul className="space-y-5 lg:text-base md:text-sm text-xs text-end capitalize">
                      <li>
                        <a href="https://blockwiz.com/services/discord-and-telegram-community-growth"
                          target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">Community Management</a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/social-media-marketing"
                          target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">Social Media Marketing</a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/pr-sponsored-articles"
                          target="_blank" rel="noreferrer"
                          className="text-[#FFFDFF] hover:text-opacity-70">Press Releases</a>
                      </li>
                      <li>
                        <a href="https://blockwiz.com/services/crypto-video-creation-marketing"
                          target="_blank" rel="noreferrer"
                          className="text-white hover:text-opacity-70">Animated Videos</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-4 flex items-center justify-between ">
                  <a href="https://www.linkedin.com/company/blockwiz/?originalSubdomain=in" target="_blank" rel="noreferrer">
                    <img src="/linkedin.png" alt="linkedin" />
                  </a>
                  <a href="https://twitter.com/blockwiz_global?lang=en" target="_blank" rel="noreferrer">
                    <img src="/twitter.png" alt="twitter" />
                  </a>
                  <a href="https://t.me/Blockwiz_official" target="_blank" rel="noreferrer">
                    <img src="/telegram.png" alt="telegram" />
                  </a>
                </div>
              </div>
              <div className="sm:hidden block absolute z-0 -top-[30%] -left-[120%]">
                <div className="h-[450px] w-[700px]"
                // style="background-image:radial-gradient(circle, #16432D, #0F0F11, #0F0F11)"
                ></div>
              </div>
            </div>

          </div>
        </div>
      </MainLayout>
    </>
  );
}
