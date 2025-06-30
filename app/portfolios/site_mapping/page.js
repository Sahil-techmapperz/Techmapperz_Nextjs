import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis4_casestudies.webp";
import GIS_OBJECTIVES from "@/public/Photos/GIS4_OBJECTIVES.webp";
import welho_Solutions from "@/public/Photos/GIS_portfolio/Site_Suitability/Solution.webp";
import welho_Results from "@/public/Photos/GIS_portfolio/Site_Suitability/Benefits.webp";
import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL


export const metadata = {
  title: "GIS-Based Approach | Soil Erosion Analysis | Techmapperz |India",
  description: "Leverage GIS mapping for accurate soil erosion analysis and sustainable land planning, ensuring precise environmental assessment and risk mitigation.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/site_mapping`,
  },
};

const Gis = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[250px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.webp")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] font-bold sm:text-[50px]'>GIS Portfolio</p>
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
          <Image src={Gis_casestudies_1_banner} className='w-[30%] max-sm:w-[90%] my-4 mt-[100px] mb-6' alt='Gis_casestudies_1_banner' />
          <p className='m-auto text-[20px] font-[600]'>Site Suitability</p>
          <p className='w-[65%] max-sm:w-full max-sm:px-4 m-auto text-center'>
            Site suitability for block-wise soil erosion involves evaluating a specific location's ability to withstand or mitigate the effects of soil erosion. It involves assessing various factors that influence erosion processes, including rainfall (R), flow accumulation and slope (LS), soil data(K), soilconservation (C), elevation, slope, and land use/land cover.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[50px] text-white py-5"
          style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex gap-4 max-sm:flex-col-reverse'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  OBJECTIVES
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
              <h1 className='text-[18px] font-semibold'>The primary objectives of a site suitability assessment for block-wise soil erosion are to:
              </h1>
              <ul className='list-disc text-[18px] ml-6'>
                <li>
                  <span className='font-semibold'>
                    Identifying Erosion-Susceptible Locations
                  </span>
                  : Determination of locations within a region that are particularly prone to block-wise
                  soil erosion.
                </li>
                <li>
                  <span className='font-semibold'>
                    Assessing Erosion Magnitude and Severity
                  </span>
                  : Evaluation of the potential magnitude and severity of erosion across different areas.
                </li>
                <li>
                  <span className='font-semibold'>
                    Prioritizing Erosion Control Measures
                  </span>
                  : Identification of areas which require immediate attention for implementing erosion
                  control measures.
                </li>
              </ul>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={GIS_OBJECTIVES} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>


        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={welho_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <ul className="list-disc ml-6 text-[18px]">
              <li>
                <span className="font-semibold">
                  GIS-Based Approach for Soil Erosion Analysis
                </span>
                : A comprehensive GIS-based approach is essential for effectively addressing
                challenges in site suitability analysis for block-wise soil erosion.
              </li>
              <li>
                <span className="font-semibold">
                  Leveraging Advanced GIS Tools
                </span>
                : Advanced GIS tools and techniques help overcome data limitations, account for
                spatial variability, and consider temporal dynamics.
              </li>
              <li>
                <span className="font-semibold">
                  Integrating Remote Sensing and Modelling
                </span>
                : Combining remote sensing data, hierarchical modeling, and integrated GIS
                analysis provides valuable insights into erosion risks and informs decision-making.
              </li>
            </ul>

          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[50px] text-white py-5"
          style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex gap-4 max-sm:flex-col-reverse'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  Benefits
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
              <ul className='list-disc text-[18px] m-8'>
                <li className='mt-2'>
                  <span className='font-semibold'>
                    Identifying Vulnerable Areas and Mitigation
                  </span>
                  : Identification of vulnerable areas and implementation of targeted mitigation measures.
                </li>
                <li className='mt-2'>
                  <span className='font-semibold'>
                    Soil Resource Protection
                  </span>
                  : Protection of soil resources essential for sustainable farming.
                </li>
                <li className='mt-2'>
                  <span className='font-semibold'>
                    Ecosystem and Biodiversity Preservation
                  </span>
                  : Preservation of ecosystems and biodiversity.
                </li>
                <li className='mt-2'>
                  <span className='font-semibold'>
                    Hazard Mitigation
                  </span>
                  : Mitigation of potential hazards associated with soil erosion, such as landslides and flooding.
                </li>
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
