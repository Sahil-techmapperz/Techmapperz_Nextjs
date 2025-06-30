import ScrollToTop from '@/app/_Components/ScrollToTop'
import Gis_casestudies_1_banner from "@/public/Photos/Gis2_casestudies_1.webp";
import GIS_OBJECTIVES from "@/public/Photos/GIS2_OBJECTIVES.webp";
import welho_Solutions from "@/public/Photos/GIS_portfolio/LULC_Mapping/Solution.webp";
import welho_Results from "@/public/Photos/GIS_portfolio/LULC_Mapping/Benefits.webp";
import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Land Use & Land Cover Mapping for Human Settlement Analysis",
  description: "Techmapperz specializes in Land Use and Land Cover mapping, using GIS to analyze urban, rural, and residential areas with data on population, infrastructure, and land use.",
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
          <Image src={Gis_casestudies_1_banner} className='w-[30%] max-sm:w-[90%] mt-[100px] mb-6' alt='Gis_casestudies_1_banner' />
          <h1 className='m-auto text-[20px] max-sm:text-[16px] font-[600]'>Landuse and Landcover mapping</h1>
          <p className='w-[70%] max-sm:w-full m-auto text-center text-[18px]'>
            Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails identifying and delineating residential zones, urban areas, rural settlements, and other inhabited regions. By overlaying various data layers such as population density, building footprints, infrastructure, and land use, GIS facilitates comprehensive analysis and visualization of habitation patterns. This information is crucial for urban planning, disaster management, public health, and resource allocation.
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
              <ul className='list-disc text-[18px] ml-6'>
                <li>Detailed Mapping of Habitation Areas : GIS allows for the creation of detailed and precise  maps of habitation areas, incorporating various data layers such as land use, infrastructure, and population density.</li>
                <li>Promoting Sustainable Development : Promote sustainable development by identifying areas for conservation and assessing the impact of development projects.</li>
                <li>Environmentally Responsible Development : Understanding habitation distribution and density helps decision-makers identify areas for conservation, development, and eco-friendly infrastructure improvements.</li>
              </ul>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={GIS_OBJECTIVES} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col px-[50px] max-sm:px-[20px] text-white gap-[50px] justify-center items-center py-[50px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={welho_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2 text-[18px]">
              <b>Comprehensive Strategy for Habitation Mapping :</b> Addressing habitation mapping challenges requires a comprehensive strategy
              using crowdsourcing, ground truthing, and remote sensing (e.g., drones) to
              enhance accuracy.
            </p>
            <p className="mb-2 text-[18px]">
              <b>Defining Settlement Boundaries :</b> Settlement boundaries can be defined using a combination of administrative,
              statistical, and physical criteria for greater precision.
            </p>
            <p className="mb-2 text-[18px]">
              <b>Detailed Mapping at an Optimal Scale :</b> A 1:50 scale provides sufficient detail, supporting the creation of multiple
              layers (e.g., building footprints, roads,etc.)</p>

          </div>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 bg-gray-900 text-white py-5 px-[50px] max-sm:px-[20px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  Benefits
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"> </div>
              <ul className='list-disc m-8'>
                <li className='mt-2'>
                  <b>Land Use and Growth Planning :</b> Determines the best use of land, infrastructural requirements, and growth patterns while helping with land conservation and zoning considerations.
                </li>
                <li className='mt-2'>
                  <b>Service Optimization and Development Management :</b> Optimizes service locations based on population density and manages utility, housing, and transportation developments.
                </li>
                <li className='mt-2'>
                  <b>Environmental and Habitation Interaction :</b> Assessing the interaction between habitation and natural elements, providing insights that support sustainable development and environmentally responsible planning.
                </li>
              </ul>


            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={welho_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
            </div>
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
  )
}

export default Gis
