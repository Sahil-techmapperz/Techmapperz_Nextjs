import ScrollToTop from '@/app/_Components/ScrollToTop'
import crm_banner from "@/public/Photos/crm_banner.png";
import crm_logo from "@/public/Photos/crm_logo.png";
import crm_Challenges from "@/public/Photos/crm_Challenges.png";
import crm_Solutions from "@/public/Photos/crm_Solutions.png";
import crm_Results from "@/public/Photos/crm_Results.png";
import crm_Inconclusion from "@/public/Photos/crm_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Cocreatelabs = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className=' text-white mt-[66px] mb-[30px] text-[66px] max-sm:text-[50px] font-bold sm:text-[50px]'>IT Portfolio</p>
        {/* <p className='text-white'>IT Portfolio</p> */}
        {/* <Link
          href="/contact"
          className="relative w-fit text-[18px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
        >
          Contact Now
        </Link> */}
      </div>
      <div className='w-full m-auto bg-gray-900'>
        {/* <div className="w-full h-[70px]" style={{ background: "linear-gradient(90deg, #9F9F9F 0%, #393939 49%, #9F9F9F 100%)" }}>
          <p className='text-white text-xl h-full font-[600] flex justify-center items-center'>TechMapperz offers software development, web design, mobile app development, digital marketing, and IT consulting services. </p>
        </div> */}
        <div className='w-full max-w-[1600px] mx-auto text-white flex justify-center flex-col  relative'>
          {/* <p className='absolute top-8 left-5'>Case Studies/IT Services</p> */}
          <Image src={crm_logo} className='m-auto py-4' alt='Co-Createall2.png' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'> Techmapperz CRM </p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>The sales, marketing, and customer relationship management software is
            designed to provide the factual data and management tools for customer
            interaction within Techmapperz CRM. This powerful tool consolidates sales,
            marketing, and customer service data and activity, presenting it in a neatly
            established Customer Relationship Management framework.
          </p>
          <Image src={crm_banner} className='m-auto' alt='Co-Createall2.png' />

        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 bg-gray-900 text-white py-5 px-5 mt-[100px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  Challenges
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
              <p className="mb-2">
                <strong>Data Management:</strong> Processing and managing large amounts of customer data and ensuring its accuracy.
              </p>
              <p className="mb-2">
                <strong>Integrating the CRM:</strong> Integrating the CRM with other systems and tools used by the organization.
              </p>
              <p className="mb-2">
                <strong>User Adoption:</strong> Ensuring that everyone in the team is at ease, and capable of effectively operating on the new CRM.
              </p>
              <p className="mb-2">
                <strong>Customization:</strong> Adapting to the CRM to the needs of the business.
              </p>
              <p className="mb-2">
                <strong>Reporting and Analytics:</strong> The fourth common challenge that inventors faced centers on the ability to extract
                significant information from the data that is gathered.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={crm_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={crm_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong>Centralized Data Repository :</strong> Adopting an
              easy-to-manage system by implementing a centralized database
              within the existing Techmapperz CRM to maintain customer records.
            </p>
            <p className="mb-2">
              <strong> Seamless Integration :</strong>  Implementing good satisfying APIs and middleware solutions to enable the
              integration of CRM with the other systems.
            </p>
            <p className="mb-2">
              <strong> STraining Programs :</strong>  Providing detailed
              orientational training sessions in order to increase the user
              engagement and effectiveness.
            </p>
            <p className="mb-2">
              <strong>Offering numerous customization options :</strong>  Facilitating the integration of the CRM into business processes.
            </p>
            <p className="mb-2">
              <strong> Advanced Analytics Tools :</strong>   The ability to incorporate advanced analytics and
              effective reporting to analyze customer data and derive valuable insights.
            </p>

          </div>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 bg-gray-900 text-white py-5 px-5 mt-[100px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col-reverse gap-4'>
            <div className="w-[65%] max-sm:w-full">
              <div className="relative w-fit">
                <Image src={ChallengesBg} alt="Challengesbg" />
                <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                  Results
                </h2>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
              <p className="mb-2">
                <strong>Improved Data Accuracy :</strong>Implementation of centralized data management allowed to always have up-to-date and
                accurate customer details.
              </p>
              <p className="mb-2">
                <strong>Enhanced Efficiency : </strong>  In this case, the integration with the existing systems made operational processes more
                efficient.
              </p>
              <p className="mb-2">
                <strong>Higher User Adoption : </strong>Selective implementation and subsequent training helped
                to enhance the effectiveness of general users and increase usage rates.
              </p>
              <p className="mb-2">
                <strong>Business Alignment : </strong>Some elements were developed to increase the level of
                customization so that the CRM could fit the specific needs and functions of a
                business.
              </p>
              <p className="mb-2">
                <strong>Insightful Reporting : </strong> Increased efficiency of the analytics offered better understanding of customers and
                organization’s processes.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={crm_Results} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>


        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={crm_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                CONCLUSION
              </h2>
            </div>
            <p className="mb-2">
              As observed, Techmapperz CRM effectively addressed the challenges
              encountered within the organization, creating enriched opportunities for
              improved data handling and unification, as well as increased user adoption of
              the corresponding tools. Decision-makers were able to customize the CRM options
              and gain valuable analytical insights using the features provided for the
              business, which in turn helped the business meet customer needs and achieve
              positive outcomes.

            </p>

          </div>
        </div>

        <div className="w-full flex flex-col justify-center text-white items-center">
          <h1 className='text-2xl font-bold'>Technology Stacks</h1>
          <p className='w-[40%] max-sm:w-full text-center'>We have used the latest technologies that can justify client requirements at
            the best to deliver bug-free solutions.</p>
        </div>

        <Scrool_Icons icons={[
          <FaReact color="#61DBFB" size={60} />,
          <FaNodeJs color="#68A063" size={60} />,
          <FaPython color="#306998" size={60} />,
          <FaHtml5 color="#E44D26" size={60} />,
          <FaCss3Alt color="#264de4" size={60} />,
          <FaJsSquare color="#F0DB4F" size={60} />
        ]} />

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

        <div>

        </div>

      </div>

    </div>
  )
}

export default Cocreatelabs
