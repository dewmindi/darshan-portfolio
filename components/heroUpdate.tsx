import React from 'react'
import Image from "next/image"
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'

const HeroUpdate = () => {
  return (
<section className="relative min-h-screen flex items-center justify-start">
        {/* Background Image */}
        <Image
          src="/Supreme-court-image.png"
          alt="Supreme Court"
          fill
          className="object-cover"
          priority
        />

        {/* Left Gradient Overlay (2/3) */}
        {/* <div className="absolute inset-y-0 left-0 w-2/3 bg-black/80 z-10"></div> */}
        {/* Left Gradient Overlay (2/3) */}
        <div className="absolute inset-y-0 left-0 w-2/3 z-10 bg-gradient-to-r from-black/90 via-black/90 to-transparent"></div>


        {/* Content Area (within the dark 2/3 area) */}
        <div className="relative z-20 w-2/3 pl-10 pr-6">
          <div className="max-w-3xl text-white">
            {/* Credentials */}
            <div className="mb-12 space-y-2 opacity-90 text-[#a8905e] leading-tight font-fellFrench">
              <p className="text-3xl  lg:text-5xl">
                Solicitor of the Supreme Court of Victoria, Australia
              </p>
              <p className="text-3xl lg:text-5xl">
                Barrister and Solicitor of the High Court of New Zealand
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-4xl  font-bold mb-6 leading-tight font-fellFrench">
              Do You Need <span className="text-white">Legal Help?</span>
            </h1>

            {/* Sub-headlines */}
            <div className="mb-8 space-y-4">
              <h2 className="text-xl md:text-2xl  text-slate-50">
                Contact Lawyer Darshan immediately
              </h2>
              <p className="text-lg opacity-90">
                Available 24/7 for urgent migration and legal assistance
              </p>
            </div>

            {/* Slogan */}
            <p className="text-lg italic mb-8 text-[#D4AE6E] font-light">
              "Legal expertise you can trust — for the journey that matters most"
            </p>

            {/* Call to Action */}
            <Link href="tel:0435166653">
              <Button className="bg-[#a8905e] hover:bg-[#0f0e0c] text-white font-bold text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-3 h-6 w-6" />
                CALL 0435 166 653
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default HeroUpdate
