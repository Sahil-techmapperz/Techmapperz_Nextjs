import Link from "next/link";
import FlipCard from "./FlipCard";
import { FaLaptopCode } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      backImage: "Photos/feature_2.webp",
      title: "App Development",
      desc:"Whether you're starting with a blank canvas or you're in need of a rebrand, our team carry the expertise to help you level up! We work with you to create a blisteringly brilliant visual identity, and to powerfully define your messaging, positioning & values.",
      icon:<FaLaptopCode className="fill-[url(#gradient)] group-hover:fill-white transition-all duration-700 ease-in-out" />
    ,link:"/"
    },
    
    {
      backImage: "Photos/feature_3.webp",
      title: "Drone Solution",
      desc:"Whether you're starting with a blank canvas or you're in need of a rebrand, our team carry the expertise to help you level up! We work with you to create a blisteringly brilliant visual identity, and to powerfully define your messaging, positioning & values.",
      icon:<FaLaptopCode className="fill-[url(#gradient)] group-hover:fill-white transition-all duration-700 ease-in-out" />
    ,link:"/"
    },
    
    {
      backImage: "Photos/feature_4.webp",
      title: "CRM Solution",
      desc:"Whether you're starting with a blank canvas or you're in need of a rebrand, our team carry the expertise to help you level up! We work with you to create a blisteringly brilliant visual identity, and to powerfully define your messaging, positioning & values.",
      icon:<FaLaptopCode className="fill-[url(#gradient)] group-hover:fill-white transition-all duration-700 ease-in-out" />
    ,link:"/"
    },
    
    {
      backImage: "Photos/feature_5.webp",
      title: "IT Consulting",
      desc:"Whether you're starting with a blank canvas or you're in need of a rebrand, our team carry the expertise to help you level up! We work with you to create a blisteringly brilliant visual identity, and to powerfully define your messaging, positioning & values.",
      icon:<FaLaptopCode className="fill-[url(#gradient)] group-hover:fill-white transition-all duration-700 ease-in-out" />
    ,link:"/"
    },
    
    {
      backImage: "Photos/feature_6.webp",
      title: "GIS Solution",
      desc:"Whether you're starting with a blank canvas or you're in need of a rebrand, our team carry the expertise to help you level up! We work with you to create a blisteringly brilliant visual identity, and to powerfully define your messaging, positioning & values.",
      icon:<FaLaptopCode className="fill-[url(#gradient)] group-hover:fill-white transition-all duration-700 ease-in-out" />
    ,link:"/"
    },
    
    {
      backImage: "Photos/feature_1.webp",
      title: "Website Development",
      desc:"Whether you're starting with a blank canvas or you're in need of a rebrand, our team carry the expertise to help you level up! We work with you to create a blisteringly brilliant visual identity, and to powerfully define your messaging, positioning & values.",
      icon:<FaLaptopCode className="fill-[url(#gradient)] group-hover:fill-white transition-all duration-700 ease-in-out" />
    ,link:"/"
    },
    
  ];

  return (
    <section className="bg-black py-8 max-sm:py-2 max-sm:px-4 px-[4rem] relative overflow-x-hidden">
      <div className="grid grid-cols-1 m-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-semibold mb-4">Services</h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-300 w-[70%] max-sm:w-full text-center text-lg max-sm:text-[14px] mb-8">
            To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-full m-auto">
        {features.map((feature, index) => (
          <FlipCard
            key={index}
            title={feature.title}
            desc={feature.desc}
            icon={feature.icon}
            link={feature.link}
          />
        ))}
      </div>

      <div className="flex relative justify-center mt-5 mb-[50px]">
        <button className=" text-lg py-2 px-4 rounded-md btn-gradient">
          <Link href="/service">View All Services</Link>
        </button>
      </div>
    </section>
  );
};

export default Features;
