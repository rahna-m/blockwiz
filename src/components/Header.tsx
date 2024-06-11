import React from 'react'

const Header = () => {
  return (
   
    <div className="sticky top-0 bg-black z-100">
        <div className="container flex items-center justify-between px-20 py-5">
            <div className='hidden sm:block'>
                <a href='/'><img alt='blockwiz_logo' 
                srcSet='/_next/image?url=%2Fassets%2Fmain_logo.png&w=256&q=75 1x, /_next/image?url=%2Fassets%2Fmain_logo.png&w=384&q=75 2x'
                src='blockwiz_logo' width="146" height="32"></img></a>
            </div>

            <div className='sm:hidden block'>
                <a href='/'><img alt='blockwiz_logo' 
                srcSet='/_next/image?url=%2Fassets%2Fmain_logo.png&w=128&q=75 1x, /_next/image?url=%2Fassets%2Fmain_logo.png&w=256&q=75 2x'
                src='blockwiz_logo' width="110" height="24"></img></a>
            </div>

            <div className='space-x-2 md:space-x-4 '>
        <button className="header_button_one">Case Study</button>
        <button className="header_button_two">Get in Touch</button>
        </div>
        </div>
        

    </div>
   
  )
}

export default Header