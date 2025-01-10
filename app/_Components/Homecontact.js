'use client'

import Image from "next/image";
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
import home_contact_img from "@/public/Photos/home_contact_img.png";
import { TypeAnimation } from 'react-type-animation';
import { FiMessageSquare} from 'react-icons/fi';

const Homecontact = () => {
    return (
        <div className="bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="relative w-full">
                <div className='w-full'>
                    <img src={"/Photos/Home_contact_banner.png"} alt="Main Banner" className="w-full h-[300px] object-cover" />
                </div>

                <div className="absolute inset-0 flex max-sm:flex-col-reverse justify-between max-sm:px-2 max-sm:justify-center max-sm:items-center px-[30px] py-2">
                    <div className='text-white flex flex-col gap-4 justify-center max-sm:items-center max-sm:gap-0'>
                        <p className='text-4xl max-sm:text-center max-sm:text-[14px] font-bold'> Empowering Your Business with Innovation
                            {/* <p className='text-4xl max-sm:text-[14px] max-sm:ml-0 ml-[30px] font-bold'><span className='text-[#3766BA]'>IT</span> and <span className='text-[#3766BA]'>GIS</span> Solution ”</p> */}

                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'IT Development',
                                    1500, // wait 1s before replacing "Mice" with "Hamsters"
                                    'GIS Solution',
                                    1500
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className='text-[#00B0FE] text-4xl max-sm:text-[14px] font-bold ml-2'
                            />

                        </p>


                        {/* <button
                            className="bg-white text-[#00B0FE] mt-5 ml-[30px] py-2 px-4 w-max rounded-full"><Link href={"/contact"} className="flex gap-2 justify-center items-center">Contact Us <FaArrowRightLong /></Link> </button> */}
                    
                    <Link
                    href="/contact"
                    className="relative  mt-5 ml-5 inline-flex items-center gap-2 uppercase w-fit font-semibold text-[22px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#00B0FE] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
                    <FiMessageSquare className="text-[24px] z-10 transition-colors duration-300 group-hover:text-white" />
                    <span className="z-10 transition-colors duration-300 group-hover:text-white">Contact Us</span>
                  </Link>
                    </div>
                    <div>
                        <Image src={home_contact_img} className="max-sm:w-[100px] w-[250px]" alt="home_contact_img" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Homecontact
