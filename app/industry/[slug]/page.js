"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { categoryData } from '@/app/_Components/Industry_Expertise';

const IndustryDetailPage = () => {
	const params = useParams();
	const industry = categoryData.find(
		cat => cat.name.toLowerCase().replace(/[&\s]+/g, '-') === params.slug
	);

	// Add industry-specific features
	const features = [
		{ title: "Custom Solutions", description: "Tailored solutions designed specifically for your business needs" },
		{ title: "Latest Technology", description: "Implementation of cutting-edge technologies and best practices" },
		{ title: "Scalable Systems", description: "Solutions that grow with your business needs" },
		{ title: "24/7 Support", description: "Round-the-clock technical support and maintenance" }
	];

	// Add industry-specific benefits
	const benefits = [
		{ title: "Increased Efficiency", description: "Streamline operations and improve productivity" },
		{ title: "Cost Reduction", description: "Optimize resources and reduce operational costs" },
		{ title: "Better Customer Experience", description: "Enhanced user experience and satisfaction" },
		{ title: "Data-Driven Insights", description: "Make informed decisions with advanced analytics" }
	];

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
			<div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
				<div className="absolute inset-0 bg-black/70 z-10" />
				<Image
					src={industry.image}
					alt={industry.name}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
					<span className="text-4xl sm:text-5xl md:text-6xl mb-4">{industry.icon}</span>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
						{industry.name}
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl animate-fade-in-up px-4">
						{industry.desc}
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="py-8 sm:py-12 md:py-16 px-4">
				<div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
					{/* Services Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Our Services</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{industry.categoryTypes.map((type, index) => (
									<div
										key={index}
										className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
									>
										<h3 className="text-blue-400 text-base sm:text-lg font-medium mb-2">{type}</h3>
										<p className="text-gray-400 text-sm sm:text-base">
											Comprehensive solutions for {type.toLowerCase()} in the {industry.name.toLowerCase()} sector
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Features Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Key Features</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{features.map((feature, index) => (
									<div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-1">
										<h3 className="text-blue-400 text-base sm:text-lg font-medium mb-2">{feature.title}</h3>
										<p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Benefits Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Benefits</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{benefits.map((benefit, index) => (
									<div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-1">
										<h3 className="text-blue-400 text-base sm:text-lg font-medium mb-2">{benefit.title}</h3>
										<p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform transition-all duration-300 hover:scale-[1.01]">
						<div className="p-4 sm:p-6 md:p-8 text-center">
							<h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
							<p className="text-gray-400 text-sm sm:text-base mb-6">
								Let's discuss how we can help transform your {industry.name.toLowerCase()} business
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="/contact"
									className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
								>
									Contact Us
								</Link>
								<Link
									href="/"
									className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
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
