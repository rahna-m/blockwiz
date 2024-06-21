import React from 'react'

const CalendlySection = () => {
  return (
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
  )
}

export default CalendlySection