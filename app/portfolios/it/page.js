"use client";

import { useState } from "react";
import CaseStudyCard from "@/app/_Components/CaseStudyCard";
import ScrollToTop from "../../_Components/ScrollToTop";
import Link from "next/link";
import Portfolio_banner from "@/public/Photos/Portfolio_banner.png";
import Image from "next/image";

const ITPortfolio = () => {
	return (
		<div className="min-h-screen bg-gray-900">
			<ScrollToTop />
			<div className="relative w-full">
				<Image src={Portfolio_banner} className="w-full h-[400px] object-cover" alt="IT Portfolio Banner" />
				<div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
					<h1 className="text-center text-5xl text-white font-bold">IT Solutions Portfolio</h1>
					<p className="text-center text-xl text-gray-200 mt-4 px-4 md:px-8 md:w-[60%]">
						Innovative IT solutions driving digital transformation and business growth
					</p>
					<div className="flex gap-4 mt-6">
						<Link href="/contact" className="text-lg flex items-center border-2 px-6 py-2 font-semibold uppercase rounded-md bg-white text-[#00B0FE] hover:bg-[#00B0FE] hover:text-white transition-all duration-300">
							Contact Us
						</Link>
						<Link href="/portfolios" className="text-lg flex items-center border-2 px-6 py-2 font-semibold uppercase rounded-md border-white text-white hover:bg-white hover:text-[#00B0FE] transition-all duration-300">
							All Portfolios
						</Link>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8">
					<CaseStudyCard filter="IT" />
				</div>
			</div>
		</div>
	);
};

export default ITPortfolio;