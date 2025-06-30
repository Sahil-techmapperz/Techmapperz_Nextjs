import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import error_404 from "@/public/404_error_image/2.webp";

export const metadata = {
    title: "404 | Page Not Found - Techmapperz",
    description: "Oops! The page you're looking for isn't available. Explore Techmapperz to map your business efficiently.",
};


export default function NotFound() {
    return (
        <main className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">
            <Image
                src={error_404}
                alt="404 Not Found"
                width={500}
                height={300}
                className="max-w-full h-auto"
            />

            <h2 className="text-lg font-medium mt-4 text-gray-700">
                This page could not be found.
            </h2>

            <Link href="/">
                <button
                    className="text-white font-semibold  mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#2d5689] to-[#a82123] transition-all duration-300 flex items-center gap-2"
                >
                    {/* <FaArrowLeftLong /> */}
                    GO BACK TO HOME
                    <FaArrowRightLong />
                </button>
            </Link>
        </main>
    );
}
