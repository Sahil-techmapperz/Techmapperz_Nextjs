import Image from "next/image";
import Link from "next/link";
import { FaCircleRight, FaArrowRightLong } from "react-icons/fa6";

const WebsiteIntroduction = () => {
    const services = [
        { text: "Custom Website Development to boost", highlight: "Your Business Online" },
        { text: "Build SEO friendly website that helps", highlight: "Your marketing campaign" },
        { text: "Our code is responsive and optimized", highlight: "For high performance" },
        { text: "Complete solutions from design to launching", highlight: "Your website." }
    ];

    return (
        <div className="px-20 max-lg:px-10 max-md:px-5 max-sm:px-2 py-10 relative max-w-[1600px] m-auto">
            <div className="absolute bottom-0 right-0 text-[116px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[40px] leading-[174px] max-lg:leading-[100px] max-md:leading-[80px] max-sm:leading-[50px] text-white opacity-5">
                IT Service
            </div>

            <div className="flex max-lg:flex-col max-lg:items-center gap-10 max-md:gap-5">
                <Image
                    unoptimized
                    src="/Photos/WebDev3.gif"
                    alt="Web Development"
                    className="w-[40%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[90vw]"
                    width={100}
                    height={100}
                />

                <div className="w-[60%] max-lg:w-full flex flex-col gap-4">
                    <p className="text-[18px] max-md:text-[16px] text-justify">
                        Boost your Business sales with the help of our Custom Website Development services. Techmapperz is a top-rated website development company in India for top-rated user interactive, mobile-responsive, and SEO-friendly website design and development. Our experienced developers have extensive expertise in WordPress, PHP, Node.js, Next.js, and Java to develop a customized interactive website for you, that boosts your business.
                    </p>
                    <p className="text-[18px] max-md:text-[16px] text-justify">
                        If you don’t have a user-friendly website, you are missing online visibility and growth. Develop your business website with Techmapperz to boost your sales 10x faster.
                    </p>

                    <div className="w-full flex flex-col gap-4">
                        {services.map((item, index) => (
                            <div key={index} className="text-[22px] max-md:text-[18px] flex flex-row flex-wrap gap-2 items-baseline w-full">
                                <FaCircleRight className="text-[#336AA8]" />
                                <span>{item.text} </span>
                                <span className="text-gradient text-[24px] max-md:text-[20px] font-bold">{item.highlight}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        className="py-[10px] px-[15px] w-fit rounded-sm"
                        style={{
                            background: "linear-gradient(90deg, #EC212C 0%, #396BA9 100%)",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        <Link href="/contact" className="text-white no-underline">
                            Know more
                            <FaArrowRightLong className="inline-block ml-2" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WebsiteIntroduction;
