import Link from "next/link";
import FlipCard from "./FlipCard";
import crm from '@/public/Icons/crm.svg'
import drone from '@/public/Icons/drone.svg'
import web_dev from '@/public/Icons/web dev.svg'
import app_dev from '@/public/Icons/app dev.svg'
import consultant from '@/public/Icons/consultant.svg'
import GIS from '@/public/Icons/GIS.svg'

import crm_Color_changed from '@/public/Icons/crm Color Changed.png'
import drone_Color_changed from '@/public/Icons/drone Color Changed.png'
import web_dev_Color_changed from '@/public/Icons/web dev Color Changed.png'
import app_dev_Color_changed from '@/public/Icons/app dev Color changed.png'
import consultant_Color_changed from '@/public/Icons/consultant Color Changed.png'
import GIS_Color_changed from '@/public/Icons/GIS Color Changed.png'
import Image from "next/image";
import HoverButton from "./ExpandButton";

const Features = () => {
  const features = [

    {
      backImage: "Photos/feature_1.webp",
      title: "Website Development",
      desc: "Boost your Business sales with the help of our Custom Website Development services. Techmapperz is a top-rated website development company in India for top-rated user interactive, mobile-responsive, and SEO-friendly website design and development.",
      icon: <Image src={web_dev} className="w-[60px]" />,
      hover_icon: web_dev_Color_changed
      , link: "/service/it/webdevelopment"
    },
    {
      backImage: "Photos/feature_2.webp",
      title: "App Development",
      desc: "Techmapperz is a leading Mobile App development service provider in India. Whether you want a Native web app for Android or iOS or custom apps using Flutter or React Native, we have developed it all for our customers.",
      icon: <Image src={app_dev} className=" w-[60px] " />,
      hover_icon: app_dev_Color_changed
      , link: "/service/it/mobiledevelopment"
    },

    {
      backImage: "Photos/feature_4.webp",
      title: "CRM Solution",
      desc: "We are offering tailored CRM software development solutions. At Techmapperz, we design & develop custom CRM systems that seamlessly align with your business objectives, enabling you to efficiently manage interactions, track sales, and gain valuable insights from customer data.",
      icon: <Image src={crm} className="w-[60px]" />,
      hover_icon: crm_Color_changed
      , link: "/service/it/crmservice"
    },
    {
      backImage: "Photos/feature_5.webp",
      title: "IT Consulting",
      desc: "Grow your business with our expert IT consulting and advisory services. At Techmapperz, we deliver strategic insights and innovative solutions developed for your specific challenges. Partner with us to turn your IT vision into reality and drive your business forward.",
      icon: <Image src={consultant} className="w-[60px]" />,
      hover_icon: consultant_Color_changed
      , link: "/service/it/itconsultingservice"
    },

    {
      backImage: "Photos/feature_3.webp",
      title: "Drone Solution",
      desc: "Elevate your projects with our cutting-edge Drone Services at Techmapperz. We specialise in UAV surveys and mapping, we deliver high-precision ortho mosaic images, detailed point cloud data, and advanced feature extraction tailored to your specific needs. ",
      icon: <Image src={drone} className="w-[60px]" />,
      hover_icon: drone_Color_changed
      , link: "/service/gis/droneservice"
    },



    {
      backImage: "Photos/feature_6.webp",
      title: "GIS Solution",
      desc: "We offer end-to-end GIS Solutions that help the public & Government organizations, improve their decision support system. Our goal is simple: to give detailed and accurate spatial data insights that facilitate better decision-making, operational efficiency, and strategic planning.",
      icon: <Image src={GIS} className="w-[60px]" />,
      hover_icon: GIS_Color_changed
      , link: "/service/gis/gisservice"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1600px] mx-auto ">
      {features.map((feature, index) => (
        <FlipCard
          key={index}
          title={feature.title}
          desc={feature.desc}
          icon={feature.icon}
          link={feature.link}
          hover_icon={feature.hover_icon}
        />
      ))}
    </div>
  );
};

export default Features;
