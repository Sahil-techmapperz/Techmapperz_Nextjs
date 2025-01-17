"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import avater from "@/public/Photos/testimonial_aveter.png";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { Box, Text, keyframes } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Testimonial`;
        const results = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setTestimonials(results.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pulseAnimation = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  `;

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          animation={`${pulseAnimation} 2s infinite`}
        >
          Loading Techmapperz...
        </Text>
      </Box>
    );
  }

  // Responsive settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // Show 2 items
      slidesToSlide: 1, // Scroll 1 item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Show 1 item
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 item
      slidesToSlide: 1,
    },
  };

  return (
    <div className="bg-black py-8 px-4 text-center">
      {/* <p className="text-xl font-semibold text-white">Testimonial</p> */}
      {/* <h1 className="text-[26px] mb-6 text-white">What our Clients Say</h1> */}

      <h1
        className="text-3xl max-sm:text-xl  mb-6 text-white text-center font-semibold tracking-wide 
  drop-shadow-md leading-snug"
      >
        Hear From Our Happy Clients
      </h1>

      <div className="p-12 max-sm:px-2">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderDotsOutside={false}
        >
          {testimonials.map((data, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg mx-4"
            // style={{
            //   background:
            //     "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 4.63%, rgba(197, 197, 197, 0.3) 50.08%, rgba(0, 0, 0, 0.3) 95.86%)",
            // }}
            >
              <div className="w-[80px] h-[80px] flex justify-center items-center mx-auto mb-4">
                <Image
                  src={data.image || avater}
                  alt={data.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="h-[80px] overflow-hidden text-sm italic mb-4">
                  "{data.message}"
                </p>
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-sm">{data.Companyname}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
