import ScrollToTop from './_Components/ScrollToTop';
import CustomCarousel from './_Components/HomeCarousel';
import Features from './_Components/Features';
import Technology from './_Components/Technology';
import IndustryExpertise from './_Components/Industry_Expertise';
import AboutUs from './_Components/AboutUs';
import HappyClients from './_Components/HappyClients';
import OurBlog from './_Components/OurBlog';
import Testimonial from './_Components/Testimonial';
import Homecontact from './_Components/Homecontact';
import Portfolio from './_Components/Portfolio';
import HoverButton from './_Components/ExpandButton';
import Link from 'next/link';




export const metadata = {
  title: 'Techmapperz',
  description: 'Techmapperz - IT Solutions and Services',
};



const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <CustomCarousel />
      <section className="bg-black pt-8 max-sm:py-2 max-sm:px-4 px-[4rem] relative overflow-x-hidden w-full ">
        <div className="grid grid-cols-1 m-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-semibold mb-4">Our Services</h1>
          </div>
          <div className="flex flex-col items-center">
            {/* <p className="text-gray-300 w-[70%] max-sm:w-full text-center text-lg max-sm:text-[14px] mb-8">
            To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.
          </p> */}
          </div>
        </div>
        <Features />
        <div className="flex relative justify-center mt-5 mb-[50px]">
          <Link href="/service">
            <HoverButton text="View All Services" />
          </Link>
        </div>
      </section>

      <section className='py-8 max-sm:py-2 max-sm:px-4 px-[4rem] bg-gray-900' >
        <Portfolio />
        <div className="flex justify-center mt-8 md:mt-12">
          <Link href="/portfolios">
            <HoverButton text="See Our All Works" />
          </Link>
        </div>
      </section>

      <Technology />
      <IndustryExpertise />
      <AboutUs />
      <HappyClients />
      <OurBlog />
      <Testimonial />
      <Homecontact />
    </div>
  );
};

export default Home;
