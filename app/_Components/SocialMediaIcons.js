"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RequestQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(prevState => !prevState);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-1/3 right-0 transform -translate-y-1/2 z-50 flex items-center">
      {/* Request a Quote Button */}
      <motion.div
        initial={{ x: 100, opacity: 0, rotate: 0 }}
        animate={
          isOpen
            ? { x: 0, opacity: 1, rotate: -90 }
            : { x: 100, opacity: 0, rotate: 0 }
        }
        transition={{ duration: 0.5 }}
        className="origin-bottom-right"
      >
        {/* Request a Quote Link */}
        <a
          href="/contact"
          className="text-white bg-blue-600 px-4 py-2 rounded-lg text-center"
        >
          Request a Quote
        </a>
      </motion.div>
    </div>


  );
};

export default RequestQuoteButton;
