import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Site Suitability Analysis | GIS Consulting Services | Techmapperz",
  description: "Professional site suitability analysis using advanced GIS techniques and multi-criteria decision analysis to determine optimal locations for development projects.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/site_suitability`,
  },
};

const SiteSuitabilityPortfolio = () => {
  // Find the Site Suitability Analysis project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Site Suitability Analysis");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="site_suitability"
    />
  );
}

export default SiteSuitabilityPortfolio;