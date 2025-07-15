// import Image from 'next/image';

// const partnerLogos = [
//   { src: '/partners/partner1.png', alt: 'Partner Logo 1' },
//   { src: '/partners/partner2.jpg', alt: 'Partner Logo 2' },
//   { src: '/partners/partner3.png', alt: 'Partner Logo 3' },
//   { src: '/partners/partner5.png', alt: 'Partner Logo 4' },
//   { src: '/partners/iedu.png', alt: 'Partner Logo 5' },
//   // Add more partner logos as needed
// ];

// const PartnersSection = () => {
//   return (
//     <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partner Providers</h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Trusted by leading organizations and institutions across Australia and New Zealand
//           </p>
//         </div>

//         {/* Animated Logo Carousel */}
//         {/* Hide carousel on small screens for better mobile experience with static grid */}
//         <div className="relative overflow-hidden hidden lg:block">
//           {/* Define animation for the carousel */}
//           <style jsx>{`
//             @keyframes scroll {
//               0% { transform: translateX(0); }
//               100% { transform: translateX(-50%); } /* Scrolls half of the content width */
//             }
//             .animate-scroll {
//               animation: scroll 30s linear infinite; /* Adjust duration as needed */
//             }
//             .animate-scroll:hover {
//               animation-play-state: paused; /* Pause on hover */
//             }
//           `}</style>
//           <div className="flex animate-scroll space-x-12 md:space-x-16">
//             {/* Combine first and duplicate set into one map for cleaner code */}
//             {[...partnerLogos, ...partnerLogos].map((logo, index) => (
//               <div
//                 key={`logo-${logo.src}-${index}`} // Use index for unique key with duplicates
//                 className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//                 // Match the background color of the hero section's gold/dark theme
//                 style={{ backgroundColor: 'rgba(212, 174, 110, 0.1)' }} // A subtle gold tint with transparency
//               >
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   width={150} // Adjust width as needed for your logos
//                   height={80}  // Adjust height as needed for your logos
//                   className="object-contain filter invert opacity-80 hover:opacity-100 transition-opacity" // Invert colors to make dark logos light, adjust opacity
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Static Grid for Mobile/Tablet */}
//         {/* Show this grid only on small and medium screens */}
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:hidden gap-6 mt-12">
//           {partnerLogos.map((logo, index) => (
//             <div
//               key={`static-logo-${logo.src}-${index}`}
//               className="flex items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//               // Match the background color of the hero section's gold/dark theme
//               style={{ backgroundColor: 'rgba(212, 174, 110, 0.1)' }} // A subtle gold tint with transparency
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={120} // Adjust width as needed for your logos
//                 height={60}  // Adjust height as needed for your logos
//                 className="object-contain filter invert opacity-80" // Invert colors to make dark logos light, adjust opacity
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PartnersSection;

import Image from 'next/image';

const partnerLogos = [
  { src: '/partners/partner1.png', alt: 'Partner Logo 1' },
  { src: '/partners/partner2.png', alt: 'Partner Logo 2' },
  { src: '/partners/partner3.png', alt: 'Partner Logo 3' },
  { src: '/partners/partner4.png', alt: 'Partner Logo 4' },
  { src: '/partners/partner5.png', alt: 'Partner Logo 5' },
  // Add more partner logos as needed
];

const PartnersSection = () => {
  return (
    // Changed section background to a light shade or white
    <section className="py-16  bg-gray-50"> {/* Using a very light gray background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Changed text color for headings and paragraphs to work on a light background */}
          <h2 className="text-3xl md:text-4xl ffont-bold text-center text-[#a8905e] mb-4 font-fellFrench">Our Partner Providers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-robotoCondensed">
            Trusted by leading organizations and institutions across Australia and New Zealand
          </p>
        </div>

        {/* Animated Logo Carousel */}
        <div className="py-10 relative overflow-hidden hidden lg:block">
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            // .animate-scroll:hover {
            //   animation-play-state: paused;
            // }
          `}</style>
          <div className="flex animate-scroll space-x-12 md:space-x-16">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`logo-${logo.src}-${index}`}
                // Changed background to white with a subtle shadow
                className="flex-shrink-0 flex items-center justify-center p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-150 bg-white"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  // Removed 'filter invert' and adjusted opacity for visibility
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Static Grid for Mobile/Tablet */}
        <div className="grid grid-cols-2  lg:hidden gap-6 mt-12">
          {partnerLogos.map((logo, index) => (
            <div
              key={`static-logo-${logo.src}-${index}`}
              // Changed background to white with a subtle shadow
              className="flex items-center justify-center p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-white"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                // Removed 'filter invert' and adjusted opacity for visibility
                className="object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
