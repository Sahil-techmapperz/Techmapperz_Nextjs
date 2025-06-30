import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis_casestudies_1.webp";
import GIS_OBJECTIVES from "@/public/Photos/GIS_OBJECTIVES.webp";
import welho_Solutions from "@/public/Photos/GIS_portfolio/City_Mapping/Benefits.webp";
import welho_Results from "@/public/Photos/GIS_portfolio/City_Mapping/Benefits.webp";
import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL

export const metadata = {
  title: "Urban Dlanning and Development | City mapping |GIS |Techmapperz ",
  description: "The GIS surveying solutions provided by Techmapperz concentrate on mapping urban areas to deliver accurate and effective project outcomes.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/city_mapping`,
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
          <Image src={Gis_casestudies_1_banner} className='w-[60%] max-sm:w-[90%] my-4 mt-[120px]' alt='Gis_casestudies_1_banner' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'>City mapping</p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            Drones have revolutionized city mapping by providing high-resolution aerial
            imagery that can be integrated into GIS systems. This technology enables cities
            to create detailed and up-to-date maps of urban infrastructure, land use, and
            environmental conditions, supporting informed decision-making and effective resource
            allocation. Drones play a crucial role in
            optimizing emergency response, predicting potential hotspots,
            and enhancing overall public safety.

          </p>
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
                <strong>1. Comprehensive Digital Representation:</strong> Create a detailed and up-to-date digital
                representation of the city's land use, infrastructure, and demographics.
              </p>
              <p className="mb-2">
                <strong>2. Enhanced Data Accuracy:</strong> Improve data accuracy and consistency for informed
                decision-making.
              </p>
              <p className="mb-2">
                <strong>3. Advanced Spatial Analysis:</strong> Enable advanced spatial analysis and modeling to
                support sustainable urban planning.
              </p>
              <p className="mb-2">
                <strong>4. Sustainable Development Support:</strong> Promote sustainable development by identifying
                areas for conservation and assessing the impact of development projects.</p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={GIS_OBJECTIVES} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
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
              <strong> Prioritizing Data Quality  :</strong> Prioritizing data quality, ensuring privacy through robust protocols, and investing in staff training are fundamental.


            </p>
            <p className="mb-2">
              <strong> Standardizing Data Formats  :</strong> Leveraging open-source GIS tools, standardizing data formats, and integrating diverse datasets can significantly enhance efficiency.
            </p>
            <p className="mb-2">
              <strong> High-Resolution Drone Mapping:</strong> Achieving high-resolution and accuracy often necessitates digitization at a large scale, such as 1:100 which is possible using drones.

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
              <h1 className='text-[20px] font-[600]'>City mapping in GIS offers numerous advantages:</h1>
              <ul className='list-disc m-8'>
                <li className='mt-2'>Data-Driven Urban Planning: Data-driven insights for urban planning, resource allocation, and emergency response.</li>
                <li className='mt-2'>Streamlined Operations: Streamlined workflows, reduced costs, and optimized resource utilization.</li>
                <li className='mt-2'>Environmental and Disaster Management: Environmental impact assessment, land use planning, and disaster risk reduction.</li>
                <li className='mt-2'>Strategic Business Decisions: Site selection, market analysis, and investment planning.</li>
              </ul>
              <h1 className='text-[20px] font-[600]'>By effectively utilizing GIS, cities can achieve significant improvements in various
                aspects of urban management and development.</h1>


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
