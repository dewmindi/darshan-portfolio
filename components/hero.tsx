import React from 'react'
import Image from "next/image"
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
<section className=" relative flex items-stretch bg-black">
      {/* Background Image Container - This div will position and hold the image on the right side */}
      {/* It's positioned absolutely, taking up 60% width from the right */}
      <div className="absolute inset-0 z-0 w-full  right-0">
        <div className='relative z-10 mt-36 left-full'>
                                <p className="text-sm md:text-base uppercase tracking-widest text-white mb-4 font-robotoCondensed">
              Solicitor of the Supreme Court of Victoria, Australia
            </p>
             <p className="text-sm md:text-base uppercase tracking-widest text-[#D4AE6E] mb-4 font-robotoCondensed">
              Barrister and Solicitor of the High Court of New Zealand
            </p>
        </div>
        <Image
          src="supremeCourt.png" // Use the provided reference image
          alt="Lawyer Elizabeth McKinnon in front of Supreme Court"
          fill // This makes the image fill its parent div (the 60% width container)
          className="object-left" // Ensures the image covers the area and is centered
          priority
        />
        {/* Overlay for the image side to blend with the black left side */}
        {/* Gradient goes from almost opaque black on the left of the image to transparent on its right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      {/* Using flex to create the two-column layout on medium screens and up */}
      {/* Removed min-h-screen from this div as well */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        {/* Left Content Area (Solid Black Background) */}
        {/* This div will cover the left 40% of the screen, sitting on top of the main section's black background */}
        <div className="w-full md:w-[100%] bg-gradient-to-r from-black/90 via-black/90 to-transparent flex flex-col justify-center py-16 md:py-24 px-4 md:px-12 text-white">
          <div className="max-w-xl mx-auto md:mx-0 md:text-left text-center">
            {/* "CRIMINAL BARRISTER Melbourne" */}
            {/* <p className="text-sm md:text-base uppercase tracking-widest text-[#D4AE6E] mb-4 font-robotoCondensed">
              Solicitor of the Supreme Court of Victoria, Australia
            </p>
             <p className="text-sm md:text-base uppercase tracking-widest text-[#D4AE6E] mb-4 font-robotoCondensed">
              Barrister and Solicitor of the High Court of New Zealand
            </p> */}

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-fellFrench text-white">
              Do You Need Legal Help?
            </h1>

            {/* Sub-headlines */}
            <div className="mb-8 space-y-3 font-robotoCondensed">
              <p className="text-lg md:text-xl text-gray-200">
                Contact Lawyer Darshan immediately
              </p>
              <p className="text-base md:text-lg opacity-90 text-gray-300">
                Available 24/7 for urgent migration and legal assistance
              </p>
            </div>

                        {/* Slogan */}
            <p className="text-lg italic mb-8 text-[#D4AE6E] font-light">
              "Legal expertise you can trust — for the journey that matters most"
            </p>

            {/* Call to Action Button */}
            <Link href="tel:0452100888">
              <Button className="bg-[#D4AE6E] hover:bg-[#a8905e] text-black font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300">
                CALL 0452 100 888
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content Area (Placeholder for flex layout) */}
        {/* This empty div ensures the flex layout correctly pushes the left content to 40% and itself takes 60% */}
        <div className="w-full md:w-[60%] flex-grow">
          {/* This div is primarily for layout and ensuring the image fills its space */}
        </div>
      </div>
    </section>
  )
}

export default Hero
