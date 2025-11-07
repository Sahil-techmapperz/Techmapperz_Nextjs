import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis3_casestudies.webp";
import GIS_OBJECTIVES from "@/public/Photos/GIS3_OBJECTIVES.webp";
import welho_Solutions from "@/public/Photos/GIS_portfolio/Industrial_Region_Mapping_&_Planning/Solution.webp";
import welho_Results from "@/public/Photos/GIS_portfolio/Industrial_Region_Mapping_&_Planning/Benefits.webp";
import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL


export const metadata = {
  title: "Industrial Mapping | Techmapperz | Growth & Sustainability",
  description: "Techmapperz provides services for industry mapping which generates spatial insights needed for planning resources effectively and making data-centered decisions.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/industrial_mapping`,
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
      <div className='w-full m-auto bg-black'>
        <div className='w-full max-w-[1600px] mx-auto text-white  flex justify-center items-center flex-col  relative mb-[50px]'>
          <Image src={Gis_casestudies_1_banner} className='w-[40%] max-sm:w-[90%] mt-[100px] mb-6' alt='Gis_casestudies_1_banner' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'>Industrial Region Mapping & Planning</p>
          <p className='w-[70%] max-sm:w-full m-auto text-center text-[18px]'>
            Industrial region planning refers to the process of designing, managing, and developing industrial areas to optimize economic growth, sustainability, and quality of life. Industrial region planning involves designing and managing industrial areas to optimize efficiency, sustainability, and economic growth, identifying suitable locations for industrial development, designing infrastructure such as transportation, utilities, etc., Zoning and land-use planning.
          </p>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 px-[50px] max-sm:px-[20px] bg-black text-white py-5" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  OBJECTIVES
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
              <h1 className='text-[18px] font-semibold'>Industrial planning requires identifying and developing industrial clusters and corridors using a data-driven approach.
              </h1>
              <ul className='list-disc text-[18px] ml-6'>
                <li><strong>Data-Driven Industrial Planning:</strong>
                  Industrial planning requires identifying and developing industrial clusters and
                  corridors using a data-driven approach.
                </li>
                <li><strong>Challenges in Landbank Identification:</strong>
                  Identifying new landbanks for industrial development is constrained by
                  limited spatial data coverage and availability.
                </li>
                <li><strong>Data Integration and Interoperability Issues:</strong>
                  Inadequate data integration and interoperability hinder infrastructural
                  development decisions for new landbanks.
                </li>
                <li><strong>Adapting to Rapid Technological Changes:</strong>
                  Keeping pace with rapidly evolving technology and data requirements is challenging
                  for monitoring industrial development activities.
                </li>
                <li><strong>Ensuring Data Accuracy and Precision:</strong>
                  Achieving data accuracy and precise land measurements is crucial for effective
                  planning and development.
                </li>
              </ul>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={GIS_OBJECTIVES} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col px-[50px] max-sm:px-[20px] text-white gap-[50px] justify-center items-center py-[50px]'>

          <div className="w-[35%]  max-sm:w-full flex items-center justify-center">
            <Image src={welho_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2 text-[18px]">
              <ul className='list-disc ml-6'>
                <li><strong>Drone Survey for Industrial Regions:</strong> Flying drones over
                  existing industrial regions and newly acquired landbanks for industrial
                  development.
                </li>
                <li><strong>Image Processing for Data Analysis:</strong> Processing captured drone images to
                  extract valuable insights for mapping and planning.
                </li>
                <li><strong>GIS Software for Industrial Mapping:</strong> Utilizing GIS software and its
                  specialized extensions for industrial mapping, including utility networking and
                  connectivity.
                </li>
                <li><strong>Enhanced Operations and Site Selection:</strong> Leveraging GIS tools to improve
                  operations, optimize utility networks, and support on-site selection for
                  industrial regions.
                </li>
              </ul>

            </p>

          </div>
        </div>

        <div className="flex  gap-4 bg-gray-900 text-white py-5 px-[50px] max-sm:px-[20px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  Benefits
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
              <ul className='list-disc text-[18px] m-8'>
                <li className='mt-2'>Digitization of Vacant Landbanks : Vacant landbanks are digitized based on industrial setup plans, aiding industrialists in new ventures.
                </li>
                <li className='mt-2'>Transport Connectivity Assessment : Evaluates transport connectivity, including roads (NH, SH), railways, and airports leading planning and construction of road networks near industrial regions.
                </li>
                <li className='mt-2'>Infrastructure Development in Existing Regions : Creation of  new infrastructure in existing industrial areas to meet market demands.
                </li>
                <li className='mt-2'>Proper Drainage Network Planning : Identification and planing of proper drainage networks for industrial regions.
                </li>
                <li className='mt-2'>LULC Mapping for Industrial Development : Land use and land cover mapping  (LULC) identifies land utilization areas for creating new industrial zones.
                </li>
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
