"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import NewHero from "@/components/NewHero"
import PartnersSection from "@/components/PartnerSection"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Scale, Users, Globe, Heart, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">

      <Header />
      {/* Hero Section */}
      <NewHero />
      {/* About Section */}
      <section id="about" className="py-16 md:py-12 bg-white">
        
        <div className="container mx-auto px-4 mb">
                  <p className="text-center text-xl font-robotoCondensed  text-black font-light mb-12">
          Legal expertise you can trust — for the journey that matters most
        </p>
          <div className=" mb-12 text-left">
                        <p className="text-3xl md:text-4xl tracking-wide text-[#a8905e] mb-1 font-semibold font-fellFrench ">
              Solicitor Of The Supreme Court of Victoria, Australia
            </p>
            <p className="text-3xl md:text-4xl tracking-wide text-[#a8905e] font-semibold font-fellFrench ">
              Barrister and Solicitor of the High Court of New Zealand
            </p>
            <div className="mt-4"><span className="text-lg text-gray-600 font-fellFrench">Legal Practitioner ID:</span> <span className="text-gray-600 font-robotoCondensed">P0057083</span></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-700 text-start leading-relaxed text-lg font-robotoCondensed">
              <p className="text-[#a8905e]">
                Darshan is a highly skilled immigration lawyer with qualifications in Australia and New Zealand,
                specializing in a wide range of migration matters.
              </p>
              <p>
                Darshan's passion for immigration law grew from his
                early involvement with human rights and pro bono organisations, where he developed a commitment to
                supporting people in navigating the often complex and challenging immigration process. Over the years,
                he has built a strong track record of assisting clients across Australia, New Zealand and all corners of
                the world.
              </p>
              <p>
                With a focus on skilled visas, permanent residency pathways, employer-sponsored visas, and judicial
                reviews, Darshan offers practical, client-focused solutions for complex immigration issues. Darshan is
                also well-versed in complex cases, including visa cancellations, Tribunal appeals, and judicial reviews
                in the Federal Circuit and Family Court. His professional approach is built on delivering high-quality
                legal guidance with honesty, integrity, and reliability. Fluent in Tamil and Sinhalese, he is able to
                provide services to a broad range of clients, both locally and internationally, with a deep
                understanding of diverse cultural contexts.
              </p>

              <p>
                Darshan is also currently serving as a Senior Legal and Migration Consultant for several renowned firms
                across Australia, New Zealand, and abroad. This role allows him to work on diverse and high-stakes
                migration cases, further solidifying his reputation as a trusted expert in the field.
              </p>

              {/* Secondary CTA */}
              <div className="pt-6">
                <Link href="tel:0435166653">
                  <Button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-4 ">
                    <Phone className="mr-2 h-5 w-5" />
                    CALL 0435 166 653
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className=" rounded-lg p-8 mb-6">
                <Image
                  src="/Profile-photo.JPG?height=400&width=300"
                  alt="Lawyer Darshan - Professional Photo"
                  width={300}
                  height={400}
                  className="mx-auto rounded-lg"
                />
                {/* <p className="text-sm text-gray-500 mt-4">[PHOTO – Personal]</p> */}
              </div>

              <div className=" p-4 rounded-lg">
                {/* <p className="text-sm text-gray-600 mb-2">[LOGOS - Migration Alliance and LIV]</p> */}
                <div className="flex justify-center space-x-4 ">
                  <div className=" text-black px-3 py-1 rounded text-xs  shadow-lg">          
                    <Image
                    src="/mmalliance-removebg-preview.png"
                    alt="Lawyer Darshan - Professional Photo"
                    width={200}
                    height={100}
                    className="mx-auto rounded-lg  "
                    />
                  </div>
                  <div className="flex text-black px-3 py-1 rounded text-xs  shadow-lg">
                    <Image
                      src="/LIV-Logo-removebg-preview.png"
                      alt="Lawyer Darshan - Professional Photo"
                      width={300}
                      height={100}
                      className="mx-auto rounded-lg  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice Section */}
      <section
        id="areas" className="py-16 md:py-24 bg-cover bg-center relative">
        {/* Optional Overlay for readability */}
        <div className="absolute inset-0 bg-blue-950/80 z-10"></div>
        <Image
          src="/bgImage4.jpg"
          alt="bgimage"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12"> */}
          <h2
            className="text-3xl md:text-4xl  text-center text-[#9d8248] mb-12 font-fellFrench"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            Areas Of Practice - Migration Law
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              "Tribunal and Court matters",
              "Refugee, Humanitarian and Protection visa",
              "Visa Refusal and Cancellations",
              "Partner visa",
              "Prospective Marriage visa",
              "Child visa",
              "Parent visa",
              "Carer visa",
              "Visitor visa",
              "Global Talent visa",
              "Skills Assessments",
              "Skilled Independent visa",
              "Skilled Employer Sponsored visa",
              "Skilled Regional visa",
              "Employer Sponsored and Temporary Work visas",
              "Training visa",
              "Graduate visa",
              "Australian Citizenship",
              "Working Holiday/Work and Holiday visa",
              "Resident Return visa",
              "Bridging Visas",
            ].map((practice, index) => (
              // <div
              //   key={index}
              //   className="bg-white  border-l-4 border-[#D4AE6E] rounded-md p-4 transition-colors"
              // >
              //   <p className="font-medium text-gray-800">{practice}</p>
              // </div>
              <ul key={index}>
                <li className="list-disc text-white text-lg font-robotoCondensed px-4">{practice}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Why Darshan Stands Out Section */}
      <section id="standsout" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#a8905e] mb-16 font-fellFrench leading-tight">
            Why Darshan Stands Out
          </h2>

          {/* Grid for Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Card 1: Extensive Expertise */}
            <Card className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Scale className="h-14 w-14 text-[#a8905e] mb-6" /> {/* Larger icon, gold color */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-fellFrench">Extensive Expertise</h3>
                <p className="text-gray-700 font-robotoCondensed leading-relaxed">
                  Darshan handles all aspects of migration law, from simple visa applications to complex judicial reviews.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Client-Centric Approach */}
            <Card className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Users className="h-14 w-14 text-[#a8905e] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-fellFrench">Client-Centric Approach</h3>
                <p className="text-gray-700 font-robotoCondensed leading-relaxed">
                  Darshan provides personalized, transparent legal services with clear communication and ongoing support.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Track Record of Success */}
            <Card className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Award className="h-14 w-14 text-[#a8905e] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-fellFrench">Track Record of Success</h3>
                <p className="text-gray-700 font-robotoCondensed leading-relaxed">
                  Darshan has achieved positive outcomes across visa applications, tribunal appeals, and judicial reviews.
                </p>
              </CardContent>
            </Card>

            {/* Card 4: Global Perspective */}
            <Card className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Globe className="h-14 w-14 text-[#a8905e] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-fellFrench">Global Perspective</h3>
                <p className="text-gray-700 font-robotoCondensed leading-relaxed">
                  Darshan understands the diverse needs of international clients and provides tailored legal solutions.
                </p>
              </CardContent>
            </Card>

            {/* Card 5: Cultural Sensitivity */}
            <Card className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Heart className="h-14 w-14 text-[#a8905e] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-fellFrench">Cultural Sensitivity</h3>
                <p className="text-gray-700 font-robotoCondensed leading-relaxed">
                  Fluent in Tamil and Sinhalese, Darshan bridges language and cultural gaps to support diverse clients effectively.
                </p>
              </CardContent>
            </Card>

            {/* Card 6: International Collaboration */}
            <Card className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <CheckCircle className="h-14 w-14 text-[#a8905e] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-fellFrench">International Collaboration</h3>
                <p className="text-gray-700 font-robotoCondensed leading-relaxed">
                  As a Senior Consultant for top firms globally, Darshan brings a strong international perspective to migration law.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PartnersSection/>

      <section id="blogs" className="py-16 md:py-24 bg-white">
        <div className=" container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#a8905e] mb-12 font-fellFrench">
            Research Articles And Interviews Of Lawyer Darshan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "The Genuine Student Requirement in Australia Migration Law: A Legal Analysis ",
                pdf: "/articles/article1.pdf",
                preview: "/previews/Genuine-student-image.png",
              },
              {
                title: "Deffence Of Innocent Dissemination: Is it an unethical safe house for social media to circumvent defamation liabilities",
                pdf: "/articles/article2.pdf",
                preview: "/previews/Defence-of-Innocent-Dissemination-Image.png",
              },
              {
                title: "Navigating the Australian Partner Visa, Australian Strategic Migration Reform",
                pdf: "/articles/article3.pdf",
                preview: "/previews/Partner-visa-image.png",
              },
              {
                title: "Australian Strategic Migration Reform",
                pdf: "/articles/article4.pdf",
                preview: "/previews/Aus-migration-reform-image.png",
              },
              // Add more articles here
            ].map((article, index) => (
              <a
                key={index}
                href={article.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className=" hover:shadow-lg cursor-pointer transition-all hover:scale-110">
                  <CardContent className="p-0">
                    <Image
                      src={article.preview}
                      alt={`${article.title} Preview`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-sm text-black mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm">Click to read full PDF</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>



      {/* Urgent Advice Section */}
      {/* <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#D4AE6E] to-[#e8d4b3] text-white"> */}
      <section id="contact" className="relative py-16 md:py-24 text-white overflow-hidden">

        <div className="absolute inset-0 z-0">
          <Image
            src="/bgImage9.jpg"
            alt="Supreme Court"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[#a8905e]/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-fellFrench">NEED URGENT MIGRATION ADVICE?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            If you have a migration related problem or query, it is important to get the best legal advice immediately.
            Your future may depend on it.
          </p>

          <Link href="tel:0435166653">
            <Button className="bg-black hover:bg-[#eccc97]/80 text-white font-bold text-2xl md:text-3xl px-12 md:px-16 py-6 md:py-8  shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Phone className="mr-4 h-8 w-8" />
              CALL 0435 166 653
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      {/* <footer className="bg-[#1e293b] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">NEED LEGAL HELP?</h3>
            <Link href="tel:0435166653">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-4 rounded-lg">
                <Phone className="mr-2 h-5 w-5" />
                CALL 0435 166 653
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-4 text-yellow-500">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                  <span>[Email]</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                  <span>[Address]</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-bold text-lg mb-4 text-yellow-500">Our Education Partners</h4>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-300">[LOGOS (to be sent)]</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="bg-yellow-500 text-black px-6 py-3 rounded font-bold inline-block">[Logo]</div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lawyer Darshan. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      <footer className="bg-[#1e293b] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Grid for main footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">

            {/* Column 1: Logo Section */}
            <div className="flex flex-col items-center md:items-start md:col-span-1">
              <Image
                src="/logo-white-removebg.png"
                alt="darshan"
                width={220}     // Adjust width as needed
                height={40}     // Adjust height as needed
                className="object-contain"
              />
            </div>

            {/* Column 2: Need Legal Help? / Contact Information */}
            <div className="text-center md:text-left md:col-span-1">
              <h4 className="font-fellFrench text-lg md:text-xl font-bold mb-4 text-[#D4AE6E]">NEED LEGAL HELP?</h4>
              <div className="space-y-2 font-robotoCondensed">
                {/* Phone number - use a standard <a> tag for tel: links */}
                <p>
                  <a href="tel:0435 166 653" className="hover:text-[#D4AE6E]">CALL 0435 166 653</a>
                </p>
                {/* Email address - use a standard <a> tag for mailto: links */}
                <p>
                  <a href="mailto:info@lawyerdarshan.com.au" className="hover:text-[#D4AE6E]">info@lawyerdarshan.com.au</a>
                </p>
                {/* Address details */}
                <p>470 St Kilda Road</p>
                <p>Melbourne</p>
                <p>Victoria 3004</p>
              </div>
            </div>

            {/* Column 3: Menu */}
            <div className="text-center md:text-left md:col-span-1">
              <h4 className="font-fellFrench text-lg md:text-xl font-bold mb-4 text-[#D4AE6E]">MENU</h4>
              <ul className="space-y-2 font-robotoCondensed">
                <li><Link href="#" className="hover:text-[#D4AE6E]">Home</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">About</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Why Darshan?</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Research Articles</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Contact</Link></li>
              </ul>
            </div>

            {/* Column 4: Areas of Practice */}
            <div className="text-center md:text-left md:col-span-1">
              <h4 className="font-fellFrench text-lg md:text-xl font-bold mb-4 text-[#D4AE6E]">AREAS OF PRACTICE</h4>
              <ul className="space-y-2 font-robotoCondensed">
                <li><Link href="#" className="hover:text-[#D4AE6E]">Tribunal and Court matters</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Refugee, Humanitarian and Protection visa</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Visa Refusal and Cancellations</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Partner visa</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Prospective Marriage visa</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Child visa</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Parent visa</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Carer visa</Link></li>
                <li><Link href="#" className="hover:text-[#D4AE6E]">Visitor visa</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-700 pt-8 text-center md:text-left text-gray-400 font-robotoCondensed">
            <p>&copy; {new Date().getFullYear()} Darshan Rajendran All rights reserved.</p>
            <p> Website By Dew_mindi</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
