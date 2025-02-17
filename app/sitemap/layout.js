export const metadata = {
	title: 'Sitemap | Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website, including our services, portfolio, industries, and resources',
	description: 'Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website, including our services, portfolio, industries, and resources.',
	openGraph: {
		title: 'Sitemap | Techmapperz',
		description: 'Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website.',
		type: 'website',
		url: '/sitemap',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sitemap | Techmapperz',
		description: 'Navigate through our comprehensive sitemap to explore all sections and pages of Techmapperz website.'
	}
};

export default function SitemapLayout({ children }) {
	return <>{children}</>;
}