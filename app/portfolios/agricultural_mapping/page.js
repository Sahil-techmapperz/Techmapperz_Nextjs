import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Agricultural Mapping & Precision Farming | GIS Solutions | Techmapperz",
  description: "Comprehensive agricultural mapping services using advanced GIS technology and drone surveys to optimize farming practices and crop management.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/agricultural_mapping`,
  },
};

const AgriculturalMappingPortfolio = () => {
  // Find the Agricultural Mapping project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Agricultural Mapping");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="agricultural_mapping"
    />
  );
}

export default AgriculturalMappingPortfolio;