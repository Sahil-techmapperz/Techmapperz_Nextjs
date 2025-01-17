import Link from "next/link";
import FlipCard from "./FlipCard";

const Features = () => {
  const features = [
    {
      backImage: "Photos/feature_2.png",
      title: "App Development",
      backdiv_arr: [
        "Android Apps Development",
        "iOS Apps Development",
        "Hybrid Apps Development",
        "Progressive Web Apps",
      ],
    },
    {
      backImage: "Photos/feature_3.png",
      title: "Drone Solution",
      backdiv_arr: [
        "Drone Surveying",
        "Drone Data Mapping",
        "Inspection & Analysis",
        "Drone Data Processing",
      ],
    },
    {
      backImage: "Photos/feature_4.png",
      title: "CRM Solution",
      backdiv_arr: [
        "Sales CRM Solution",
        "Project CRM Solution",
        "Finance CRM Solution",
        "Custom CRM Solution",
      ],
    },
    {
      backImage: "Photos/feature_5.png",
      title: "IT Consulting",
      backdiv_arr: [
        "IT Strategy & Consulting",
        "Digital Transformation",
        "Custom Software Development",
        "Software Modernization",
      ],
    },
    {
      backImage: "Photos/feature_6.png",
      title: "GIS Solution",
      backdiv_arr: [
        "GIS Mapping",
        "Image Processing",
        "Web GIS Services",
        "GIS Field Survey",
      ],
    },
    {
      backImage: "Photos/feature_1.png",
      title: "Website Development",
      backdiv_arr: [
        "Dynamic Website Development",
        "Static Website Development",
        "E-Commerce Website Development",
        "Custom Website Development",
      ],
    },
  ];

  return (
    <section className="bg-black py-8 max-sm:py-2 max-sm:px-4 px-[4rem] relative overflow-x-hidden">
      <div className="grid grid-cols-1 m-auto">
        <div className="flex flex-col items-center">
          {/* <h1 className="text-white text-xl font-semibold mb-4">Services</h1> */}
          {/* <h1 className="text-white text-center w-[60%] max-sm:w-full max-sm:text-[20px] font-semibold text-3xl mb-6">
            These Services to Expand your Business
          </h1> */}

          <h1
            className="text-white text-center w-[60%] max-sm:w-full max-sm:text-[20px] font-semibold text-3xl mb-6 
  tracking-wide leading-snug bg-clip-text drop-shadow-md"
          >
            Unlock Your Growth with Our Business-Boosting Services
          </h1>

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
            backImage={feature.backImage}
            title={feature.title}
            backdiv_arr={feature.backdiv_arr}
            animationDirection={index % 2 === 0 ? "left" : "right"} // Alternate directions
          />
        ))}
      </div>

      <div className="flex relative justify-center mt-5 mb-[50px]">
        <button className="bg-white animate-blink text-[#D454B4] text-lg py-2 px-4 rounded-md shadow-[0px_0px_8px_0px_#D555B5] hover:shadow-[0px_0px_8px_0px_#00B0FE] uppercase hover:text-[#00B0FE] font-[600] transition-all duration-300">
          <Link href="/service">View All Services</Link>
        </button>
      </div>
    </section>
  );
};

export default Features;
