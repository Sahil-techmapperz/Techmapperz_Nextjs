"use client";

import { useState } from "react";
import CaseStudyCard from "@/app/_Components/CaseStudyCard";
import ScrollToTop from "../_Components/ScrollToTop";
import Link from "next/link";
import Portfolio_banner from "@/public/Photos/Portfolio_banner.png";
import Image from "next/image";

const Casestudies = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div id='CaseStudiesITServices' className="bg-gray-900">
      <ScrollToTop />
      <div className='relative w-full'>
        <Image src={Portfolio_banner} className='w-full h-[500px] object-cover' alt="Portfolio Banner" />
        <div className='absolute inset-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl text-white font-bold'>Our Portfolio</h1>
          <p className='text-center text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Explore our comprehensive portfolio of IT and GIS solutions
          </p>
          <div className="flex gap-6 mt-8">
            <Link href="/portfolios/it" className="text-lg flex items-center border-2 px-6 py-3 font-semibold uppercase rounded-md bg-white text-[#00B0FE] hover:bg-[#00B0FE] hover:text-white transition-all duration-300">
              IT Portfolio
            </Link>
            <Link href="/portfolios/gis" className="text-lg flex items-center border-2 px-6 py-3 font-semibold uppercase rounded-md bg-white text-[#00B0FE] hover:bg-[#00B0FE] hover:text-white transition-all duration-300">
              GIS Portfolio
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-gray-900 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="flex justify-center space-x-8 border-t-2 border-b-2 border-gray-700 py-6">
            {["All", "IT", "GIS"].map((category) => (
              <button
                key={category}
                className={`text-lg font-medium px-6 py-2 rounded-md transition-all duration-300 ${
                  filter === category
                    ? "bg-[#00B0FE] text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category === "IT"
                  ? "IT Case Studies"
                  : category === "GIS"
                    ? "GIS Case Studies"
                    : "All Projects"}
              </button>
            ))}
          </div>
          <div className="mt-12">
            <CaseStudyCard filter={filter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casestudies;
