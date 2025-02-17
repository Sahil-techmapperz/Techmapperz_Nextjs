import ScrollToTop from '@/app/_Components/ScrollToTop'
import shrc_banner from "@/public/Photos/shrc_banner.png";
import Shrc_logo from "@/public/Photos/Shrc_logo.webp";
import shrc_Challenges from "@/public/Photos/shrc_Challenges.png";
import shrc_Solutions from "@/public/Photos/shrc_Solutions.png";
import shrc_Results from "@/public/Photos/shrc_Results.png";
import shrc_Inconclusion from "@/public/Photos/shrc_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = {
  title: "A Secure Platform for Innovation & Community Engagement",
  description: "Techmapperz map your business",
};

const Shrc = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] max-sm:text-[50px]  font-bold sm:text-[50px]'>IT Portfolio</p>
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
          <Image src={Shrc_logo} className='w-[50px] m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] max-sm:text-[16px] max-sm:text-center font-[600]'>Transforming the Welfare Landscape: Introducing the Special Human Rights Commission (SHRC) Platform</p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            First of all, a specialized platform called the Special Human Rights Commission (SHRC) aims to encourage innovation and cooperation among welfare societies. The Web Design was built using the CodeIgniter 4 framework and PHP, SHRC provides a secure environment for members to communicate and engage. By offering features like personalized notifications and two-step OTP verification, the website enhances community engagement while ensuring security.
          </p>
          <Image src={shrc_banner} className='mx-auto' alt='Welho_banner.png' />

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
                <strong>Security Issues: </strong>
                In order to build trust and protect sensitive member data, welfare societies require a secure
                platform.
              </p>
              <p className="mb-2">
                <strong>Absence of Engagement:</strong>  Conventional means of communication might not be able to successfully involve
                participants and foster a feeling of community.
              </p>
              <p className="mb-2">
                <strong>Complicated Registration Process:</strong> Protracted registration processes may discourage prospective users from
                signing up for the platform.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={shrc_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        <div className='w-full max-w-[1600px] mx-auto  flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={shrc_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong> Two-Step OTP Verification :</strong> During the website development, security improvements and authenticated member registrations were prioritized, and a strong verification procedure was implemented.
            </p>
            <p className="mb-2">
              <strong> Personalized Notifications:</strong>  Members' mobile devices display personalized notifications, which
              boost interaction and communication.
            </p>
            <p className="mb-2">
              <strong>Streamlined Registration Process:</strong>
              The registration process was improved to make it easier for more members to join, with enhanced security measures implemented during website development.
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
                <strong>Two-step OTP Verification :</strong> Implemented for enhanced
                protection of sensitive information and secure member accounts.
              </p>
              <p className="mb-2">
                <strong>Enhanced Community Engagement : </strong> Sending out birthday greetings and notifications in a personalized
                way made members feel like they belonged, which increased their engagement in events held in the
                community.
              </p>
              <p className="mb-2">
                <strong>Enhanced User Experience : </strong> All members had a seamless and joyful experience thanks
                to the user-friendly interface and streamlined registration process, which
                increased user satisfaction.
              </p>
            </div>
            <div className="w-[35%] max-sm:w-full flex items-center justify-center">
              <Image src={shrc_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>



        <div className='w-full max-w-[1600px] mx-auto flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={shrc_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                CONCLUSION
              </h2>
            </div>
            <p className="mb-2">
              The SHRC India website has effectively addressed the challenges faced by
              welfare societies in communication, aid accessibility, and security, resulting
              in improved collaboration, enhanced aid accessibility, and strengthened
              community engagement. By providing a centralized platform for communication and
              resource sharing, the website has empowered welfare societies to work together
              more effectively towards their common goals, ultimately contributing to the
              development of society and the well-being of its members.
            </p>

          </div>
        </div>

        <div className="w-full flex flex-col justify-center text-white items-center">
          <h1 className='text-2xl font-bold'>Technology Stacks</h1>
          <p className='w-[40%] max-sm:w-full  text-center'>We have used the latest technologies that can justify client requirements at
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

export default Shrc
