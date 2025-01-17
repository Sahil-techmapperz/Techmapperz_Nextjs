"use client";

import { motion } from "framer-motion";

const FlipCard = ({ backImage = "", backdiv_arr = [], title = "", animationDirection = "left" }) => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: animationDirection === "left" ? -150 : 150, // Slide in from left or right
    },
    visible: {
      opacity: 1,
      x: 0, // Move to the center
    },
  };

  return (
    <motion.div
      className="relative w-full h-80 mb-6 flex justify-center items-center bg-gradient-to-b from-blue-900/90 to-blue-700/60 rounded-md overflow-hidden"
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // Replay animation every time it's in view
    >
      {/* Background Image */}
      {backImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${backImage}")` }}
        ></div>
      )}

      {/* Overlay Content */}
      <div className="absolute inset-0 px-6 py-4 bg-gradient-to-b from-blue-900/80 to-blue-700/70 text-white flex flex-col justify-center items-center space-y-4 text-center">
        {/* Title */}
        {title && (
          <p className="underline text-lg lg:text-2xl font-semibold">
            {title}
          </p>
        )}

        {/* List of Items */}
        <div className="space-y-2">
          {backdiv_arr.map((item, index) => (
            <p
              key={index}
              className="max-sm:text-[14px] font-bold max-lg:text-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;
