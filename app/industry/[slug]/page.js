"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { categoryData } from '@/app/_Components/Industry_Expertise';

const IndustryDetailPage = () => {
	const params = useParams();
	const industry = categoryData.find(
		cat => cat.name.toLowerCase().replace(/\s+/g, '-') === params.slug
	);

	if (!industry) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-black">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
					<Link href="/" className="text-blue-400 hover:text-blue-300">
						Return to Home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black">
			{/* Hero Header Section */}
			<div className="relative h-[60vh] w-full">
				<div className="absolute inset-0 bg-black/70 z-10"/>
				<Image
					src={industry.image}
					alt={industry.name}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
						{industry.name}
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl animate-fade-in-up">
						{industry.desc}
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="py-16 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
						<div className="p-8">
							<div className="mb-8">
								<h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
								<ul className="space-y-3">
									{industry.listarr.map((item, index) => (
										<li key={index} className="flex items-start">
											<span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
											<span className="text-gray-300 flex-1">{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mb-8">
								<h2 className="text-2xl font-semibold text-white mb-4">Categories</h2>
								<div className="flex flex-wrap gap-3">
									{industry.categoryTypes.map((type, index) => (
										<span
											key={index}
											className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-colors duration-200"
										>
											{type}
										</span>
									))}
								</div>
							</div>

							<div className="mt-8 pt-8 border-t border-gray-800">
								<Link 
									href="/"
									className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
								>
									Back to Industries
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndustryDetailPage;