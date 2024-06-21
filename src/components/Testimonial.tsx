

import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialSlider() {

    const sliderRef = useRef<Slider>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
    sliderRef.current?.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
    sliderRef.current?.slickPrev();
    }
  };

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000


    };
    return (



        <div className="relative">
            <div className="relative z-50 container text-white sm:py-10 py-8 px-20">
                <div className="flex items-center justify-between text-white sm:py-10 py-5 ">
                    <div className="noto_font text-[32px] sm:text-[40px] text-start pb-2 font-semibold">Testimonials</div>
                    <div className="flex space-x-4">
                        <div className="cursor-pointer" onClick={prevSlide}>
                            <img src="/l_arrow.png" alt="" />
                        </div>
                        <div className="cursor-pointer" onClick={nextSlide}>
                            <img src="/r_arrow.png" alt="" />
                        </div>
                    </div>
                </div>

                <Slider ref={sliderRef} {...settings}>

                    <div className="bg-[#151515] h-[380px] md:h-[340px] rounded-2xl relative flex flex-col items-center justify-center ">
                        <div className="space-y-10 flex flex-col items-center justify-center p-10">
                            <div className="">
                                <div className="text-white capitalize leading-7 md:leading-8 text-sm md:text-base font-normal md:text-center md:max-w-lg xl:max-w-xl p-6 md:pb-5 pb-16 md:p-5 md:pt-6 pt-12 sm:h-[180px] h-[290px]">
                                    mBlockwiz offered just what we ordered! Very happy with the rankings. Our conversion rate spiked by 35% within 3 months. We work with only Blockwiz for our content optimization</div>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="text-white pb-2 text-xs md:text-base">Yolo Zhang, Overseas Marketing Director</div>
                                    <div className="text-white font-semibold text-2xl">Chainup</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-6 md:top-6 xl:top-8 md:left-[20%] left-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/l_quote.png" alt="" />
                        </div>
                        <div className="absolute bottom-28 md:bottom-6 xl:bottom-8 md:right-[20%] right-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/r_quote.png" alt="" />
                        </div>
                    </div>


                    <div className="bg-[#151515] h-[380px] md:h-[340px] rounded-2xl relative flex flex-col items-center justify-center ">
                        <div className="space-y-10 flex flex-col items-center justify-center p-10">
                            <div className=""
                            // style="opacity:0;transform:translateX(10px) translateZ(0)"
                            >
                                <div className="text-white capitalize leading-7 md:leading-8 text-sm md:text-base font-normal md:text-center md:max-w-lg xl:max-w-xl p-6 md:pb-5 pb-16 md:p-5 md:pt-6 pt-12 sm:h-[180px] h-[290px]">
                                    Blockwiz offered just what we ordered! Very happy with the rankings. Our conversion rate spiked by 35% within 3 months. We work with only Blockwiz for our content optimization</div>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="text-white pb-2 text-xs md:text-base">Yolo Zhang, Overseas Marketing Director</div>
                                    <div className="text-white font-semibold text-2xl">Chainup</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-6 md:top-6 xl:top-8 md:left-[20%] left-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/l_quote.png" alt="" />
                        </div>
                        <div className="absolute bottom-28 md:bottom-6 xl:bottom-8 md:right-[20%] right-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/r_quote.png" alt="" />
                        </div>
                    </div>



                    <div className="bg-[#151515] h-[380px] md:h-[340px] rounded-2xl relative flex flex-col items-center justify-center ">
                        <div className="space-y-10 flex flex-col items-center justify-center p-10">
                            <div className=""
                            // style="opacity:0;transform:translateX(10px) translateZ(0)"
                            >
                                <div className="text-white capitalize leading-7 md:leading-8 text-sm md:text-base font-normal md:text-center md:max-w-lg xl:max-w-xl p-6 md:pb-5 pb-16 md:p-5 md:pt-6 pt-12 sm:h-[180px] h-[290px]">
                                    Blockwiz offered just what we ordered! Very happy with the rankings. Our conversion rate spiked by 35% within 3 months. We work with only Blockwiz for our content optimization</div>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="text-white pb-2 text-xs md:text-base">Yolo Zhang, Overseas Marketing Director</div>
                                    <div className="text-white font-semibold text-2xl">Chainup</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-6 md:top-6 xl:top-8 md:left-[20%] left-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/l_quote.png" alt="" />
                        </div>
                        <div className="absolute bottom-28 md:bottom-6 xl:bottom-8 md:right-[20%] right-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/r_quote.png" alt="" />
                        </div>
                    </div>




                    <div className="bg-[#151515] h-[380px] md:h-[340px] rounded-2xl relative flex flex-col items-center justify-center ">
                        <div className="space-y-10 flex flex-col items-center justify-center p-10">
                            <div className=""
                            // style="opacity:0;transform:translateX(10px) translateZ(0)"
                            >
                                <div className="text-white capitalize leading-7 md:leading-8 text-sm md:text-base font-normal md:text-center md:max-w-lg xl:max-w-xl p-6 md:pb-5 pb-16 md:p-5 md:pt-6 pt-12 sm:h-[180px] h-[290px]">
                                    Blockwiz offered just what we ordered! Very happy with the rankings. Our conversion rate spiked by 35% within 3 months. We work with only Blockwiz for our content optimization</div>
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="text-white pb-2 text-xs md:text-base">Yolo Zhang, Overseas Marketing Director</div>
                                    <div className="text-white font-semibold text-2xl">Chainup</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-6 md:top-6 xl:top-8 md:left-[20%] left-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/l_quote.png" alt="" />
                        </div>
                        <div className="absolute bottom-28 md:bottom-6 xl:bottom-8 md:right-[20%] right-6">
                            <img className="w-[34px] h-[26px] md:w-auto md:h-auto" src="/r_quote.png" alt="" />
                        </div>
                    </div>





                </Slider>







                <div className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-10 md:py-16 py-8 ">
                    <div className="w-full h-[250px] sm:h-[320px] bg-[#434343] overflow-hidden rounded-xl">

                        {/* <template data-dgst="DYNAMIC_SERVER_USAGE"></template> */}

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
                    <div className="w-full h-[250px] sm:h-[320px] bg-[#434343] overflow-hidden rounded-xl">

                        {/* <template data-dgst="DYNAMIC_SERVER_USAGE"></template> */}

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
            <div className="sm:hidden block absolute z-0 top-0 -left-52">
                <div className="h-[500px] w-[800px] middle_gradient" >
                </div>
            </div>
        </div>

























    );
}

export default TestimonialSlider;