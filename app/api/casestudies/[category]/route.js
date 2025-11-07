import { NextResponse } from 'next/server';

let CaseStudiesData = [
    {
        image: "/Photos/IT_1.webp", category: "IT", techStack: "React Native, TypeScript, Redux, React Navigation, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB, AWS S3", name: "Fabcon", link: "/portfolios/fabcon", details: [
            "Fabcon could be a leading interior design company committed to revolutionizing the way individuals plan and enhance their living spaces. To improve client engagement and accessibility, Fabcon launched a mobile application aimed at providing clients with convenient access to their interior design services and products.",

        ]
    },
    {
        image: "/Photos/IT_2.webp", category: "IT", techStack: "React.js, TypeScript, Redux, Next.js, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB, AWS", name: "Cocreate Lab", link: "/portfolios/cocreatelabs", details: [
            "First of all, a state-of-the-art web tool, the CoCreate Labs AMC Mentor and Mentee Dashboard, was created to assist with mentorship and teamwork within the CoCreate Labs program. The platform offers an easy and interactive experience for participants to engage with mentors, access resources, and track their progress, with dedicated dashboards for mentors and mentees. The dashboard, which is hosted on Amazon Web Services (AWS), utilizes modern web technologies to provide a dynamic and intuitive user interface.",
        ]
    },
    {
        image: "/Photos/IT_3.webp", category: "IT", techStack: "HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, Apache/Nginx", name: "SHRC", link: "/portfolios/shrc", details: [
            "First of all, a specialized platform called the Special Human Rights Commission (SHRC) aims to encourage innovation and cooperation among welfare societies. Built using the CodeIgniter 4 framework and PHP, SHRC provides a secure environment for members to communicate and engage. By offering features like personalized notifications and two-step OTP verification, the platform enhances community engagement while ensuring security.",
        ]
    },
    {
        image: "/Photos/Land_Use_Land_Cover_Mapping.webp", category: "GIS", techStack: "ArcGIS, QGIS,  Geographic Information Systems, Drone Mapping", name: "Urban & Rural Areas 2D Feature Extraction", link: "/portfolios/landcover_mapping", details: [
            "Landuse and Landcover mapping involves creating detailed representations of human settlements using geographic information systems. This entails identifying and delineating residential zones, urban areas, rural settlements, and other inhabited regions. By overlaying various data layers such as population density, building footprints, infrastructure, and land use, GIS facilitates comprehensive analysis and visualization of habitation patterns. This information is crucial for urban planning, disaster management, public health, and resource allocation.",

        ]
    },
    {
        image: "/Photos/IT_4.webp", category: "IT", techStack: "HTML5, CSS3, JavaScript, Bootstrap", name: "PAS Auto Source", link: "/portfolios/premierautosource", details: [
            "PremierAutoSource is a dynamic online platform dedicated to providing comprehensive information and resources related to automobiles. Developed with a focus on user experience and functionality, the website serves as a one-stop destination for automotive enthusiasts, offering information, reviews, guides, and industry insights. Powered by modern web technologies, Premier AutoSource delivers a continuous and interactive experience for visitors, catering to their diverse needs and interests within the automotive world.",
        ]
    },
    {
        image: "/Photos/Georeferencing_of_Maps.webp", category: "GIS", techStack: "ArcGIS, QGIS,  Geographic Information Systems, Drone Mapping", name: "Georeferencing of Maps", link: "/portfolios/georeferencing_of_maps", details: [
            "Georeferencing is the crucial process of assigning real-world geographic coordinates to scanned maps and images, transforming them from static representations into dynamic spatial data. By identifying corresponding points on the map and in a GIS, users can mathematically align the image to a specific coordinate system. A critical step following georeferencing is incorporating attributes such as plot numbers and village names to enrich the dataset. This enhances the map's utility by providing detailed information about land parcels, enabling accurate land administration, property management, and resource planning.",

        ]
    },
    {
        image: "/Photos/IT_5.webp", category: "IT", techStack: "HTML5, CSS3, JavaScript, Bootstrap", name: "Welho", link: "/portfolios/welho", details: [
            "Welho is a outstanding online platform providing a huge variety of well being services and products to sell holistic fitness and well-being. The website serves as a one-forestall vacation spot for customers looking for get right of entry to to top rate well being merchandise, professional advice, and customized services. Developed with a focal point on consumer revel in and accessibility, Welho.in pursuits to empower people to prioritize their fitness and lead satisfying lives.",
        ]
    },
    {
        image: "/Photos/whitespreadfoods_banner.webp", category: "IT", techStack: "Java, HTML5, CSS3, JavaScript, Bootstrap, AWS, Apache Tomcat", name: "White Spread Foods", link: "/portfolios/whitespreadfoods", details: [
            "The White Spread Foods Dashboard can be described as an all-encompassing solution intended to give information on multiple facets of the company’s functioning in real time. With this core interface, executives get a single, central view into KPIs, supply chain figures, quality assurance and control figures, market trends, and sustainability initiatives. The aim is to facilitate improvement to decision making, efficiency and effectiveness of the business processes.",
        ]
    },
    {
        image: "/Photos/IT_6.webp", category: "IT", techStack: "HTML5, CSS3, JavaScript, Bootstrap, CodeIgniter 4, PHP, MySQL, Apache/Nginx", name: "Manusher Ghorbari", link: "/portfolios/manusherghorbari", details: [
            "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying the manner of reserving inns on the Manusher Ghorbari guesthouse. Developed with the goal of promoting tourism and offering a seamless experience for site visitors, the website offers specified room listings, an intuitive booking system, and real-time availability updates. Built using PHP, CSS3, and a MySQL database, the website caters to the needs of travelers seeking a tranquil escape and aims to enhance engagement with the Manusher Ghorbari guesthouse.",
        ]
    },
    {
        image: "/Photos/Industrial_Planning_and_Mapping.webp", category: "GIS", techStack: "ArcGIS, QGIS,  Geographic Information Systems, Drone Mapping", name: "Industrial Planning and Mapping", link: "/portfolios/industrial_mapping", details: [
            "Industrial region planning refers to the process of designing, managing, and developing industrial areas to optimize economic growth, sustainability, and quality of life. Industrial region planning involves designing and managing industrial areas to optimize efficiency, sustainability, and economic growth, identifying suitable locations for industrial development, designing infrastructure such as transportation, utilities, etc., Zoning and land-use planning.",

        ]
    },
    {
        image: "/Photos/Gis_casestudies_1.webp", category: "GIS", techStack: "ArcGIS, QGIS,  Geographic Information Systems, Drone Mapping", name: "City Mapping", link: "/portfolios/city_mapping", details: [
            "Drones have revolutionized city mapping by providing high-resolution aerial imagery that can be integrated into GIS systems. This technology enables cities to create detailed and up-to-date maps of urban infrastructure, land use, and environmental conditions, supporting informed decision-making and effective resource allocation. Drones play a crucial role in optimizing emergency response, predicting potential hotspots, and enhancing overall public safety. ",

        ]
    },
    {
        image: "/Photos/IT_7.webp", category: "IT", techStack: "HTML5, CSS3, JavaScript, Bootstrap, CodeIgniter 4, PHP, MySQL, Apache/Nginx", name: "Techmapperz CRM", link: "/portfolios/crm", details: [
            "The sales, marketing, and customer relationship management software is designed to provide the factual data and management tools for customer interaction within Techmapperz CRM. This powerful tool consolidates sales, marketing, and customer service data and activity, presenting it in a neatly established Customer Relationship Management framework.",
        ]
    },


];

async function GET(req, { params }) {
    const { category } = params;
    let data = category == "All" ? CaseStudiesData : CaseStudiesData.filter((response) => response.category === category);
    let response = NextResponse.json(data);
    return response;
}

export { GET };