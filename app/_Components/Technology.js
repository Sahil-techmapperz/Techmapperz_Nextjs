import Technology_banner_new from "@/public/Photos/Technology_banner_new.png";
import Image from 'next/image';
import LatestTechStack from "./LatestTechStack";


const Technology = () => {
  return (
    <section className="bg-white text-black py-8 px-[4rem] max-sm:px-2 max-sm:py-2 relative">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          {/* <p className="text-xl max-sm:text-[20px] font-semibold mb-4 max-sm:absolute max-sm:top-0">Technology</p> */}

          <h1
            className="text-3xl text-center mb-[2rem] text-[#333] max-sm:text-2xl font-bold tracking-wide 
  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text 
  drop-shadow-lg"
          >
            Powering Innovation with Cutting-Edge Technology
          </h1>
        </div>

        <div className="w-full">
          <LatestTechStack />
        </div>
      </div>
    </section>
  );
};

export default Technology;
