import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Hooghly Riverfront City Mapping | Drone-Based Urban Analysis | Techmapperz",
  description: "Advanced city mapping project using drone technology and GIS systems to create detailed urban infrastructure maps for the Hooghly Riverfront area.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/city_mapping`,
  },
};

const CityMappingPortfolio = () => {
  // Find the Hooghly Riverfront project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Hooghly Riverfront");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="city_mapping"
    />
  );
}

export default CityMappingPortfolio;