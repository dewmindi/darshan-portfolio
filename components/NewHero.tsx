// import React from 'react';
// import Image from 'next/image';
// import { Button } from './ui/button';
// import { Phone } from 'lucide-react';
// import Link from 'next/link';

// const NewHero = () => {
//   return (
//     // Main section container. bg-black ensures the left side is solid black.
//     <section className=" relative flex items-stretch bg-black">
//       {/* Background Image and Overlay */}
//       <div className="absolute inset-0 z-0 w-full right-0">
//         <Image
//           src="supremeCourt.png"
//           alt="Lawyer Elizabeth McKinnon in front of Supreme Court"
//           fill
//           className="object-left"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col md:flex-row w-full transition-all duration-900 animate-fadeInSlideDown">
//         <div className="w-full md:w-[100%] bg-gradient-to-r from-black/90 via-black/90 to-transparent flex flex-col justify-center py-16 md:py-24 px-4 md:px-12 text-white">
//           <div className="max-w-xl mx-auto md:mx-0 md:text-left text-center">
//             <p className="text-sm md:text-base  tracking-wide text-[#a8905e] mb-1 font-semibold font-robotoCondensed ">
//               Solicitor Of The Supreme Court of Victoria, Australia
//             </p>
//             <p className=" text-sm md:text-base  tracking-wide text-[#a8905e] font-semibold font-robotoCondensed ">
//               Barrister and Solicitor of the High Court of New Zealand
//             </p>
//             <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-fellFrench text-white">
//               Do You Need Legal Help?
//             </h1>
//             <div className="mb-8 space-y-3 font-robotoCondensed">
//               <p className="text-lg md:text-xl text-gray-200">
//                 Contact Lawyer Darshan immediately
//               </p>
//               <p className="text-base md:text-lg opacity-90 text-gray-300">
//                 Available 24/7 for urgent migration and legal assistance
//               </p>
//             </div>

//             <Link href="tel:0452100888">
//               <Button className="bg-[#a8905e] hover:bg-[#a8905e] text-black font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300">
//                 CALL 0452 100 888
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Layout Area */}
//         <div className="w-full md:w-[60%] flex-grow"></div>
//       </div>
//     </section>

//   );
// }

// export default NewHero;


import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const NewHero = () => {
  return (
    // Main section container. bg-black ensures the left side is solid black.
    <section className="relative flex items-stretch bg-black">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0 w-full right-0">
        <Image
          src="supremeCourt.png"
          alt="Lawyer Elizabeth McKinnon in front of Supreme Court"
          fill
          className="object-left"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full transition-all duration-900 animate-fadeInSlideDown">
        <div className="w-full md:w-[100%] bg-gradient-to-r from-black/90 via-black/90 to-transparent flex flex-col justify-center py-16 md:py-24 px-4 md:px-12 text-white">
          <div className="max-w-xl mx-auto md:mx-0 md:text-left text-center pt-20 md:pt-0"> {/* ADDED PADDING HERE */}
            <h2 className="text-3xl md:text-4xl md:mt-10 font-bold text-[#a8905e] mb-4 font-fellFrench ">Migration Lawyer Australia</h2>
            <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-fellFrench text-white">
              Do You Need Legal Help?
            </h1>
            <div className="mb-8 space-y-3 font-robotoCondensed">
              <p className="text-lg md:text-xl text-gray-200">
                Contact Lawyer Darshan immediately
              </p>
              <p className="text-base md:text-lg opacity-90 text-gray-300">
                Available 24/7 for urgent migration and legal assistance
              </p>
            </div>

            <Link href="tel:0452100888">
              <Button className="bg-[#a8905e] hover:bg-[#a8905e] text-black font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-300">
                CALL 0435 166 653
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Layout Area */}
        <div className="w-full md:w-[60%] flex-grow"></div>
      </div>
    </section>
  );
}

export default NewHero;