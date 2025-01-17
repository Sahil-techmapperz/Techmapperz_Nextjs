"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { FiMessageSquare, FiCalendar } from "react-icons/fi";

// Import optimized images
import Home_banner_1 from "@/public/Photos/new_home_banner_1.avif";
import Home_banner_2 from "@/public/Photos/new_home_banner_2.avif";

// Slick carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const CustomCarousel = () => {
  const carouselItems = [
    {
      title: "Driving Growth Through Smart IT Solution",
      description:
        "Unlock growth with smart IT solutions that optimize processes, enhance productivity, and foster innovation, empowering businesses to scale efficiently and succeed in today’s digital era.",
      image: Home_banner_1,
    },
    {
      title: "Navigating Solutions with GIS Expertise",
      description:
        "Navigating solutions with GIS expertise to deliver precise spatial insights, optimize decision-making, and drive innovation across industries through advanced mapping, data analysis, and geospatial technology.",
      image: Home_banner_2,
    },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.title}>
            <div className="relative w-full h-[90vh]">
              {/* Banner Image */}
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                priority
                quality={80} 
                loading="eager"
                placeholder="blur" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Text Content */}
              <div
                className="absolute inset-0 flex flex-col justify-center pl-8 text-white"
                style={{
                  background:
                    "linear-gradient(101.3deg, rgba(57, 107, 169, 0.92) 40.68%, rgba(23, 42, 67, 0) 54.8%)",
                }}
              >
                <h3 className="text-[50px] max-sm:text-[30px] w-[50%] max-sm:w-full font-semibold">
                  {item.title}
                </h3>
                <p className="my-3 mb-8 w-[40%] max-sm:w-full">{item.description}</p>
                {/* Call-to-Action Buttons */}
                <div className="flex gap-6 max-sm:flex-col-reverse">
                  <Link
                    href="/contact"
                    aria-label="Request a Quote"
                    className="relative inline-flex items-center gap-2 uppercase w-fit font-semibold text-[22px] text-[#00B0FE] py-2 px-4 bg-white rounded-lg overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#00B0FE] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
                    <FiMessageSquare className="text-[24px] z-10 transition-colors duration-300 group-hover:text-white" />
                    <span className="z-10 transition-colors duration-300 group-hover:text-white">
                      Request a Quote
                    </span>
                  </Link>

                  <a
                    target="_blank"
                    href="https://calendly.com/techmapperz-projects/30min"
                    aria-label="Book a Demo"
                    className="relative inline-flex items-center gap-2 uppercase w-fit font-semibold text-[22px] text-[#4CAF50] py-2 px-4 bg-white rounded-lg overflow-hidden group"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#4CAF50] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
                    <FiCalendar className="text-[24px] z-10 transition-colors duration-300 group-hover:text-white" />
                    <span className="z-10 transition-colors duration-300 group-hover:text-white">
                      Book a Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
