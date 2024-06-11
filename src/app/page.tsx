import ServiceSlider from "@/components/Slider";
import Image from "next/image"




export default function Home() {
  return (<main >
    <div className="overflow-x-hidden">
      <div className="bg-bgmain">

        {/* Section 1 */}
        <div className="banner_gradient text-white overflow-hidden">
          <div className="container">
            <div className="opacity: 1; transform: none;">
              <div className="section_one mx-20">
                <div className="">
                  <div className="section_one_heading noto_font">
                    Work with the
                    <span className="font-bold uppercase ">
                      &nbsp;largest &amp; the best </span>
                    Web3 marketing team on the planet!</div>
                </div>
                <div className="pt-8 sm:pt-0">
                  <button className="section_one_button">
                    Get a proposal</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Section 2 */}

        <div className="container sm:py-20 py-10 px-20">
          <div className="opacity-1 transform translate-x-10">
            <div className="animate-slidein noto_font text-[24px] sm:text-[36px] text-white text-center pb-5 font-light">
              <span className=" text-primary">#FUDLess</span>Marketing
            </div>

          </div>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 sm:gap-8">
            <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
              <div className="section_two_outerbox">
                <div className="section_two_innerbox">
                  <div className="section_two_innertext_top">36+</div>
                  <div className="section_two_innertext_bottom">Months of experience</div>
                </div>
              </div>
            </div>

            <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
              <div className="section_two_outerbox">
                <div className="section_two_innerbox">
                  <div className="section_two_innertext_top">148+</div>
                  <div className="section_two_innertext_bottom"> IDO’s</div>
                </div>
              </div>
            </div>

            <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
              <div className="section_two_outerbox">
                <div className="section_two_innerbox">
                  <div className="section_two_innertext_top">132+ </div>
                  <div className="section_two_innertext_bottom">Mints</div>
                </div>
              </div>
            </div>

            <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
              <div className="section_two_outerbox">
                <div className="section_two_innerbox">
                  <div className="section_two_innertext_top">2</div>
                  <div className="section_two_innertext_bottom">Bear markets</div>
                </div>
              </div>
            </div>

            <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
              <div className="section_two_outerbox" >
                <div className="section_two_innerbox">
                  <div className="section_two_innertext_top">254+</div>
                  <div className="section_two_innertext_bottom">successful projects</div>
                </div>
              </div>
            </div>

            <div className="opacity-1 transform hover:-translate-y-3 transition duration-300">
              <div className="section_two_outerbox">
                <div className="section_two_innerbox">
                  <div className="section_two_innertext_top">1</div>
                  <div className="section_two_innertext_bottom">mission</div>
                </div>
              </div>
            </div>
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


        <div className="container sm:py-20 py-5 ">
          <div className="opacity-1 transform none"
          //  style="opacity: 1; transform: none;"
          >
            <div className="noto_font text-[30px] sm:text-[40px] text-white text-center pb-5 font-normal">Some Web3 projects we have helped moon 🚀</div></div>
          <div className="py-6">
            <div className=" space-y-5 overflow-hidden  marquee-container">






              <div className="flex animate-loopscroll items-center justify-center space-x-6 ">
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <Image alt=""
                    // srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_1.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_1.png&amp;w=128&amp;q=75 2x" 
                    src="/img1.png"
                    // src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_1.png&amp;w=128&amp;q=75" 
                    width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3 ">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_2.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_2.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  //  style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_3.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_3.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_3.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  //  style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_4.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_4.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_4.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  //  style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_5.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_5.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_5.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  //  style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_6.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_6.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_6.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  //  style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_7.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_7.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_7.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="pr-5"><div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_8.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_8.png&amp;w=128&amp;q=75 2x" src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_8.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  //  style="color: transparent;"
                  />
                </div>
                </div>
              </div>


              <div className="flex flex-row items-center justify-center space-x-6 ">
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_1.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_1.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_1.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3 ">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_2.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_2.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_3.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_3.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_3.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_4.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_4.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_4.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_5.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_5.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_5.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_6.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_6.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_6.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                  <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_7.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_7.png&amp;w=128&amp;q=75 2x"
                    src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_7.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                  // style="color: transparent;"
                  /></div>
                <div className="pr-5">
                  <div className="bg-[#2F2F2F66] md:h-[96px] md:w-[132px] w-[90px] h-[90px] flex items-center justify-center rounded-2xl p-3">
                    <img alt="" srcSet="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_8.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fassets%2Fmarquee%2Fpro_8.png&amp;w=128&amp;q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fmarquee%2Fpro_8.png&amp;w=128&amp;q=75" width="50" height="50" decoding="async" data-nimg="1" loading="lazy"
                    // style="color: transparent;"
                    /></div>
                </div>
              </div>




            </div>
          </div>

        </div>

        {/* Section 5 - Our Services */}

        <div className="relative pb-10">
          <div className="relative z-50 container md:py-10 py-5">
            <div className="opacity-1; transform none;">
              <div className="noto_font tracking-wide text-[#FFFDFF] md:text-[40px] text-[32px] font-normal text-center">Our Services</div>
            </div>

            <ServiceSlider />
          </div>
          </div>

      </div>

    </div>
  </main>);
}
