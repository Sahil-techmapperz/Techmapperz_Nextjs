import ScrollToTop from '@/app/_Components/ScrollToTop'
import CoCreateall from "@/public/Photos/Co-Createall2.webp";
import Cocreatelab_logo from "@/public/Photos/Cocreatelab_logo.webp";
import Cocreatelabs_Challenges from "@/public/Photos/Cocreatelabs_Challenges.webp";
import Cocreatelabs_Solutions from "@/public/Photos/Cocreatelabs_Solutions.webp";
import Cocreatelabs_Results from "@/public/Photos/Cocreatelabs_Results.webp";
import Cocreatelabs_Inconclusion from "@/public/Photos/Cocreatelabs_Inconclusion.webp";
import ChallengesBg from "@/public/Photos/Challenges_BG.webp";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaArrowRightLong } from 'react-icons/fa';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL


export const metadata = {
  title: "Website Advance Tool | Advance Dashboard | Techmapperz | India",
  description: "Boost productivity with our  website advance tools that ensuring seamless data management, automation, and analytics for smarter decisions.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/cocreatelabs`,
  },
};

const Cocreatelabs = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.webp")' }}>
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
          <p className='text-white text-xl h-full font-[600] flex justify-center items-center'>Techmapperz offers software development, web design, mobile app development, digital marketing, and IT consulting services. </p>
        </div> */}
        <div className='w-full max-w-[1600px] mx-auto text-white flex justify-center flex-col  relative'>
          {/* <p className='absolute top-8 left-5'>Case Studies/IT Services</p> */}
          <Image src={Cocreatelab_logo} className='m-auto py-4' alt='Co-Createall2' />
          <p className='m-auto text-[20px] max-sm:text-[16px] max-sm:text-center font-[600]'>A Comprehensive Mentor and Mentee Dashboard Solution for CoCreateLabs</p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            First of all, a state-of-the-art web tool, the CoCreate Labs AMC Mentor and
            Mentee Dashboard, was created to assist with mentorship and teamwork within the
            CoCreate Labs program. The platform offers an easy and interactive experience
            for participants to engage with mentors, access resources, and track their progress,
            with dedicated dashboards for mentors and mentees. The dashboard, which is
            hosted on Amazon Web Services (AWS), utilizes modern web technologies to
            provide a dynamic and intuitive user interface.
          </p>
          <Image src={CoCreateall} className='w-full' alt='Co-Createall2' />
        </div>

        <div className="w-full bg-gray-900 text-white py-5 px-5 mt-[100px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
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
                <strong>Data Management Complexity:</strong> While the website development the dashboard was built with a sturdy statistics control machine that lets in directors to effortlessly organize, filter, and examine statistics associated with application sports, participants, and resources.
              </p>
              <p className="mb-2">
                <strong>User Access Control:</strong> It was set up to provide different levels of access to administrators based on their roles. By seamlessly connecting with backend systems and APIs, the CRM dashboard can offer instant updates and insights, ensuring administrators always have access to the latest information.
              </p>
              <p className="mb-2">
                <strong>Real-time Updates:</strong> Providing directors with real-time updates and insights into application performance and player
                engagement required seamless integration with backend structures.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={Cocreatelabs_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={Cocreatelabs_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong>The dashboard was built with a sturdy statistics</strong>
              <br />
              control machine that lets in directors to effortlessly organize, filter, and
              examine statistics associated with application sports, participants, and
              resources.

            </p>
            <p className="mb-2">
              <strong> A cutting-edge system :</strong> It was set up to provide different levels of access to administrators based on
              their roles. By seamlessly connecting with backend systems and APIs, the dashboard can offer instant
              updates and insights, ensuring administrators always have access to the latest information.
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
                <strong>Improved Efficiency :</strong>The Admin Dashboard customized and created by Techmapperz has appreciably stepped forward the performance of administrative duties via way of means of supplying directors with a centralized platform to control application sports, participants, and resources.
              </p>
              <p className="mb-2">
                <strong>Enhanced Security : </strong> The implementation of granular user permissions has
                enhanced the security of sensitive data and administrative capabilities,
                ensuring that only authorized employees have access to relevant information.

              </p>
              <p className="mb-2">
                <strong>Better Decision Making : </strong>Real-time updates and insights provided by the CRM dashboard have empowered directors to make informed decisions and take proactive measures to optimize application performance and player engagement.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={Cocreatelabs_Results} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>


        <div className='w-full max-w-[1600px] mx-auto  flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={Cocreatelabs_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Conclusion
              </h2>
            </div>
            <p className="mb-2">
              The CoCreate Labs AMC Super Admin Dashboard (CRM) has effectively addressed the demanding situations confronted by directors, delivering tangible improvements in performance, security, and decision-making capabilities. With its intuitive interface and powerful features, the dashboard continues to play a crucial role in supporting the success of CoCreate Labs.

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
