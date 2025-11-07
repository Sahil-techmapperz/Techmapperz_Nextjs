import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Georeferencing_of_Maps.webp";
import GIS_OBJECTIVES from "@/public/Photos/GIS_OBJECTIVES.webp";
import welho_Solutions from "@/public/Photos/GIS_portfolio/Georeferencing_of_Maps/Solution.webp";
import welho_Results from "@/public/Photos/GIS_portfolio/Georeferencing_of_Maps/Benefits.webp";
import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL

export const metadata = {
  title: "Converting Static Map in GIS | Georefrencing | GIS |Techmapperz",
  description: "Techmapperz improves GIS quality through its mapping function that assigns real-world positions to geographic data. Adding plot numbers functions as an essential system to enhance land planning and management operations.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/georeferencing_of_maps`,
  },
};


const Gis = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[250px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.webp")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] max-sm:text-[50px] font-bold sm:text-[50px]'>GIS Portfolio</p>
      
      </div>
      <div className='w-full  bg-black'>
        <div className='w-full max-w-[1600px] mx-auto text-white flex justify-center pb-[50px] items-center flex-col  relative'>
          <Image src={Gis_casestudies_1_banner} className='w-[40%] object-contain max-sm:w-[90%] my-4 ' alt='Gis_casestudies_1_banner' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'>Georeferencing of Maps</p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            Georeferencing is the crucial process of assigning real-world geographic coordinates to scanned maps and images, transforming them from static representations into dynamic spatial data. By identifying corresponding points on the map and in a GIS, users can mathematically align the image to a specific coordinate system. A critical step following georeferencing is incorporating attributes such as plot numbers and village names to enrich the dataset. This enhances the map's utility by providing detailed information about land parcels, enabling accurate land administration, property management, and resource planning.
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
                <strong>1. Efficient Land Management :</strong> Facilitating the maintenance of accurate land records, enabling precise property assessments, and supporting effective land use planning.
              </p>
              <p className="mb-2">
                <strong>2.	Data Integration : </strong> Combining cadastral data with other spatial datasets (e.g., topography, infrastructure, and environmental data) for comprehensive analysis and visualization.
              </p>
              <p className="mb-2">
                <strong>3. Accurate  Positioning :</strong>Aligning cadastral maps with real-world geographic coordinates to ensure that land parcels, boundaries, and features are accurately positioned on the Earth's surface.
              </p>
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
              <strong>Image Enhancement  :</strong> Enhancing map quality using advanced digital processing techniques.
            </p>
            <p className="mb-2">
              <strong>Ground Control Point Verification :</strong> Utilizing  multiple reliable ground control points for accuracy.
            </p>
            <p className="mb-2">
              <strong> Scale Adjustment:</strong> Application of appropriate scaling factors to address discrepancies in scale.
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
                <li className='mt-2'>Spatial Analysis: Facilitates the identification of trends over time and this also helps in the study of overlay analysis, change detection.</li>
                <li className='mt-2'>Land Use Planning: Supports decision-making by understanding environmental changes, urban planning, and disaster management.</li>
                <li className='mt-2'>Legal and Boundary Disputes: Property boundaries, land ownership, and historical land disputes can be analyzed, providing valuable insights for legal and administrative purposes for further property mapping.</li>
              </ul>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={welho_Results} alt={welho_Results} className="rounded-lg shadow-lg" />
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
