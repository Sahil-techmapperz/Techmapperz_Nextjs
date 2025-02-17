'use client'
import React from 'react';
import Image from 'next/image';

const OurServices = ({ 
    title = "Services We Offer",
    headingText = "What makes us the best ?",
    description = "At Unified Infotech, we believe in pushing boundaries. Our proactive consulting abilities make us a sought-after custom software development company while following an analytics-driven process improves our development speed, quality, and productivity.",
    imageSrc,
    imageAlt = "Software Development",
    services = []
}) => {
    return (


        <div className='bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 rounded-xl'>
            <div className="max-w-[1600px] mx-auto py-8 max-sm:py-2  px-8 md:px-12">
                <h1 className="text-4xl font-bold text-center text-white leading-tight mb-16">
                    {title}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-4">
                    {/* Left Side */}
                    <div className="space-y-10">
                        <div className="space-y-8">
                            <h1 className="text-4xl font-bold text-white leading-tight">
                                {headingText}
                            </h1>
                            <div className="space-y-6">
                                <p className="text-white text-2xl  leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={600}
                                height={400}
                                className="rounded-lg w-full object-cover"
                                unoptimized
                            />

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-12">
                        {services.map((service) => (
                            <div key={service.id} className="flex items-start space-x-6 border-b border-white pb-10">
                                <div className="text-2xl flex-shrink-0 bg-blue-600/10 p-4 rounded-lg">
                                <Image
                                width={50}
                                height={50}
                                src={service.icon} 
                                alt={service.title} 
                                className=' w-[30px] h-[30px] brightness-0 invert'
                                />
                                    
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-3">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-[16px] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;