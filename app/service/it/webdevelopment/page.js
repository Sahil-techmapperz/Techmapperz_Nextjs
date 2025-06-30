import Image from 'next/image';
import ScrollToTop from '@/app/_Components/ScrollToTop';
import WebsiteBanner from '@/app/_Components/WebsiteBanner';
import { FaJs, FaPhp, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker, FaAws, FaNpm } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import WhyChooseTechmapperz, { defaultFeatures } from '@/app/_Components/WhyChooseTechmapperz';
import TechStack from '@/app/_Components/TechStack';
import WebsiteIntroduction from '@/app/_Components/WebsiteIntroduction';
import WebsiteDesignElements from '@/app/_Components/DesignElements';
import FAQ from '@/app/_Components/FAQ';
import OurServices from '@/app/_Components/OurServices';
import Roadmap from '@/app/_Components/ExpandableCards';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com"; // Fallback URL


export const metadata = {
    title: 'Website Design & Development Company in India | Techmapperz',
    description: 'Techmapperz is a top-rated web development company in India, designing and developing custom, mobile-responsive, and SEO-friendly websites that drive real results.',
    alternates: {
        canonical: `${BASE_URL}/service/it/webdevelopment`,
    },
};

const WebDevelopment = () => {
    const itTechItems = [
        { name: "React", icon: <FaReact />, bg: "#f0f5ff", textColor: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, bg: "#f5f5f5", textColor: "#339933" },
        { name: "JavaScript", icon: <FaJs />, bg: "#fff0f0", textColor: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, bg: "#fff0f0", textColor: "#E34F26" },
        { name: "CSS3", icon: <FaCss3 />, bg: "#f0f5ff", textColor: "#1572B6" },
        { name: "PHP", icon: <FaPhp />, bg: "#f0f5ff", textColor: "#777BB4" },
        { name: "MongoDB", icon: <FaDatabase />, bg: "#f5f5f5", textColor: "#47A248" },
        { name: "Git", icon: <FaGithub />, bg: "#f0f5ff", textColor: "#181717" },
        { name: "Docker", icon: <FaDocker />, bg: "#f0f5ff", textColor: "#2496ED" },
        { name: "NPM", icon: <FaNpm />, bg: "#f5f5f5", textColor: "#CB3837" },
        { name: "SQL", icon: <SiMysql />, bg: "#f0f5ff", textColor: "#4479A1" }
    ];

    const faqData = [
        {
            question: "1.	How Can I choose the best custom website development company for my business?",
            answer: "Look for a company with a proven portfolio, positive client reviews, and a clear understanding of your industry needs.",
        },
        {
            question: "2.	What does a Web Development Company DO?",
            answer: "A web development company designs, builds, and maintains websites and applications, ensuring they are functional and user-friendly.",
        },
        {
            question: "3.	Why is a responsive website so important for my Business?",
            answer: "Responsive website is most important for every business A responsive website enhances user experience across devices, boosts SEO rankings, and helps capture a larger audience.",
        },
        {
            question: "4.	How much a does new website cost?",
            answer: "Website costs vary depending on features, design complexity, and functionality; we provide tailored quotes to fit your unique needs and budget.",
        },
        {
            question: "5.	Will my E-commerce website be mobile-friendly?",
            answer: "Yes, we ensure your E-commerce website is optimized for mobile devices to deliver a smooth shopping experience to customers on the go.",
        },
        {
            question: "6.	Will you maintain my website for me?",
            answer: "Yes, we offer ongoing maintenance services to ensure your website remains secure, up-to-date, and performs optimally.",
        },
        {
            question: "7.	How long does it take to build a responsive Website?",
            answer: "The timeline varies based on project scope but typically ranges from a few weeks to a few months.",
        },
        {
            question: "8.	Can I update the Website myself once it’s built?",
            answer: "Yes, we provide you with an easy-to-use content management system (CMS) or Control panel, so you can update your website whenever necessary without needing technical skills.",
        },
    ];


    const imageSrc = "/Photos/webdevelopment_introduction.webp";
    const imageAlt = "Web Development";
    const paragraphs = [
        "Boost your Business sales with the help of our Custom Website Development services. Techmapperz is a top-rated website development company in India. We are developing interactive, mobile-responsive, and SEO-friendly websites. ",
        "If you don’t have a user-friendly website, you are missing online visibility and growth. Develop your business website us with Techmapperz to boost your sales 10x faster."
    ];
    const services = [
        { text: "Custom Website Boost", highlight: "Your Business Online" },
        { text: "SEO-friendly website helps", highlight: "your marketing campaign" },
        { text: "Fully responsive and ", highlight: "Optimized development code" },
        { text: "Providing End-to-End ", highlight: "solutions" }
    ];
    const backgroundText = "IT Service";

    const ourServicesData = [
        {
            id: 1,
            title: "Custom Website Development",
            icon: "/website_Development_Services_icon/Custom_Website_Development.svg",
            description: "Custom Website Development: A Custom website plays an important role in growing your presence online. At Techmapperz, we will help you to develop a unique design website with full mobile responsiveness and smooth user navigation in every section. Our Custom website development services include details research and planning according to your requirements, interactive web page design, fully responsive, SEO friendly, fast loading time and Eye-catching website to grow your business reach, and drive traffic and sales."
        },
        {
            id: 2,
            title: "E-Commerce Website",
            icon: "/website_Development_Services_icon/E-Commerce Website Development.svg",
            description: "As an experienced E-commerce website design and development company, Techmapperz is focused on helping you with an interactive, user-friendly, mobile-responsive E-commerce website to boost your product sales online. We develop a powerful secure backend and interactive user-friendly, fast and completely responsive frontend design platform which can handle heavy traffic and complex transactions. After your platform launches, our support team will continuously monitor, and optimize your platform to improve performance, security and user experience."
        },
        {
            id: 3,
            title: "Web Portal Development",
            icon: "/website_Development_Services_icon/Web Portal Development.svg",
            description: "Web Portal development is a very crucial part of any business or government sector who are willing to serve a broad customer or a large number of people through various interactive features like Dashboard view, Analytics and report publishing, Notifications, messaging, different collaboration tools etc. Techmapperz provides end-to-end web portal development services and helps you to create a complete custom web portal development that fulfils your requirements. "
        },
        {
            id: 4,
            title: "Website Maintenance and Support",
            icon: "/website_Development_Services_icon/Custom_Website_Development.svg",
            description: "At Techmapperz, we provide Support and maintenance services for your website. We continuously monitor, optimize, and update your website to improve performance, security, and user experience. In the modern time where digital presence can either grow or destroy any business, our Support & Maintenance service will work as your safety assurance partner. So, we keep you one step ahead, so that you can provide every visitor on your site with a coherent and safe experience. "
        },

    ];

    const bannerData = {
        title: (
            <>
                <span className="text-gradient">Custom  Websites </span>
                {" "}Designed to Promote Your Brand & Boost{" "}
                <span className="text-gradient">Business Growth</span>
            </>
        ),
        // title: "Custom Websites Designed to Promote Your Brand & Boost Business Growth",
        subtitle: "TOP RATED AGENCY FOR WEB DEVELOPMENT",
        description: "",
        buttonText: "Get In Touch",
        imageSrc: "/Photos/Webdevelopment_Mockup_banner.webp",
        imageAlt: "Web Development Mockup"
    };

    return (
        <div className="bg-black text-white relative">
            <ScrollToTop />
            <WebsiteBanner {...bannerData} />


            <section className="w-full overflow-hidden">
                <WebsiteIntroduction backgroundText={backgroundText} services={services} paragraphs={paragraphs} imageAlt={imageAlt} imageSrc={imageSrc} />
                <OurServices
                    title="Services we offer"
                    headingText=""
                    description="We create full mobile responsive, fast, secure and user-friendly websites customized to your business needs. From design to development, we build digital experiences that drive results."
                    imageSrc="/Photos/webdevelopment_service_we_offers.webp"
                    imageAlt="Web Development Services"
                    services={ourServicesData}
                />

                <div className=" relative  bg-cover bg-center " style={{ backgroundImage: "url('/Photos/banner_3.webp')" }}>
                    <div className="px-20 py-10 flex max-sm:flex-col-reverse max-sm:gap-2 max-sm:px-2 max-sm:items-center justify-center gap-10 items-center w-full max-w-[1600px] m-auto">
                        <div className="flex flex-col gap-4 w-1/2 max-sm:w-full ">
                            <h1 className="text-4xl max-sm:text-2xl font-bold ">Why Web Design and Web Development is Important?</h1>
                            <p className='text-[18px] max-sm:text-[16px]'>Today the world is connected online, people get to the Internet for any kind of need they may have, in this era Web design and web development are crucial for any business that wants to create an online presence. it is the first impression of your company, make sure it is a good one, and a functioning one as well. A good web design and functionality is also a key element in good sales and business growth.</p>

                        </div>
                        <Image src="/Photos/Why_web Design_Important.webp" unoptimized="true" alt="Why Web Design and Web Development is Important?" className='w-[30%] rounded-md max-sm:w-[90vw]' width={100} height={100} />
                    </div>
                </div>


                <Roadmap />
                <WebsiteDesignElements />
                <TechStack techItems={itTechItems} />

                <WhyChooseTechmapperz
                    features={defaultFeatures}
                    heading={'Why Choose Techmapperz for Website Development'}
                />

                <FAQ faqData={faqData} />
            </section>
        </div>
    );
}

export default WebDevelopment;
