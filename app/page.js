import ScrollToTop from './_Components/ScrollToTop';
import CustomCarousel from './_Components/HomeCarousel';
import Features from './_Components/Features';
import Technology from './_Components/Technology';
import IndustryExpertise from './_Components/Industry_Expertise';
import AboutUs from './_Components/AboutUs';
import HappyClients from './_Components/HappyClients';
import OurBlog from './_Components/OurBlog';
import Testimonial from './_Components/Testimonial';
import Homecontact from './_Components/Homecontact';
import StickyScrollExample from './_Components/StickyScrollExample';
import ExpandableCards from './_Components/ExpandableCards';








const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <CustomCarousel />
      <Features />
      {/* <ExpandableCards/> */}
      {/* <StickyScrollExample/> */}
      <Technology />
      <IndustryExpertise />
      <AboutUs />
      <HappyClients />
      <OurBlog />
      <Testimonial />
      <Homecontact />
    </div>
  );
};

export default Home;
