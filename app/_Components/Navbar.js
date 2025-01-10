"use client"; // Add this directive at the top

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF, FaPhoneAlt, FaInstagram, FaEnvelope, FaLinkedinIn, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';

import company_logo from "@/public/company_logo.webp"
import styles from './Navbar.module.css';
import Resources from './Resources';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
        { name: 'Latest Blogs', link: '/blog?page=1' },
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
        <div className='w-full bg-[#0072FF] flex max-sm:hidden justify-around items-center'>

          <div className='flex gap-4 items-center'>
            <p className='text-white flex items-center gap-2'> <FaEnvelope /> info@techmapperz.com</p>
            <div className='flex gap-2 py-2 items-center'>
              <a href='https://www.linkedin.com/company/techmapperz/' target="_blank" className="text-white text-lg"> <FaLinkedinIn /> </a>
              <a href='https://www.instagram.com/techmapperz/' target="_blank" className="text-white text-lg">  <FaInstagram /></a>
              <a href='https://x.com/Techmapperzllp' target="_blank" className="text-white text-lg"> <FaTwitter /></a>
              <a href='https://www.facebook.com/techmapperz' target="_blank" className="text-white text-lg"> <FaFacebookF /></a>
              <a href='https://www.youtube.com/channel/UCWogNBwwxTvoX8Ax24j6c6Q' target="_blank" className="text-white text-lg"> <FaYoutube /></a>
              <a href='https://pin.it/2nsXnBd' target="_blank"><FaPinterest className="text-white text-lg" /></a>
            </div>
          </div>

          <p className='text-white text-lg flex gap-2 items-center mt-2 sm:mt-0'> <FaPhoneAlt /> +91-8961792268 / +91-3335752689</p>

        </div>
        <div className={`${styles.navbar} w-full flex justify-between items-center py-3 px-2 z-[200] bg-black bg-opacity-95`}>
          <div className="md:w-1/5 w-1/2">
            <Link href="/">
              <Image
                src={company_logo}
                alt="company logo"
                priority
                className='w-[200px]'
              />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center absolute right-0">
            <ul className="list-none relative flex gap-6 mr-[80px]">
              <li className="relative text-center">
                <Link
                  href="/"
                  className={`text-lg text-white flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/' ? 'after:w-full' : ''
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
                link={"/blog"}
              />

              <li className="relative text-center">
                <Link
                  href="/about"
                  className={`text-lg text-white flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/about' ? 'after:w-full' : ''
                    }`}
                >
                  About us
                </Link>
              </li>
              <li className="relative text-center">
                <Link
                  href="/career"
                  className={`text-lg text-white flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/career' ? 'after:w-full' : ''
                    }`}
                >
                  Careers
                </Link>
              </li>
              <li className="relative text-center ml-[60px]">
                <Link
                  href="/contact"
                  className={`text-lg animate-blink text-white flex items-center relative border-2 px-2 rounded-md hover:bg-white hover:text-black shadow-[0px_0px_8px_0px_#00B0FE] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${pathname === '/contact' ? 'after:w-full' : ''
                    }`}
                >
                  Contact us
                </Link>
              </li>



            </ul>
          </div>

          <div ref={btnRef} onClick={onOpen} className="block text-white md:hidden text-3xl cursor-pointer">
            {!isOpen && <AiOutlineMenu />}
          </div>

          <Drawer
            isOpen={isOpen}
            placement="right"
            size="full"
            onClose={onClose}
            finalFocusRef={btnRef}
            className="relative z-[300]" 
          >
            <DrawerOverlay />
            <DrawerContent backgroundColor="#181818">
              <DrawerCloseButton size="lg" className='text-white  absolute right-4 top-[70px]' />
              <DrawerBody className="h-full flex flex-col justify-center items-center gap-8 text-white">
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/">Home</Link>
                </Box>
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/service">Service</Link>
                </Box>
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/blog">Resources</Link>
                </Box>
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/portfolios">Portfolios</Link>
                </Box>
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/about">About us</Link>
                </Box>
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/career">Career</Link>
                </Box>
                <Box fontSize="2xl" onClick={onClose}>
                  <Link href="/contact">Contact</Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>


    </>
  );
};

export default Navbar;
