import ScrollToTop from '@/app/_Components/ScrollToTop'
import Welho_banner from "@/public/Photos/Welho_banner.png";
import Welho_logo from "@/public/Photos/welho_logo.webp";
import welho_Challenges from "@/public/Photos/welho_Challenges.png";
import welho_Solutions from "@/public/Photos/welho_Solutions.png";
import welho_Results from "@/public/Photos/welho_Results.png";
import welho_Inconclusion from "@/public/Photos/welho_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';


export const metadata = {
	title: "Welho ||  IT Portfolio",
	description: "Techmapperz map your business",
  };

const Welho = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] max-sm:text-[50px] font-bold sm:text-[50px]'>IT Portfolio</p>
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
          <Image src={Welho_logo} className='m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'> Welho.in </p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            Welho is a outstanding online platform providing a huge variety of well
            being services and products to sell holistic fitness and well-being. The
            website serves as a one-forestall vacation spot for customers looking for get
            right of entry to to top rate well being merchandise, professional advice, and
            customized services. Developed with a focal point on consumer revel
            in and accessibility, Welho.in pursuits to empower people to prioritize
            their fitness and lead satisfying lives.
          </p>
          <Image src={Welho_banner} className='w-full' alt='Welho_banner.png' />

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
              <strong>Product Diversity:</strong> Curating and managing a wide variety of wellness
              merchandise, including supplements, health equipment, and personal care items,
              presented a challenge in terms of categorization and organization.
            </p>
            <p className="mb-2">
              <strong>User Experience:</strong>  Ensuring a consistent and intuitive user experience
              across devices and platforms, including desktops, tablets, and smartphones, changed
              into a concern to beautify consumer engagement and satisfaction.
            </p>
            <p className="mb-2">
              <strong>Customer Support:</strong> Providing efficient and responsive customer service to
              address inquiries, resolve issues, and assist customers in navigating the
              website and making informed purchasing decisions was crucial for building trust
              and loyalty.

            </p>
          </div>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={welho_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
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
              <strong> Product Categorization :</strong> A comprehensive categorization system was implemented
              to categorize wellness products into relevant classes and subcategories,
              facilitating easy navigation and product discovery for customers.


            </p>
            <p className="mb-2">
              <strong> Responsive Design :</strong> The website was developed using responsive design
              principles to ensure optimal performance and value across various devices and
              screen sizes, improving accessibility and the user experience.
            </p>
            <p className="mb-2">
              <strong> Live Chat Support:</strong> A live chat support function was integrated into the
              website to provide real-time assistance to customers, enabling them to connect
              with customer service representatives and receive immediate help and guidance
              as needed.

            </p>

          </div>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 bg-gray-900 text-white py-5 px-5" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
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
              <strong>Enhanced Product Discovery :</strong>The implementation of a comprehensive categorization
              system has improved product discovery and navigation for customers, enabling
              them to discover relevant wellness products more easily and efficiently.


            </p>
            <p className="mb-2">
              <strong>Improved User Engagement : </strong> The responsive design of the website has led to
              improved user engagement and satisfaction, with visitors enjoying a consistent
              and intuitive browsing experience across devices.


            </p>
            <p className="mb-2">
              <strong>Efficient Customer Support : </strong>The introduction of live chat support has resulted in
              more efficient and responsive customer service, with customers benefiting from
              immediate help and guidance from knowledgeable representatives.

            </p>
          </div>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={welho_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>
        </div>


        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={welho_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                CONCLUSION
              </h2>
            </div>
            <p className="mb-2">
              Welho has effectively addressed the challenges of product diversity, user
              experience, and customer service, delivering tangible results in the form of
              enhanced product discovery, improved user engagement, and efficient customer
              service. As a result, the website continues to function as a trusted platform
              for individuals seeking access to premium health services and products,
              empowering them to prioritize their health and well-being.

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

export default Welho
