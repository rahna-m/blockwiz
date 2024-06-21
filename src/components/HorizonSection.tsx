import React from 'react'
import AnimatedSection from './AnimatedText'
import ScrollingLogos from './ScrollingLogos'

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

const HorizonSection = () => {
  return (
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
  )
}

export default HorizonSection