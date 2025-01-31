import ScrollToTop from '@/app/_Components/ScrollToTop'
import manusherghorbari_banner from "@/public/Photos/manusherghorbari_banner.png";
import manusherghorbari_logo from "@/public/Photos/manusherghorbari_logo.webp";
import manusherghorbari_Challenges from "@/public/Photos/manusherghorbari_Challenges.png";
import manusherghorbari_Solutions from "@/public/Photos/welho_Results.png";
import manusherghorbari_Results from "@/public/Photos/manusherghorbari_Results.png";
import manusherghorbari_Inconclusion from "@/public/Photos/manusherghorbari_Inconclusion.png";
import ChallengesBg from "@/public/Photos/Challenges_BG.png";
import Image from 'next/image';
import Scrool_Icons from '@/app/_Components/Scrool_Icons';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import Link from 'next/link';

const Manusherghorbari = () => {
  return (
    <div id='CaseStudiesITServices' className='bg-gray-900'>
      <ScrollToTop />
      <div className='flex flex-col h-[350px] text-center items-center justify-center bg-cover bg-center' style={{ backgroundImage: 'url("/Photos/Rectangle41.png")' }}>
        <p className='text-white mt-[66px] mb-[30px] text-[66px] max-sm:text-[50px] font-bold sm:text-[50px]'>IT Portfolio</p>
        {/* <p className='text-white'>IT Portfolio</p> */}
        <Link
          href="/contact"
          className="relative w-fit text-[18px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg shadow-[0px_0px_8px_0px_#00B0FE] hover:text-[#D555B5] hover:shadow-[0px_0px_8px_0px_#D555B5] transition-all duration-300"
        >
          Contact Now
        </Link>
      </div>
      <div className='w-full m-auto bg-gray-900'>
        {/* <div className="w-full h-[70px]" style={{ background: "linear-gradient(90deg, #9F9F9F 0%, #393939 49%, #9F9F9F 100%)" }}>
          <p className='text-white text-xl h-full font-[600] flex justify-center items-center'>TechMapperz offers software development, web design, mobile app development, digital marketing, and IT consulting services. </p>
        </div> */}
        <div className='text-white flex justify-center flex-col  relative'>
          {/* <p className='absolute top-8 left-5'>Case Studies/IT Services</p> */}
          <Image src={manusherghorbari_logo} className='m-auto py-4' alt='Welho_logo.png' />
          <p className='m-auto text-[20px] max-sm:text-[16px] font-[600]'> Manusher Ghorbari </p>
          <p className='w-[65%] max-sm:w-full m-auto text-center'>
            The Manusher Ghorbari room booking website is a user-friendly platform
            devoted to simplifying the manner of reserving inns on the Manusher Ghorbari
            guesthouse. Developed with the goal of promoting tourism and offering a
            seamless experience for site visitors, the website offers specified room
            listings, an intuitive booking system, and real-time availability updates. Built
            using PHP, CSS3, and a MySQL database, the website caters to the needs of
            travelers seeking a tranquil escape and aims to enhance engagement with the
            Manusher Ghorbari guesthouse.

          </p>
          <Image src={manusherghorbari_banner} className='mx-auto' alt='Welho_banner.png' />

        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 bg-gray-900 text-white py-5 px-5 mt-[100px]" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%] max-sm:w-full">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Challenges
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <p className="mb-2">
              <strong>Booking Convenience:</strong> The primary goal was to create a user-friendly platform that allows site visitors to book
              rooms effortlessly, considering the diverse options and requirements of travelers.
            </p>
            <p className="mb-2">
              <strong>Real-Time Availability:</strong>  Ensuring accurate and real-time updates on room availability posed a challenge, requiring the integration of a reliable availability calendar and inventory management system.
            </p>
            <p className="mb-2">
              <strong>Payment Security:</strong> Implementing a secure
              payment gateway was essential to build trust and confidence among customers and
              protect their sensitive information during online transactions.
            </p>
          </div>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={manusherghorbari_Challenges} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className='w-full flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[50px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={manusherghorbari_Solutions} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                Solutions
              </h2>
            </div>
            <p className="mb-2">
              <strong>Intuitive Booking System :</strong>A simple and intuitive booking system was customized and developed, allowing customers to easily navigate room listings, select their preferred hotels, and complete the booking process seamlessly.
            </p>
            <p className="mb-2">
              <strong>Real-Time Availability Updates:</strong> An availability calendar was integrated to provide customers with
              real-time information on room availability, enabling them to make informed booking decisions based on their desired
              dates.
            </p>
            <p className="mb-2">
              <strong>Secure Payment Gateway:</strong>
              A secure payment gateway was implemented to facilitate
              online transactions securely, encrypting sensitive data and ensuring the
              confidentiality of customers' payment information.
            </p>

          </div>
        </div>

        <div className="flex max-sm:flex-col-reverse gap-4 bg-gray-900 text-white py-5 px-5" style={{ background: "linear-gradient(90deg, #393939 44.98%, #010101 86.2%)" }}>
          <div className="w-[65%] max-sm:w-full">
            <div className="relative w-fit">
              <Image src={ChallengesBg} alt="Challengesbg" />
              <h2 className="text-xl font-bold absolute inset-0 flex items-center left-[20px] text-black">
                Results
              </h2>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent to-gray-500"></div>
            <p className="mb-2">
              <strong>Enhanced Product Discovery :</strong>The implementation of a complete categorization device has progressed
              product discovery and navigation for customers, permitting them to discover applicable well being
              merchandise greater without difficulty and efficiently.


            </p>
            <p className="mb-2">
              <strong>Improved User Engagement : </strong> The responsive layout of the internet site has led to improved consumer
              engagement and satisfaction, with site visitors taking part in a continuing and intuitive surfing revel in
              throughout gadgets.


            </p>
            <p className="mb-2">
              <strong>Efficient Customer Support : </strong>The introduction of
              live chat support has resulted in more efficient and responsive customer
              service, with customers taking advantage of instant help and guidance from
              knowledgeable representatives.

            </p>
          </div>
          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={manusherghorbari_Results} alt="welho Challenges" className="rounded-lg shadow-lg" />
          </div>
        </div>


        <div className='w-full flex max-sm:flex-col text-white gap-[50px] justify-center items-center py-[70px] px-[30px]'>

          <div className="w-[35%] max-sm:w-full flex items-center justify-center">
            <Image src={manusherghorbari_Inconclusion} alt="Cocreatelabs Challenges" className="rounded-lg shadow-lg" />
          </div>

          <div className="w-[60%] max-sm:w-full">
            <div className="w-fit">
              <h2 className="text-2xl font-bold text-white">
                CONCLUSION
              </h2>
            </div>
            <p className="mb-2">
              The Manusher Ghorbari room booking website has efficaciously addressed the demanding situations of reserving convenience, real-time availability updates, and fee security, ensuing in a unbroken and fun reserving experience for website visitors. By leveraging technology and user-centric design, the website has not only facilitated accommodation bookings but also promoted tourism and engagement with the Manusher Ghorbari guesthouse, contributing to its success and reputation among travelers seeking a tranquil escape.

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

        <div>

        </div>

      </div>

    </div>
  )
}

export default Manusherghorbari
