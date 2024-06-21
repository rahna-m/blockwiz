import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const data = [
    {
        title: "Loyality",
        subheading: `Building A <br class="hidden md:block" />
Timeless<br class="hidden md:block" />
Community<br class="hidden md:block" />
Happens During<br class="hidden md:block" />
<span class="text-primary font-semibold">The Loyalty Phase</span>`,
        description: `
        <ul class="text-[#DDDDDD] text-base md:text-xl list-outside list-disc  font-light pl-5 space-y-6 pt-5">
        <li>We Focus On Distribution For This Stage; The More People Know About Your Project With Specific Details, The Better Your Chances For A Successful Mint/IDO.</li>
        <li>hOffer Loyal Community Members Roles And Exclusivity To Increase Conversions From Members Who Have Been Engaging The Brand In The Awareness And Consideration Phase. Empower Community Members To Become Shillers</li>
        </ul>
        `
    },

    {
        title: "Conversion",
        subheading: `<span class="text-primary font-semibold">Conversion </span>Is A Phase In 
The Plan Where You<br class="hidden md:block" />
Successfully Mint Out /<br class="hidden md:block" />
Your Projects Get<br class="hidden md:block" />
Oversubscribed.`,
        description: `  <ul class="text-[#DDDDDD] text-base md:text-xl list-outside list-disc  font-light pl-5 space-y-6 pt-5">
                                        <li>We Focus On Distribution For This Stage; The More People Know About Your Project With Specific Details, The Better Your Chances For A Successful Mint/IDO.</li>
                                        <li>Offer Loyal Community Members Roles And Exclusivity To Increase Conversions From Members Who Have Been Engaging The Brand In The Awareness And Consideration Phase. Empower Community Members To Become Shillers</li>
                                        
                                    </ul>`
    },

    {
        title: "Consideration",
        subheading: `<span class="text-primary font-semibold">Consideration</span> Is The Phase Where 
We Focus On Building The <br class="hidden md:block" />
Foundation For A Substantial <br class="hidden md:block" />
Brand Recall Value Is Done During<br class="hidden md:block" />
The Consideration Stage By`,
        description: `  <ul class="text-[#DDDDDD] text-base md:text-xl list-outside list-disc  font-light pl-5 space-y-6 pt-5">
                                        <li>Hyping Up The Benefits That Holders Will Receive. Will They Be Invited To Exclusive Talks With Experts? By Sharing, The Partnerships Have Already Been Secured.</li>
                                        <li>Using Twitter Spaces Discussions To Talk About Topics Of Interest To Your Community. Partnering With Founders From Other Web3 Projects In The Same Or Similar Space And Expanding Your Communities.</li>
                                        
                                    </ul>`
    },

    {
        title: "Awareness",
        subheading: `<span class="text-primary font-semibold">The Awareness Phase  </span>Is Where
We Help Brands Share Their Story,<br class="hidden md:block" />
Mission, And Vision With<br class="hidden md:block" />
Audiences In Order To Build A<br class="hidden md:block" />
Connection By`,
        description: `  <ul class="text-[#DDDDDD] text-base md:text-xl list-outside list-disc  font-light pl-5 space-y-6 pt-5">
                                        <li>Building Excitement For The Upcoming Launch By Sharing Teasers And Sneak Peeks Of Your Web3 Product.</li>
                                        <li>Write About The Brand’s Mission And Vision And Share How The Holders Will Be An Essential Part Of It.</li>
                                        <li>Share The Unique Selling Proposition — What Makes Your Project And Community Stand Out?</li>
                                    </ul>`
    }


]




const percentage = 66;
const OurApproachSection = () => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState(0);

    const values = [0, 25, 50, 75, 100];
    let stepIndex = 0;


    useEffect(() => {


        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % data.length);
            setValue(values[stepIndex]);
            stepIndex = (stepIndex + 1) % values.length;

        }, 2000);

        return () => clearInterval(interval);
    }, [setValue]);




    return (
        <div className="relative">
            <div className="container lg:pt-20 md:pt-16 overflow-hidden relative z-50">
                <div className="grid xl:grid-cols-2 sm:gap-5 gap-5 xl:content-start xl:justify-items-start items-center md:justify-items-center md:content-center ">
                    {/* <div className="hidden md:block">
                        <div style={{ position: "relative", width: "100%", height: "100%" }}> */}

                            {/* <div className="w-full flex items-center justify-center"> */}

                           


                            {/* </div> */}
                        {/* </div>
                    </div> */}


<div className=" justify-center space-x-2 pt-10 px-20">

{/* <div className='items-center justify-center'> */}

<div className='circularProgressbar'>

    <CircularProgressbar
        value={value}
        text={`${data[index].title}`}
        strokeWidth={0.5}
        
        styles={
            buildStyles({
                rotation: 0,
                textSize: '14px',
                pathTransitionDuration: 0.5,
                pathColor: `#26B86C`,
                textColor: '#26B86C',
                trailColor: '#FFFFFF',
                // backgroundColor: '#3e98c7',
            })}
    />;

</div>



{/* </div> */}

</div>


                    <div className="flex items-center justify-center space-x-2 pt-10">

                        <div >
                            <div className="noto_font md:block hidden text-white text-[32px] sm:text-[40px] md:text-center pb-2 font-semibold">
                                Our Approach
                            </div>
                            <div id="approachone" className="w-full md:w-[560px] md:h-auto h-[550px] relative pt-3 ">
                                <div className="space-y-5">


                                    <div dangerouslySetInnerHTML={{ __html: data[index].subheading }} className="text-white md:text-[32px] text-[20px] font-normal text-start md:text-center capitalize  leading-[36px]">

                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: data[index].description }} className="md:h-[320px] capitalize ">


                                </div>



                            </div>



                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default OurApproachSection