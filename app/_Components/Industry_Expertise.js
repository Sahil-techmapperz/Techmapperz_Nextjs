"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IT_1 from "@/public/Photos/solution-preview-small-image-analysis-red_2.webp";
import IT_2 from "@/public/Photos/IT_2.png";
import IT_3 from "@/public/Photos/IT_3.png";
import IT_4 from "@/public/Photos/IT_4.png";
import IT_5 from "@/public/Photos/IT_5.png";
import IT_6 from "@/public/Photos/IT_6.png";
import IT_7 from "@/public/Photos/IT_7.png";




import IT_Services from "@/public/Photos/IT_Services.png";

export const categoryData = [
    {
        name: 'WEB & ENTERPRISE PORTALS',
        image: IT_1,
        desc: "Comprehensive web solutions that streamline business operations and enhance digital presence",
        icon: "🌐",
        categoryTypes: ["Corporate Portals", "Employee Portals", "Customer Portals", "Partner Portals"]
    },
    {
        name: 'ENTERPRISE MOBILITY',
        image: IT_2,
        desc: "Device-agnostic apps to help enterprises go mobile and augment their operational strength",
        icon: "📱",
        categoryTypes: ["Mobile Apps", "Enterprise Apps", "Cross-platform Solutions", "Mobile Security"]
    },
    {
        name: 'ECOMMERCE DEVELOPMENT SERVICES',
        image: IT_3,
        desc: "Custom ecommerce solutions that drive digital sales and enhance customer experience",
        icon: "🛍️",
        categoryTypes: ["B2B Ecommerce", "B2C Platforms", "Mobile Commerce", "Custom Solutions"]
    },
    {
        name: 'ELEARNING DEVELOPMENT',
        image: IT_4,
        desc: "Interactive digital learning platforms that transform education delivery",
        icon: "📚",
        categoryTypes: ["LMS Development", "Course Creation", "Virtual Classrooms", "Mobile Learning"]
    },
    {
        name: 'AUGMENTED REALITY',
        image: IT_5,
        desc: "Immersive AR experiences for various industry applications",
        icon: "🕶️",
        categoryTypes: ["AR Apps", "Industrial AR", "Training Solutions", "Interactive Experiences"]
    },
    {
        name: 'COMPUTER VISION SOFTWARE',
        image: IT_6,
        desc: "Advanced computer vision solutions for automation and analysis",
        icon: "👁️",
        categoryTypes: ["Image Processing", "Object Detection", "Face Recognition", "Visual Inspection"]
    },
    {
        name: 'BIG DATA ANALYTICS',
        image: IT_7,
        desc: "Data analytics solutions for business intelligence and insights",
        icon: "📊",
        categoryTypes: ["Data Processing", "Predictive Analytics", "Business Intelligence", "Data Visualization"]
    },
    {
        name: 'ARTIFICIAL INTELLIGENCE',
        image: IT_Services,
        desc: "AI-powered solutions for business automation and intelligence",
        icon: "🤖",
        categoryTypes: ["Machine Learning", "Natural Language Processing", "AI Automation", "Predictive Models"]
    }
];


const IndustryExpertise = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div className="w-full bg-gradient-to-b from-blue-950 to-black relative">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-blue-900/5" />
                        <div className="absolute inset-0">
                            <Image
                                src={hoveredImage || categoryData[0].image}
                                alt="Background"
                                fill
                                className={`object-cover transition-all duration-700 ease-in-out ${
                                    hoveredImage ? 'opacity-100 scale-110 brightness-75' : 'opacity-0 scale-100'
                                }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-black/60" />
                        </div>
                    </div>

                    {categoryData.map((category, index) => (
                        <div key={index} className="relative group z-10 p-0.5">
                            <Link 
                                href={`/industry/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="relative aspect-[4/3] block overflow-hidden border-[0.5px] border-blue-900/20"
                                onMouseEnter={() => setHoveredImage(category.image)}
                                onMouseLeave={() => setHoveredImage(null)}
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className={`object-cover transition-all duration-700 ease-in-out ${
                                            hoveredImage && hoveredImage !== category.image ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/40 group-hover:from-blue-800/30 group-hover:to-black/50 transition-all duration-500" />
                                </div>
                                <div className="relative h-full flex flex-col justify-center items-center text-center p-6 z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-blue-100 mb-4 max-w-xs opacity-90">
                                        {category.desc}
                                    </p>
                                    <div className="h-0.5 w-12 bg-blue-400 group-hover:w-16 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};


export default IndustryExpertise;

