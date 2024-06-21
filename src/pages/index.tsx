"use client"
import React from 'react';
import MainLayout from "@/layouts/layout";
import TestimonialSlider from '@/components/Testimonial';
import HeadSection from '@/components/HeadSection';
import FudLessSection from '@/components/FudLessSection';
import VideoSection3 from '@/components/VideoSection3';
import HorizonSection from '@/components/HorizonSection';
import OurServiceSection from '@/components/OurServiceSection';
import OurDNASection from '@/components/OurDNASection';
import OurApproachSection from '@/components/OurApproachSection';
import AdaswapSection from '@/components/AdaswapSection';
import CalendlySection from '@/components/CalendlySection';
import ContactSection from '@/components/ContactSection';




export default function Home() {

  return (
    <>
      <MainLayout>
        <div className="overflow-x-hidden">
          <div className="bg-bgmain">

            {/* Section 1 */}
            <HeadSection />

            {/* Section 2 */}
            <FudLessSection />

            {/* Section 3 */}
            <VideoSection3 />

            {/* Section 4 - horizondal scroll */}
            <HorizonSection />

            {/* Section 5 - Our Services */}
            <OurServiceSection />

            {/* Section 6 - Our DNA */}
            <OurDNASection />

            {/* Section 7 */}
            <OurApproachSection />

            {/* Section 8 */}
            <AdaswapSection />

            {/* Section 9 */}
            <TestimonialSlider />

            {/* Section 10 */}
            <CalendlySection />

            {/* Section 11 */}
            <ContactSection />

          </div>
        </div>
      </MainLayout>
    </>
  );
}
