import Image from "next/image";
import blogWatermark from "@/public/Photos/blog_watermark.png"; // Ensure correct path
import { FaTwitter, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';
import { SiQuora } from 'react-icons/si'; // Quora from Simple Icons
import Link from "next/link";
import moment from "moment";

const Card = ({ post }) => {
  const { socialLinks } = post.author;

  return (
    <div className="bg-gray-800 text-white text-left max-w-sm mx-auto rounded-lg shadow-lg">
      <div className="relative rounded-tl-lg rounded-tr-lg overflow-hidden h-60">
        <Image 
          height={120} 
          width={150} 
          src={blogWatermark} 
          className="absolute top-0 right-0 z-10 object-contain"
          alt="Blog Watermark" // Always provide an alt attribute
        />
        <img 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out" 
          src={post.images[0]} 
          alt={post.images[0]}
        />
        <span className="absolute bottom-2 right-0 bg-white bg-opacity-70 px-3 py-1 rounded-l font-bold text-gray-800 text-sm">{`${moment(post.created_at).format('YYYY-MM-DD')}`}</span>
      </div>
      <p className="mt-1 px-4 max-sm:px-1">{post.comments.length} Comments</p>
      <div className="mt-4 px-4 max-sm:px-1">
        <Link href={`/blog/${post._id}`}>
          <h1 className="text-xl font-bold max-sm:text-[16px] ">{post.title}</h1>
        </Link>
      </div>
      <div className="flex gap-2 m-4">
        <span className="bg-gray-400 text-black hover:bg-white hover:font-bold hover:cursor-pointer px-2  py-1 rounded-full text-sm">{post.category}</span>
      </div>
      <div className="flex px-4 max-sm:px-1 text-2xl gap-[10px] mt-4 space-x-4 pb-4">
       
          <a href={socialLinks.linkedin} className="text-blue-700 hover:text-blue-800">
            <FaLinkedinIn />
          </a>
        
        <a href="#" className="text-blue-500 hover:text-blue-600">
          <FaRedditAlien />
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-700">
          <SiQuora />
        </a>
       
          <a href={socialLinks.twitter} className="text-blue-300 hover:text-blue-400">
            <FaTwitter />
          </a>
      
      </div>
    </div>
  );
};

export default Card;
