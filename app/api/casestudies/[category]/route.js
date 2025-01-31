import { NextResponse } from 'next/server';

let CaseStudiesData = [
    {
        image: "/Photos/IT_1.png", category: "IT", name: "Fabcon",link:"fabcon", details: [
            "Fabcon could be a leading interior design company committed to revolutionizing the way individuals plan and enhance their living spaces. To improve client engagement and accessibility, Fabcon launched a mobile application aimed at providing clients with convenient access to their interior design services and products.",
            
        ]
    },
    {
        image: "/Photos/Site_Suitability_Analysis.png", category: "GIS", name: "Site Suitability Analysis",link:"site_mapping", details: [
            "Site suitability for block-wise soil erosion involves evaluating a specific location's ability to withstand or mitigate the effects of soil erosion. It involves assessing various factors that influence erosion processes, including rainfall (R), flow accumulation and slope (LS), soil data(K), soilconservation (C), elevation, slope, and land use/land cover.",

        ]
    },
    {
        image: "/Photos/IT_2.png", category: "IT", name: "Cocreate Lab",link:"cocreatelabs", details: [
            "First of all, a state-of-the-art web tool, the CoCreate Labs AMC Mentor and Mentee Dashboard, was created to assist with mentorship and teamwork within the CoCreate Labs program. The platform offers an easy and interactive experience for participants to engage with mentors, access resources, and track their progress, with dedicated dashboards for mentors and mentees. The dashboard, which is hosted on Amazon Web Services (AWS), utilizes modern web technologies to provide a dynamic and intuitive user interface.",
        ]
    },
    {
        image: "/Photos/Agricultural_Mapping.png", category: "GIS", name: "Agricultural Mapping",link:"", details: [
            "We have done the Landuse and Landcover mapping with the help of Higher esolution drone imagery. Digitization of more than 12 layers and 9 sub layers for mapping are done.",

        ]
    },
    {
        image: "/Photos/IT_3.png", category: "IT", name: "SHRC",link:"shrc", details: [
            "First of all, a specialized platform called the Special Human Rights Commission (SHRC) aims to encourage innovation and cooperation among welfare societies. Built using the CodeIgniter 4 framework and PHP, SHRC provides a secure environment for members to communicate and engage. By offering features like personalized notifications and two-step OTP verification, the platform enhances community engagement while ensuring security.",
        ]
    },
    {
        image: "/Photos/Land_Use_Land_Cover_Mapping.png", category: "GIS", name: "Land-Use  Land -Cover Mapping",link:"landcover_mapping", details: [
            "Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails identifying and delineating residential zones, urban areas, rural settlements, and other inhabited regions. By overlaying various data layers such as population density, building footprints, infrastructure, and land use, GIS facilitates comprehensive analysis and visualization of habitation patterns. This information is crucial for urban planning, disaster management, public health, and resource allocation.",

        ]
    },
    {
        image: "/Photos/IT_4.png", category: "IT", name: "Premium Auto Services", link:"premierautosource", details: [
            "PremierAutoSource is a dynamic online platform dedicated to providing comprehensive information and resources related to automobiles. Developed with a focus on user experience and functionality, the website serves as a one-stop destination for automotive enthusiasts, offering information, reviews, guides, and industry insights. Powered by modern web technologies, Premier AutoSource delivers a continuous and interactive experience for visitors, catering to their diverse needs and interests within the automotive world.",
        ]
    },
    {
        image: "/Photos/Georeferencing_of_Maps.png", category: "GIS", name: "Georeferencing of Maps", link:"", details: [
            "Georeferencing is the crucial process of assigning real-world geographic coordinates to scanned maps and images, transforming them from static representations into dynamic spatial data. By identifying corresponding points on the map and in a GIS, users can mathematically align the image to a specific coordinate system. A critical step following georeferencing is incorporating attributes such as plot numbers and village names to enrich the dataset. This enhances the map's utility by providing detailed information about land parcels, enabling accurate land administration, property management, and resource planning.",

        ]
    },
    {
        image: "/Photos/IT_5.png", category: "IT", name: "Welho", link:"welho", details: [
            "Welho is a outstanding online platform providing a huge variety of well-being services and products to sell holistic fitness and well-being. Thewebsite serves as a one-forestall vacation spot for customers looking for get right of entry to to top rate well being merchandise, professional advice, andcustomized services. Developed with a focal point on consumer revel in andaccessibility, Welho.in pursuits to empower people to prioritize their fitnessand lead satisfying lives.",
        ]
    },
    {
        image: "/Photos/IT_6.png", category: "IT", name: "Manusher Ghorbari", link:"manusherghorbari", details: [
            "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying the manner of reserving inns on the Manusher Ghorbari guesthouse. Developed with the goal of promoting tourism and offering a seamless experience for site visitors, the website offers specified room listings, an intuitive booking system, and real-time availability updates. Built using PHP, CSS3, and a MySQL database, the website caters to the needs of travelers seeking a tranquil escape and aims to enhance engagement with the Manusher Ghorbari guesthouse.",
        ]
    },
    {
        image: "/Photos/Industrial_Planning_and_Mapping.png", category: "GIS", name: "Industrial Planning and Mapping", link:"industrial_mapping", details: [
            "Industrial region planning refers to the process of designing, managing, and developing industrial areas to optimize economic growth, sustainability, and quality of life. Industrial region planning involves designing and managing industrial areas to optimize efficiency, sustainability, and economic growth, identifying suitable locations for industrial development, designing infrastructure such as transportation, utilities, etc., Zoning and land-use planning.",

        ]
    },
    {
        image: "/Photos/City_Mapping.png", category: "GIS", name: "City Mapping", link:"city_mapping", details: [
            "Drones have revolutionized city mapping by providing high-resolution aerial imagery that can be integrated into GIS systems. This technology enables cities to create detailed and up-to-date maps of urban infrastructure, land use, and environmental conditions, supporting informed decision-making and effective resource allocation. Drones play a crucial role in optimizing emergency response, predicting potential hotspots, and enhancing overall public safety. ",

        ]
    },
    {
        image: "/Photos/IT_7.png", category: "IT", name: "Techmapperz CRM", link:"crm", details: [
            "The sales, marketing, and customer relationship management software is designed to provide the factual data and management tools for customer interaction within Techmapperz CRM. This powerful tool consolidates sales, marketing, and customer service data and activity, presenting it in a neatly established Customer Relationship Management framework.",
        ]
    },


];

async function GET(req, { params }) {
    const { category } = params;
    let data=category== "All" ? CaseStudiesData :  CaseStudiesData.filter((response) => response.category === category);
    let response = NextResponse.json(data);
    return response;
}

export { GET };