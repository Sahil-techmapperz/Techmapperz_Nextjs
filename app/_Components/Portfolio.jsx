'use client'
import Image from 'next/image'
import Link from 'next/link'
import HoverButton from './ExpandButton'
import { useState, useEffect } from 'react'

const defaultProjects = [
    // {
    //     id: 1,
    //     title: "CoCreateLabs",
    //     techStack: "Next.js, TypeScript, MongoDB, Express.js",
    //     description: "First of all, a state-of-the-art web tool, the CoCreate Labs AMC Mentor and Mentee Dashboard, was created to assist with mentorship and teamwork within the CoCreate Labs program. The platform offers an easy and interactive experience for participants to engage with mentors, access resources, and track their progress, with dedicated dashboards for mentors and mentees. The dashboard, which is hosted on Amazon Web Services (AWS), utilizes modern web technologies to provide a dynamic and intuitive user interface.",
    //     mobileDescription: "A state-of-the-art web tool for mentorship and teamwork within the CoCreate Labs program, featuring interactive dashboards for mentors and mentees.",
    //     image: "/Photos/CCL_home_portfolio.png",
    //     link: "/portfolios/cocreatelabs",
    //     bgColor: "#1e293b"
    // },
    {
        id: 1,
        title: "Manusher Ghorbari",
        techStack: "CodeIgniter 4, PHP, MySQL",
        description: "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying the manner of reserving inns on the Manusher Ghorbari guesthouse. Developed with the goal of promoting tourism and offering a seamless experience for site visitors, the website offers specified room listings, an intuitive booking system, and real-time availability updates. Built using PHP, CSS3, and a MySQL database, the website caters to the needs of travelers seeking a tranquil escape and aims to enhance engagement with the Manusher Ghorbari guesthouse.",
        mobileDescription: "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying the manner of reserving inns on the Manusher Ghorbari gu...",
        image: "/Photos/manuser-ghorbaari1.png",
        link: "/portfolios/manusherghorbari",
        bgColor: "#1e293b"
    },
    {
        id: 2,
        title: "Special Human Rights Commission",
        techStack: "CodeIgniter 4, PHP, MySQL",
        description: "First of all, a specialized platform called the Special Human Rights Commission (SHRC) aims to encourage innovation and cooperation among welfare societies. The Web Design was built using the CodeIgniter 4 framework and PHP, SHRC provides a secure environment for members to communicate and engage. By offering features like personalized notifications and two-step OTP verification, the website enhances community engagement while ensuring security.",
        mobileDescription: "A specialized platform for welfare societies with secure communication features and two-step verification for enhanced security.",
        image: "/Photos/SHRC_home_portfolio.png",
        link: "/portfolios/shrc",
        bgColor: "#1e1e2d"
    },
    {
        id: 3,
        title: "Land-Use  Land -Cover Mapping",
        techStack: "ArcGIS, QGIS, PostGIS, Python, Geographic Information Systems, Drone Mapping",
        description: "Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails identifying and delineating residential zones, urban areas, rural settlements, and other inhabited regions. By overlaying various data layers such as population density, building footprints, infrastructure, and land use, GIS facilitates comprehensive analysis and visualization of habitation patterns. This information is crucial for urban planning, disaster management, public health, and resource allocation.",
        mobileDescription: "Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails ident...",
        image: "/Photos/Land_Use_Land_Cover_Mapping.png",
        link: "/portfolios",
        bgColor: "#1e293b",
        // bgColor: "#1a472a",

    }
]

const Portfolio = ({ projects = defaultProjects }) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section className="">
            <div className="container mx-auto px-4 max-w-[1600px] flex flex-col items-center">
                <div className="text-center mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                        Some of Our Work
                        <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto mt-3 md:mt-4"></div>
                    </h1>
                </div>
                <div className="space-y-8 md:space-y-16 w-full md:w-[70%] flex flex-col">
                    {projects.map((project) => (
                        <Link href={project.link} key={project.id}>
                            <div className="rounded-lg overflow-hidden hover:opacity-95 hover:scale-105 md:hover:scale-110 transition-all duration-300"
                                style={{ backgroundColor: project.bgColor }}>
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="w-full md:w-3/5 p-4 md:p-8 flex flex-col justify-center order-2 md:order-1">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                                        <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                                            {isMobile ? project.mobileDescription : project.description}
                                        </p>
                                        <div className="mt-1 md:mt-2">
                                            <p className="text-gray-400 text-xs md:text-sm">
                                                <span className="text-blue-400 font-medium">Tech Stack:</span> {project.techStack}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/6 relative aspect-[16/9] md:aspect-[4/3] order-1 md:order-2">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio



