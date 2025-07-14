"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import useEffect hook
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the user has scrolled past a certain point
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle the mobile menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("home")

  // Effect to add and remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Define the scroll threshold. This should be roughly the height of your hero section.
      // You might need to adjust this value (e.g., 600, 700, 800) based on your hero section's actual height.
      // A more robust solution would involve using a ref to measure the hero section's height.
      const scrollThreshold = 600; // Example: change header after scrolling 600px
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and unmount backdrop-blur-md 

  const scrollToSection = (sectionId: string, href?: string) => {
        setIsMenuOpen(false);

        if (href) {
            router.push(href);
            return;
        } else {
            router.push(`/#${sectionId}`);
        }
    };

    const navItems = [
        { id: "home", label: "Home"},
        { id: "about", label: "About Us" },
        { id: "areas", label: "Services" },
        { id: "standsout", label: "Portfolio" },
        { id: "blogs", label: "Packages" },
        { id: "contact", label: "Contact" },
    ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-2 transition-colors duration-300 bg-white shadow-md
      ${scrolled ? 'bg-[#2B3440]' : ''}`}> {/* Dynamic background */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0 ">
          <Link href="/" className="flex items-center">
            <Image
              src="/bg-remove-logo1.png"
              alt="darshan"
              width={180}
              height={30}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className=" md:block flex space-x-6 gap-10">
           
          {navItems.map((item)=>(
            <button
              key={item.id}
              onClick={()=> scrollToSection(item.id)}
              className={`font-robotoCondensed text-lg transition-colors duration-300 ${scrolled ? 'text-[#D4AE6E] hover:text-black' : 'text-balck' } ${activeSection === item.id ? "text-black" : ""}`}>
              {item.label}
            </button>
          ))}
        </nav>
        

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none transition-colors duration-300
            ${scrolled ? 'text-[#D4AE6E]' : 'text-white'}`}> {/* Dynamic icon color */}
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-40">
          
          <ul className="flex flex-col space-y-6 text-center">
              <li><Link href="#" className="text-[#D4AE6E] font-fellFrench hover:text-white text-xl">Home</Link></li>
              <li><Link href="#" className="text-[#D4AE6E] font-fellFrench hover:text-white text-xl">About</Link></li>
              <li><Link href="#" className="text-[#D4AE6E] font-fellFrench hover:text-white text-xl">Areas Of Practice</Link></li>
              <li><Link href="#" className="text-[#D4AE6E] font-fellFrench hover:text-white text-xl">Blogs & Artciles</Link></li>
              <li><Link href="#" className="text-[#D4AE6E] font-fellFrench hover:text-white text-xl">Contact</Link></li>
          </ul>
          {/* Close button for mobile menu */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}


//  <header className="fixed top-0 left-0 w-full z-50 bg-transparent  py-2 bg-transparent backdrop-blur-sm">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/bg-remove-logo1.png"
//                 alt="darshan"
//                 width={180}
//                 height={30}
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation Links */}
//           <nav className="hidden md:block">
//             <ul className="flex space-x-6 gap-10">
            //   <li><Link href="#" className="text-[#D4AE6E] hover:text-white font-robotoCondensed text-xl">Home</Link></li>
            //   <li><Link href="#" className="text-[#D4AE6E] hover:text-white font-robotoCondensed text-xl">About</Link></li>
            //   <li><Link href="#" className="text-[#D4AE6E] hover:text-white font-robotoCondensed text-xl">Areas Of Practice</Link></li>
            //   <li><Link href="#" className="text-[#D4AE6E] hover:text-white font-robotoCondensed text-xl">Blogs & Artciles</Link></li>
            //   <li><Link href="#" className="text-[#D4AE6E] hover:text-white font-robotoCondensed text-xl">Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-white focus:outline-none">
//               {/* Hamburger icon */}
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu (conditionally rendered) */}
//         {isMenuOpen && (
//           <div className="md:hidden fixed inset-0 bg-[#D4AE6E]/80 backdrop-blur-md flex flex-col items-center justify-center space-y-2 z-40">
//             <ul className="flex flex-col  text-center mt-8">
            //   <li><Link href="#" className="text-white hover:text-black font-robotoCondensed text-xl" onClick={toggleMenu}>Home</Link></li>
            //   <li><Link href="#" className="text-white hover:text-black font-robotoCondensed text-xl" onClick={toggleMenu}>About</Link></li>
            //   <li><Link href="#" className="text-white hover:text-black font-robotoCondensed text-xl" onClick={toggleMenu}>Reviews</Link></li>
            //   <li><Link href="#" className="text-white hover:text-black font-robotoCondensed text-xl" onClick={toggleMenu}>Contact</Link></li>
//             </ul>
//             {/* Close button for mobile menu */}
//             <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//               </svg>
//             </button>
//           </div>
//         )}
//       </header>