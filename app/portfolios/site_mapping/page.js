import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Comprehensive Site Mapping Services | LiDAR & Drone Surveys | Techmapperz",
  description: "Professional site mapping services including topographical LiDAR surveys, pipeline mapping, and mining operations analysis using advanced GIS technology.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/site_mapping`,
  },
};

const SiteMappingPortfolio = () => {
  // Find the Comprehensive Site Mapping Services project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Comprehensive Site Mapping Services");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="site_mapping"
    />
  );
}

export default SiteMappingPortfolio;