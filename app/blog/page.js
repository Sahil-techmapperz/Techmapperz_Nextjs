import Link from "next/link";
import BlogList from "../_Components/BlogList";
import RecentBlogList from "../_Components/RecentBlogList";
import SearchPosts from "../_Components/SearchPosts";
import ScrollToTop from "../_Components/ScrollToTop";
import blogs_banner_img from "@/public/Photos/blogs_banner.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


export const metadata = {
  title: "Techmapperz Blogs",
  description: "Techmapperz map your business",
};

const ArticlePage = ({ searchParams }) => {
  let page = searchParams.page;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ScrollToTop />

      <div className='relative w-full'>
        <Image src={blogs_banner_img} className='w-full h-[500px]' alt="About Us Banner" />
        <div className='absolute inset-0 w-full h-full bg-black/80 bg-opacity-50 flex flex-col justify-center items-center'>
          <h1 className='text-center text-6xl max-sm:text-3xl text-white font-bold'>Blogs</h1>
          <p className='text-center text-lg max-sm:text-sm max-sm:w-full text-gray-200 mt-4 px-4 md:px-8 md:w-[50%]'>
            Chasing the Vision for a better tomorrow where technology simplifies complex functions
          </p>
          <div className="flex gap-4 text-white mt-8">
            <Link href="/contact">
              <button
                className="py-3 px-6 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
              >
                Get A  Quote
                <FaArrowRightLong />
              </button>
            </Link>
          </div>        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-3 p-8 max-sm:px-2">
        <div className="w-full md:w-[70%] h-auto">
          <BlogList page={page} />
        </div>
        <div className="w-full md:w-[30%]">
          <SearchPosts />
          <RecentBlogList />
        </div>
      </div>
    </div>
  );
};


export default ArticlePage;
