"use client";

import { useState } from "react";
import CaseStudyCard from "@/app/_Components/CaseStudyCard"; // Corrected import
import ScrollToTop from "../_Components/ScrollToTop";
import Link from "next/link";
import Portfolio_banner from "@/public/Photos/Portfolio_banner.png"
import Image from "next/image";

const Casestudies = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div id='CaseStudiesITServices'>
      <ScrollToTop />
      <div className='relative w-full'>
        <Image src={Portfolio_banner} className='w-full h-[500px]' alt="About Us Banner" />
        <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl text-white font-bold'>Portfolios</h1>
          <p className='text-center text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <Link href="/contact" className="text-lg flex items-center border-2 px-4 py-2 mt-4 font-semibold uppercase rounded-md bg-white text-[#00B0FE] shadow-[0px_0px_8px_0px_#00B0FE]">Let's Connect</Link>
        </div>
      </div>
      {/* <Scrolltextanimation text="TechMapperz offers software development, web design, mobile app development." /> */}
      <div className='bg-gray-800 h-auto flex max-sm:px-0 px-16 justify-center items-center sm:flex-col sm:px-0'>
        <div className='w-[90%] m-auto'>
          <div className="flex justify-center space-x-8 border-t-2 mt-4 border-b-2 border-gray-700 py-4">
            {["All", "IT", "GIS"].map((category) => (
              <button
                key={category}
                className={`text-lg font-medium px-4 py-2 transition-colors duration-300 ${filter === category
                    ? "text-red-500 font-bold"
                    : "text-gray-400 hover:text-red-400"
                  }`}
                onClick={() => handleFilterChange(category)}
              >
                {category === "IT"
                  ? "IT Case Studies"
                  : category === "GIS"
                    ? "GIS Case Studies"
                    : "All"}
              </button>
            ))}
          </div>
          <CaseStudyCard filter={filter} />
        </div>
      </div>


    </div>
  );
}

export default Casestudies;
