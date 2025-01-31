import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';

const FlipCard = ({ desc = "", title = "", icon = <FaLaptopCode /> }, link = "") => {
  return (
    <div className="w-full  mb-6 py-2 px-4 group relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-700 ease-in-out">

      {/* Icon */}
      <div className="text-5xl mb-4 transition-all duration-700 relative z-10 group-hover:fill-white">
        {icon}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#376bab" />
              <stop offset="100%" stopColor="#d2292b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Title */}
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-gray-300 group-hover:text-white transition-colors duration-700 relative z-10">
          {title}
        </h3>
      )}

      {/* Description */}
      <div className="space-y-3">
        <p
          className="text-sm md:text-base font-medium text-gray-400 group-hover:text-white transition-colors duration-700 relative z-10"
        >
          {desc}
        </p>

      </div>

      {/* Button */}
      <button className="custom-button text-sm md:text-base px-4 py-2 mt-4 border border-white rounded-lg text-white transition-all duration-700 relative z-10 group-hover:bg-white group-hover:text-black">
        <Link href={link}>   Learn More </Link>
      </button>

      {/* Background gradient on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#376bab] to-[#d2292b] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
    
    </div>
  );
};

export default FlipCard;


