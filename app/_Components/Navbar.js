"use client"; // Add this directive at the top

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaPhoneAlt, FaInstagram, FaEnvelope, FaLinkedinIn, FaYoutube, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';

import company_logo from "@/public/logo.webp"
import Resources from './Resources';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const pathname = usePathname();



  const sections = [
    {
      title: 'Geospatial Services',
      items: [
        { name: 'GIS Services', link: '/service/gis/gisservice' },
        { name: 'Remote Sensing', link: '/service/gis/remotesensing' },
        { name: 'Drone Services', link: '/service/gis/droneservice' },
        { name: 'Photogrammetry Services', link: '/service/gis/photogrammetry' },
        { name: 'Web GIS Services', link: '/service/gis/webgis' },
      ],
    },
    {
      title: 'IT Services',
      items: [
        { name: 'Mobile APP Development', link: '/service/it/mobiledevelopment' },
        { name: 'Website Development', link: '/service/it/webdevelopment' },
        { name: 'CRM Solution', link: '/service/it/crmservice' },
        { name: 'IT Consultancy', link: '/service/it/itconsultingservice' },
      ],
    },
  ];


  const sections2 = [
    {
      title: 'Blogs',
      items: [
        { name: 'Blogs', link: '/blog?page=1' },
      ],
    },
    {
      title: 'Portfolios',
      items: [
        { name: 'IT Portfolio', link: '/portfolios' },
        { name: 'GIS Portfolio', link: '/portfolios' },
      ],
    },
  ];

  return (
    <>

      <div className={` fixed top-0 w-full h-[50px] z-[200]`}>
        {/* Top Bar with Social Links */}

        {/* <div
          className={`w-full bg-gradient-to-r from-[#376bab] to-[#d2292b] flex max-sm:hidden justify-around items-center py-2 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="flex gap-4 items-center">
            <p className="text-white flex items-center gap-2">
              <FaEnvelope /> info@techmapperz.com
            </p>
            <div className="flex gap-2 items-center">
          
              <a
                href="https://www.linkedin.com/company/techmapperz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-lg transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/techmapperz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-lg transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/Techmapperzllp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-lg transition-colors"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.facebook.com/techmapperz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-lg transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-lg transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://pin.it/2nsXnBd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-lg transition-colors"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
          <p className="text-white text-lg flex gap-2 items-center">
            <FaPhoneAlt /> +91-8961792268 / +91-3335752689
          </p>
        </div> */}



        <div className={` w-full flex justify-between items-center py-3 px-2 z-[200] bg-gray-100 transition-transform duration-300`}
        >
          <div className="md:w-1/5 w-1/2">
            <Link href="/">
              <Image
                src={company_logo}
                alt="company logo"
                priority
                width={200}
              />
            </Link>
          </div>


          <div className="hidden md:flex justify-center items-center absolute right-0">
            <ul className="list-none relative flex gap-6 mr-[80px]">
              <li className="relative text-center">
                <Link
                  href="/"
                  className={`text-lg text-black flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/' ? 'after:w-full' : ''
                    }`}
                >
                  Home
                </Link>
              </li>


              <Resources
                sections={sections}
                title={"Service"}
                subtitle={
                  "Providing cutting-edge IT solutions and GIS services to streamline operations, enhance decision-making, and drive business success."
                }
                color={"#007F7B"}
                link={"/service"}
              />

              <Resources
                sections={sections2}
                title={"Resources"}
                subtitle={
                  "Explore valuable resources on IT and GIS solutions, empowering your business with insights, tools, and industry best practices."
                }
                color={"#007F7B"}
                link={"/blog?page=1"}
              />

              <li className="relative text-center">
                <Link
                  href="/about"
                  className={`text-lg text-black flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/about' ? 'after:w-full' : ''
                    }`}
                >
                  About us
                </Link>
              </li>
              <li className="relative text-center ml-[60px]">
                <Link
                  href="/contact"
                  className={"inline-flex items-center px-6 py-2 rounded-full animate-blink bg-gradient-to-r from-[#376bab] from-40% to-[#d2292b] text-white font-semibold hover:shadow-lg transition-all duration-300"}
                >
                  Contact us
                </Link>
              </li>



            </ul>
          </div>

        </div>


        <div
          ref={btnRef}
          onClick={onOpen}
          className="block text-black md:hidden text-3xl cursor-pointer"
        >
          {!isOpen && <AiOutlineMenu />}
        </div>


        {/* Drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-[1100] bg-black bg-opacity-70">
            <div
              className="fixed top-0 right-0 h-full w-full  bg-[#181818] shadow-lg transform transition-transform duration-300"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute z-[1200] top-5 right-5 text-white text-2xl"
              >
                ✖
              </button>

              {/* Drawer Links */}
              <div className="h-full flex relative  flex-col justify-center items-center gap-8 text-white">
                <div className="text-2xl">
                  <Link href="/" onClick={onClose}>
                    Home
                  </Link>
                </div>
                <div className="text-2xl">
                  <Link href="/service" onClick={onClose}>
                    Service
                  </Link>
                </div>
                <div className="text-2xl">
                  <Link href="/blog?page=1" onClick={onClose}>
                    Resources
                  </Link>
                </div>
                <div className="text-2xl">
                  <Link href="/portfolios" onClick={onClose}>
                    Portfolios
                  </Link>
                </div>
                <div className="text-2xl">
                  <Link href="/about" onClick={onClose}>
                    About Us
                  </Link>
                </div>
                <div className="text-2xl">
                  <Link href="/career" onClick={onClose}>
                    Career
                  </Link>
                </div>
                <div className="text-2xl">
                  <Link href="/contact" onClick={onClose}>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


    </>
  );
};

export default Navbar;





