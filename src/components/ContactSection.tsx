import React from 'react'

const ContactSection = () => {
  return (
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
  )
}

export default ContactSection