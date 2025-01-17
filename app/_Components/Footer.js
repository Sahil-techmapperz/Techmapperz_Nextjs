// import Link from 'next/link';
// import { FaPinterest } from 'react-icons/fa';
// import Gotop from './Gotop';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
// import footer_logo from "@/public/Photos/footer_logo.png";
// import Image from 'next/image';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <>
//       <div className="w-full bg-[#272525] p-8 max-sm:p-1 max-sm:px-4 relative">
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] justify-between text-white">
//           <div className="flex flex-col justify-center gap-4">
//             <Link href={"/"}>
//               <Image
//                 src={footer_logo}
//                 alt="footer_logo"
//                 className="object-fill mb-6 max-sm:mx-auto"
//                 width={300} // Specify width
//                 height={300} // Specify height
//               />
//             </Link>
//             <p className='text-white font-semibold max-sm:text-[14px]'>Chasing the Vision for a better tomorrow where <br />
//               technology simplifies complex functions.</p>
//             <div className='flex max-sm:w-full bg-white w-fit px-2 py-1 rounded-md gap-2 max-sm:gap-0 '>
//               <input className='border-none max-sm:w-[70%]' placeholder='Enter your email...' />
//               <button className="w-fit max-sm:w-[120px] px-4 py-2 h-[40px] text-white font-bold border-none rounded-md" style={{ background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)" }}>Subscribe</button>
//             </div>
//           </div>

//           <div className='flex gap-4 justify-between'>

//             <div className=" max-sm:text-[12px]">
//               <p className="pb-4 font-bold">Company</p>
//               <ul className="grid grid-cols-1 gap-5 ">
//                 <Link href="/"><li>Home</li></Link>
//                 <Link href="/service"><li>Service</li></Link>
//                 <Link href="/blog"><li>Resources</li></Link>
//                 <Link href="/about"><li>About Us</li></Link>
//                 <Link href="/career"><li>Career</li></Link>
//               </ul>
//             </div>

//             <div className="ml-15 max-sm:text-[12px]">
//               <p className="pb-4 font-bold">Resources</p>
//               <ul className="grid grid-cols-1 gap-5 ">
//                 <Link href="/blog"><li>Blogs</li></Link>
//                 <Link href="/portfolios"><li>Portfolio</li></Link>
//                 <Link href="/contact"><li>Contact Us</li></Link>
//               </ul>
//             </div>

//             <div className="ml-15 max-sm:text-[12px]">
//               <p className="pb-4 font-bold">Utility</p>
//               <ul className="grid grid-cols-1 gap-5 ">
//                 <Link href="/privacy"><li>Privacy Policy</li></Link>
//                 <Link href="/help"><li>Help</li></Link>
//                 <Link href="/sitemap"><li>Sitemap</li></Link>
//               </ul>
//             </div>

//           </div>

//         </div>
//         <Gotop />
//       </div>
//       <div className="w-full h-10 bg-[#4C4848] text-white flex justify-between  items-center font-medium px-[70px] max-sm:justify-center max-sm:items-center max-sm:px-0">
//         <div className="flex gap-2 justify-center items-center max-sm:hidden">
//           <a
//             href="https://www.linkedin.com/company/techmapperz/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-2xl"
//             aria-label="Visit TechMapperz on LinkedIn"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             href="https://www.instagram.com/techmapperz/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-2xl"
//             aria-label="Visit TechMapperz on Instagram"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://x.com/Techmapperzllp"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-2xl"
//             aria-label="Visit TechMapperz on X (formerly Twitter)"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="https://www.facebook.com/techmapperz"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-2xl"
//             aria-label="Visit TechMapperz on Facebook"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-2xl"
//             aria-label="Visit TechMapperz on YouTube"
//           >
//             <FaYoutube />
//           </a>
//           <a
//             href="https://pin.it/2nsXnBd"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white text-2xl"
//             aria-label="Visit TechMapperz on Pinterest"
//           >
//             <FaPinterest />
//           </a>
//         </div>

//         <div className='max-sm:text-[12px]'> Copyright &copy; {currentYear} Techmapperz All Rights Reserved</div>
//       </div>
//     </>
//   );
// };

// export default Footer;









import Link from 'next/link';
import { FaPinterest, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Gotop from './Gotop';
import Image from 'next/image';
import footer_logo from "@/public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full bg-white p-8 max-sm:p-1 max-sm:px-4 relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[50px] justify-between text-black">
          {/* Left Section */}
          <div className="flex flex-col justify-center gap-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src={footer_logo}
                alt="footer_logo"
                className="object-fill mb-6 max-sm:mx-auto"
                width={300}
                height={300}
                priority={true} // Preload image for better performance
              />
            </Link>
            <p className='text-black font-semibold max-sm:text-[14px]'>
              Chasing the Vision for a better tomorrow where <br />
              technology simplifies complex functions.
            </p>
            {/* Subscribe Section */}
            <div className='flex max-sm:w-full max-sm:justify-between  border-[2px] text-black w-fit px-2 py-1 rounded-md gap-2 max-sm:gap-0'>
              <input
                className='border-none max-sm:w-[50%]'
                placeholder='Enter your email...'
                
              />
              <button
                className="w-fit  px-4 py-2 h-[40px] text-white font-bold border-none rounded-md"
                style={{ 
                  background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)", 
                  
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex gap-4 justify-between'>
            {/* Company Links */}
            <div className=" max-sm:text-[12px]">
              <p className="pb-4 font-bold">Company</p>
              <ul className="grid grid-cols-1 gap-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/blog?page=1">Resources</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/career">Career</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="ml-15 max-sm:text-[12px]">
              <p className="pb-4 font-bold">Resources</p>
              <ul className="grid grid-cols-1 gap-5">
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/portfolios">Portfolio</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Utility Links */}
            <div className="ml-15 max-sm:text-[12px]">
              <p className="pb-4 font-bold">Utility</p>
              <ul className="grid grid-cols-1 gap-5">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/help">Help</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <Gotop />
      </div>

      {/* Footer Bottom */}
      <div className="w-full h-10 bg-black text-white flex justify-between items-center font-medium px-[70px] max-sm:justify-center max-sm:items-center max-sm:px-0">
        <div className="flex gap-2 justify-center items-center max-sm:hidden">
          {/* Social Links */}
          <a href="https://www.linkedin.com/company/techmapperz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white text-2xl" />
          </a>
          <a href="https://www.instagram.com/techmapperz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white text-2xl" />
          </a>
          <a href="https://x.com/Techmapperzllp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-white text-2xl" />
          </a>
          <a href="https://www.facebook.com/techmapperz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white text-2xl" />
          </a>
          <a href="https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-white text-2xl" />
          </a>
          <a href="https://pin.it/2nsXnBd" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterest className="text-white text-2xl" />
          </a>
        </div>
        <div className="max-sm:text-[12px]">
          Copyright &copy; {currentYear} Techmapperz All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
