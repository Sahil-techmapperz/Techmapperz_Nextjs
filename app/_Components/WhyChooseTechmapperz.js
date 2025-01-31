import Image from 'next/image';
import T01 from '@/public/Photos/01.png';
import T02 from '@/public/Photos/02.png';
import T03 from '@/public/Photos/03.png';
import T04 from '@/public/Photos/04.png';

const WhyChooseTechmapperz = () => {
    const features = [
        {
            img: '/Photos/Webdevelop.png',
            icon: T01,
            title: 'Flexibility',
            description: 'We understand your need, and sometime we know that it can be time critical yet should be affordable.'
        },
        {
            img: '/Photos/Develop1.png',
            icon: T02,
            title: 'Friendly',
            description: 'Nothing is more important than a customer-oriented business model, we at Techmapperz love what we do.'
        },
        {
            img: '/Photos/Develop2.png',
            icon: T03,
            title: 'Quality',
            description: 'Quality makes us excel. Our approach is designed to provide it at all levels of functioning up to the micro level details.'
        },
        {
            img: '/Photos/Develop3.png',
            icon: T04,
            title: 'Reduce cost',
            description: 'Our team planning is so efficient that the project overall time is not extended and thus keeping the overall cost in check.'
        }
    ];

    return (
        <div className="px-20 max-sm:px-2 py-10 relative max-w-[1600px] m-auto">
            <div className="absolute bottom-[-5rem] right-[5rem] text-[150px] leading-[968px] text-white opacity-5">?</div>
            <h3 className="text-4xl max-sm:text-2xl font-bold text-center mb-8">
                Why Choose Techmapperz for your Development
            </h3>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:w-[90vw] max-sm:gap-2 gap-6 w-full  m-auto">
                {features.map((feature, index) => (
                    <div key={index} className={` p-4 rounded-[20px] bg-gray-800`}>
                        {/* <Image src={feature.icon} alt="" width={50} height={50} className='absolute top-7 right-5' /> */}
                        <div className='flex flex-col justify-around gap-2 items-center'>
                            <Image src={feature.img} alt={feature.title} width={50} height={50} />
                            <h1 className="text-2xl font-bold mt-4 text-center">{feature.title}</h1>
                            <p className="text-center mt-4 text-gray-300" title={feature.description}>{feature.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseTechmapperz;