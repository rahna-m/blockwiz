import React from 'react'

const VideoSection3 = () => {
  return (
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
  )
}

export default VideoSection3