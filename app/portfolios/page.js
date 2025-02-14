"use client";

import { useState, useEffect } from "react";
import Portfolio from "@/app/_Components/Portfolio";
import ScrollToTop from "../_Components/ScrollToTop";
import Portfolio_banner from "@/public/Photos/Portfolio_banner.png";
import Image from "next/image";

const Casestudies = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTechStack = (category) => {
    return category === "GIS"
      ? "ArcGIS, QGIS, PostGIS, Python, Geographic Information Systems, Drone Mapping"
      : "Next.js, React, Node.js, MongoDB, Express.js, PHP, MySQL, AWS";
  };

  const getMobileDescription = (description, category) => {
    if (typeof description !== 'string') return '';
    return description.length > 150 ? description.substring(0, 150) + '...' : description;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/casestudies/${filter}`);
        const data = await res.json();
        const transformedProjects = data.map((item) => ({
          id: item.id,
          title: item.name,
          techStack: getTechStack(item.category),
          description: Array.isArray(item.details) ? item.details[0] : item.description,
          mobileDescription: getMobileDescription(Array.isArray(item.details) ? item.details[0] : item.description, item.category),
          image: item.image,
          link: item.link || "#",
          bgColor: "#1e293b"
        }));
        setProjects(transformedProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filter]);


  const handleFilterChange = (category) => {
    setFilter(category);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B0FE]"></div>
        <p className="ml-4 text-white">Loading projects...</p>
      </div>
    );
  }

  return (
    <div id="CaseStudiesITServices" className="bg-gray-900">
      <ScrollToTop />
      <div className="relative w-full">
        <Image
          src={Portfolio_banner}
          className="w-full h-[300px] md:h-[500px] object-cover"
          alt="Portfolio Banner"
          priority
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <p className="text-center text-4xl md:text-6xl text-white font-bold px-4">
            Our Portfolio
          </p>
          <h1 className="text-center text-lg md:text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]">
            Explore our comprehensive portfolio of IT and GIS solutions
          </h1>
        </div>
      </div>

      <div className="bg-gray-900 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 border-t-2 border-b-2 border-gray-700 py-6">
            {["All", "IT", "GIS"].map((category) => (
              <button
                key={category}
                className={`text-base md:text-lg font-medium px-4 md:px-6 py-2 rounded-md transition-all duration-300 ${filter === category
                  ? "bg-[#00B0FE] text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                onClick={() => handleFilterChange(category)}
              >
                {category === "IT"
                  ? "IT Case Studies"
                  : category === "GIS"
                    ? "GIS Case Studies"
                    : "All Projects"}
              </button>
            ))}
          </div>
          <div className="mt-8 md:mt-12">
            <Portfolio projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudies;
