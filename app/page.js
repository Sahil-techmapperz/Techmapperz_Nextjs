import ScrollToTop from './_Components/ScrollToTop';
import dynamic from 'next/dynamic';
import CustomCarousel from './_Components/HomeCarousel';
import Features from './_Components/Features';

const Portfolio = dynamic(() => import('./_Components/Portfolio'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const Technology = dynamic(() => import('./_Components/Technology'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const IndustryExpertise = dynamic(() => import('./_Components/Industry_Expertise'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const AboutUs = dynamic(() => import('./_Components/AboutUs'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const HappyClients = dynamic(() => import('./_Components/HappyClients'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const OurBlog = dynamic(() => import('./_Components/OurBlog'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const Testimonial = dynamic(() => import('./_Components/Testimonial'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
const Homecontact = dynamic(() => import('./_Components/Homecontact'), { ssr: true, loading: () => <div className="min-h-[200px]" /> });
import HoverButton from './_Components/ExpandButton';
import Link from 'next/link';
import company_logo from "@/public/logo.webp"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL



// export const metadata = {
//   title: 'IT Company | GIS Services Company | Drone Survey | Techmapperz | India',
//   description: 'Techmapperz is a leading IT, GIS and Drone Solutions provider company in India. From custom web and app development to CRM systems and drone services, we streamline operations, drive data-driven decisions, and fuel sustainable growth for organizations of every scale.',
// };



export const metadata = {
  title: "IT Company | GIS Services Company | Drone Survey | Techmapperz | India",
  description: "Techmapperz is a leading IT, GIS, and Drone Solutions provider company in India.",
  openGraph: {
    title: "IT Company | GIS Services Company | Drone Survey | Techmapperz | India",
    description: "Techmapperz is a leading IT, GIS, and Drone Solutions provider company in India.",
    url: BASE_URL,
    type: "website",
    // images: [
    //   {
    //     url: "public/logo.webp",
    //     width: 800,
    //     height: 600,
    //     alt: "Techmapperz Logo",
    //   },
    // ],
  },
  alternates: {
    canonical: BASE_URL,
  },
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
