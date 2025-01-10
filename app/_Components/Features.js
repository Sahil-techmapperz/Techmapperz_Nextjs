import Link from 'next/link';
import feature_1 from '@/public/Photos/feature_1.png';
import feature_2 from '@/public/Photos/feature_2.png';
import feature_3 from '@/public/Photos/feature_3.png';
import feature_4 from '@/public/Photos/feature_4.png';
import feature_5 from '@/public/Photos/feature_5.png';
import feature_6 from '@/public/Photos/feature_6.png';
import FlipCard from './FlipCard';



const Features = () => {

  return (
    <section className="bg-black py-8 max-sm:py-2 max-sm:px-4 px-[4rem] relative">
      <div className="grid grid-cols-1 m-auto">
        <div className='flex flex-col items-center'>
          <p className="text-white text-xl font-semibold mb-4">Features</p>
          <h1 className="text-white text-center w-[60%] max-sm:w-full max-sm:text-[20px] text-[26px] mb-6">These Services to Expand your Business</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className="text-gray-300 w-[70%] max-sm:w-full text-center text-lg max-sm:text-[14px] mb-8">To assist companies in thriving in the digital age, we provide a variety of technological services. We can assist businesses in managing their resources, connecting with their audiences online, and optimizing their operations thanks to our knowledge and expertise.</p>
        </div>
      </div>


      <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-[90%] m-auto'>
        <FlipCard  backImage={"Photos/feature_2.png"} title={"Mobile Development"}  backdiv_arr={['Android Apps Development','iOS Apps Development','Hybrid Apps Development',"Progressive Web Apps"]}/>
        <FlipCard  backImage={"Photos/feature_3.png"} title={"Drone Solution"}  backdiv_arr={['Drone Surveying','Drone Data Mapping','Inspection & Analysis',"Drone Data Processing"]}/>
        <FlipCard  backImage={"Photos/feature_4.png"} title={"CRM Solution"}  backdiv_arr={['Sales CRM Development','Project CRM Development',"Finance CRM Development",'Custom CRM Development']}/>
        <FlipCard  backImage={"Photos/feature_5.png"} title={"IT Consulting"}  backdiv_arr={['IT Strategy & Consulting','Digital Transformation',"Custom Software Development","Software modernization"]}/>
        <FlipCard  backImage={"Photos/feature_6.png"} title={"GIS Solution"}  backdiv_arr={['GIS Mapping','Image Processing','Web GIS Services',"GIS Field Survey"]}/>
        <FlipCard  backImage={"Photos/feature_1.png"}  title={"Website Development"}  backdiv_arr={['Dynamic Website Development','Static Website Development','E-Commerce Website Development',"Custom Website Development"]}/>

      </div>

      <div className='flex relative justify-center mt-5 mb-[50px]'>
          {/* <div className='bg-blue-500 w-12 h-12 rounded-full'></div> */}
          <button className='bg-white animate-blink text-[#D454B4] text-lg py-2 px-4 rounded-md  shadow-[0px_0px_8px_0px_#D555B5] hover:shadow-[0px_0px_8px_0px_#00B0FE] uppercase hover:text-[#00B0FE] font-[600] transition-all duration-300'>
            <Link href="/service">View All Services</Link>
          </button>
      </div>
    </section>
  );
};

export default Features;
