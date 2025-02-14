import ScrollToTop from '@/app/_Components/ScrollToTop'
import premierautosource_banner from "@/public/Photos/premierautosource_banner.png";
import premierautosource_logo from "@/public/Photos/premierautosource_logo.webp";
import premierautosource_Challenges from "@/public/Photos/premierautosource_Challenges.png";
import premierautosource_Solutions from "@/public/Photos/premierautosource_Solutions.png";
import premierautosource_Results from "@/public/Photos/premierautosource_Results.png";
import premierautosource_Inconclusion from "@/public/Photos/premierautosource_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Premierautosource = () => {
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
          <Image src={premierautosource_logo} className='m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'> PremierAutoSource </p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            PremierAutoSource is a dynamic online platform dedicated to providing comprehensive information and resources related to automobiles. Developed with a focus on user experience and functionality, the website services is a one-stop destination for automotive enthusiasts, offering information, reviews, guides, and industry insights. Powered by modern web technologies, Premier AutoSource delivers a continuous and interactive experience for visitors, catering to their diverse needs and interests within the automotive world.

          </p>
          <Image src={premierautosource_banner} className='mt-[20px] w-full' alt='Welho_banner.png' />

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
                <strong>Content Management:</strong>
                Curating and managing a large volume of dynamic content,
                including news updates, articles, and videos, posed a challenge in
                terms of organization and accessibility.
              </p>
              <p className="mb-2">
                <strong>User Engagement:</strong>  Encouraging energetic engagement and participation from site visitors in the form of
                comments, shares, and interactions with the website's resources presented a challenge.
              </p>
              <p className="mb-2">
                <strong>Mobile Responsiveness:</strong>  Ensuring that the website is fully responsive and
                optimized for mobile devices to provide a steady engaging user experience
                across all platforms was a key undertaking.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={premierautosource_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={premierautosource_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Content Management System :</strong> A robust content management system (CMS) was
              implemented to streamline the process of content creation, editing, and
              publishing, enabling efficient organization and categorization of resources.

            </p>
            <p className="mb-2">
              <strong> Interactive Features :</strong>  Interactive factors
              inclusive of remark sections, social media sharing buttons, and user polls,
              were integrated into the website to encourage visitor engagement and
              interaction with the content.
            </p>
            <p className="mb-2">
              <strong> Mobile Optimization:</strong>
              The website underwent rigorous testing and optimization
              to ensure compatibility and responsiveness across a wide range of devices and
              screen sizes, providing a consistent browsing experience for mobile users.
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
                <strong>Leading Resource Hub :</strong> PremierAutoSource.in has become a leading resource hub
                for automobile enthusiasts, offering a wealth of information and insights
                across various automobile topics.
              </p>
              <p className="mb-2">
                <strong>Increased User Engagement : </strong>  The implementation of interactive capabilities has brought about improved
                user engagement and participation, with site visitors actively commenting, sharing, and interacting with the
                website's content material.

              </p>
              <p className="mb-2">
                <strong>Enhanced Mobile Experience : </strong> The website's cellular optimization efforts have led to a substantially stepped
                forward user revel in for cellular site visitors, main to better retention costs and improved site visitors from
                cellular gadgets.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={premierautosource_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>


        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={premierautosource_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                CONCLUSION
              </h2>
            </div>
            <p className="mb-2">
              PremierAutoSource has effectively addressed the challenges of content
              management, user engagement, and mobile responsiveness, delivering tangible
              results in the form of a comprehensive resource hub, enhanced user engagement,
              and a stronger mobile experience. As a result, the website continues to function
              as a valuable online destination for automobile enthusiasts, driving continued
              growth and success within the automobile industry.
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

export default Premierautosource
