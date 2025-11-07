import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Agricultural_Mapping.webp";
import GIS_OBJECTIVES from "@/public/Photos/GIS_portfolio/Agriculture_Mapping/Objective.webp";
import welho_Solutions from "@/public/Photos/GIS_portfolio/Agriculture_Mapping/Solution.webp";
import welho_Results from "@/public/Photos/GIS_portfolio/Agriculture_Mapping/Benefits.webp";

import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL

export const metadata = {
  title: "Precision GIS solutions | land Analysis |Agriculture mapping |Techmapperz",
  description: "Techmapperz provides precise GIS surveying services, including land and agricultural mapping, tailored to meet your project needs with accuracy and efficiency.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/agricultural_mapping`,
  },
};


const Gis = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[250px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.webp")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] max-sm:text-[50px] font-bold sm:text-[50px]'>GIS Portfolio</p>
        {/* <p className='text-white'>GIS Portfolio</p> */}
        {/* <Link
          href="/contact"
          className="relative w-fit text-[18px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
        >
          Contact Now
        </Link> */}
      </div>
      <div className='w-full  bg-black'>
        <div className='w-full max-w-[1600px] mx-auto text-white flex justify-center pb-[50px] items-center flex-col  relative'>
          <Image src={Gis_casestudies_1_banner} className='w-[40%] object-contain max-sm:w-[90%] my-4 ' alt={Gis_casestudies_1_banner} />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'>Agricultural Mapping</p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            Agricultural mapping functions as an efficient methodology that enables the examination and supervision and management of agricultural resources. Integrated use of geospatial data produces beneficial crop-related intelligence which aids farmers and decision-making groups to maximize their agricultural results. Agricultural mapping system combines spatial analysis, remote sensing technology alongside field investigations which allows precise farming and better sustainability of resources as well as improved yield predictions.          </p>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-[50px] bg-gray-900 text-white py-[50px] px-[65px] max-sm:px-[20px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt={ChallengesBg} />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  OBJECTIVES
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
              <p className="mb-2">
                <strong>1.	Precision Farming:</strong>
                The implementation of Precision Farming applies area-specific management procedures based on spatial data for the purpose of increasing crop yields while minimizing resource use losses.               </p>
              <p className="mb-2">
                <strong>2.	Soil and Crop Analysis: </strong>
                The analysis of soil and crops includes mapping land conditions for the improvement of both soil sustainability and crop productivity levels.              </p>
              <p className="mb-2">
                <strong>3.	Climate and Environmental Monitoring:</strong>
                The monitoring system analyzes weather patterns together with drought levels and environmental elements that influence agricultural operations.              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={GIS_OBJECTIVES} alt={GIS_OBJECTIVES} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={welho_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong>Remote Sensing Integration:</strong> Crop health status and vegetation stress identification occurs through the combination of satellite photos and UAV drone information.
            </p>
            <p className="mb-2">
              <strong>Soil and Water Mapping:</strong> A comprehensive method to produce detailed soil composition and water resource mapping needs exists for establishing optimal irrigation practices together with effective fertilization techniques.
            </p>
            <p className="mb-2">
              <strong>Yield Prediction Models:</strong>Supply chain optimization together with crop production estimation becomes possible through historical and multi-source data analysis in GIS formats.
            </p>
          </div>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-[50px] bg-gray-900 text-white py-[50px] px-[65px] max-sm:px-[20px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt={ChallengesBg} />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  Benefits
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
              <ul className='list-disc m-8'>
                <li className='mt-2'>
                  Enhanced Decision-Making: The precise data allows farmers together with policy advocates to make informed decisions based on accurate information.
                </li>
                <li className='mt-2'>
                  Sustainable Land Management: Sustainable Land Management assists in implementing conservation measures combined with tools that help find proper land use solutions and prevent soil from harming natural ecosystems.                 </li>
                <li className='mt-2'>
                  Disaster Preparedness and Mitigation: The system assists in predicting and handling agricultural dangers and threats including pest outbreaks and droughts as well as floods.                </li>
              </ul>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={welho_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className="py-8 sm:py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12"></div>
          {/* CTA Section */}
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="p-4 sm:p-6 md:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
              {/* <p className="text-gray-400 text-sm sm:text-base mb-6">
              Let's discuss how we can help transform your {industry.name.toLowerCase()} business
            </p> */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Gis
