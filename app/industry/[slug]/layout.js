import { categoryData } from '@/app/_Components/Industry_Expertise';

export function generateMetadata({ params }) {
	const getIndustryMetadata = (slug) => {
		switch(slug) {
			case 'e-commerce':
				return {
					title: 'E-commerce Solutions | TechMapperz',
					description: 'Custom e-commerce solutions including B2B platforms, online marketplaces, payment integration, and inventory management systems.',
					keywords: 'e-commerce solutions, B2B platforms, online marketplace development, payment integration, inventory management'
				};
			case 'education-&-e-learning':
				return {
					title: 'Education & E-Learning Solutions | TechMapperz',
					description: 'Digital learning solutions including LMS development, virtual classrooms, educational apps, and interactive content creation.',
					keywords: 'e-learning solutions, LMS development, virtual classrooms, educational apps, interactive content'
				};
			case 'government-&-public-sector':
				return {
					title: 'Government & Public Sector Solutions | TechMapperz',
					description: 'Digital solutions for government and public sector including e-governance, public services, and citizen portals.',
					keywords: 'e-governance solutions, public sector technology, digital documentation, citizen portals'
				};
			case 'healthcare':
				return {
					title: 'Healthcare Technology Solutions | TechMapperz',
					description: 'Healthcare technology solutions including EMR systems, telemedicine platforms, healthcare apps, and medical analytics.',
					keywords: 'healthcare technology, EMR systems, telemedicine solutions, healthcare apps, medical analytics'
				};
			case 'logistics-&-supply-chain':
				return {
					title: 'Logistics & Supply Chain Solutions | TechMapperz',
					description: 'Supply chain technology solutions including fleet management, inventory tracking, and route optimization.',
					keywords: 'logistics technology, supply chain solutions, fleet management, inventory tracking, route optimization'
				};
			case 'manufacturing':
				return {
					title: 'Manufacturing Technology Solutions | TechMapperz',
					description: 'Manufacturing solutions including process automation, quality control, and industrial IoT implementation.',
					keywords: 'manufacturing technology, process automation, quality control, industrial IoT, production planning'
				};
			case 'retail':
				return {
					title: 'Retail Technology Solutions | TechMapperz',
					description: 'Retail solutions including POS systems, inventory management, and omnichannel retail platforms.',
					keywords: 'retail technology, POS systems, inventory management, customer analytics, omnichannel retail'
				};
			case 'travel-&-hospitality':
				return {
					title: 'Travel & Hospitality Solutions | TechMapperz',
					description: 'Travel and hospitality solutions including booking systems, hotel management, and customer experience platforms.',
					keywords: 'travel technology, hospitality solutions, booking systems, hotel management, travel apps'
				};
			default:
				return {
					title: 'Industry Solutions | TechMapperz',
					description: 'Custom technology solutions tailored for your industry needs with latest technology and 24/7 support.',
					keywords: 'technology solutions, custom software, digital transformation, industry solutions'
				};
		}
	};

	const metadata = getIndustryMetadata(params.slug);
	return {
		title: metadata.title,
		description: metadata.description,
		keywords: metadata.keywords,
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			type: 'website',
			siteName: 'TechMapperz'
		},
		twitter: {
			card: 'summary_large_image',
			title: metadata.title,
			description: metadata.description
		}
	};
}

export default function Layout({ children }) {
	return children;
}