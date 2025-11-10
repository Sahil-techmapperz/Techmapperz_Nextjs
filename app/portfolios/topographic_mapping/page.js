import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Topographic Mapping & Surveying | LiDAR Services | Techmapperz",
  description: "Advanced topographic mapping and surveying services using LiDAR, photogrammetry, and GPS technology for engineering and development projects.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/topographic_mapping`,
  },
};

const TopographicMappingPortfolio = () => {
  // Find the Topographic Mapping & Surveying project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Topographic Mapping & Surveying");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="topographic_mapping"
    />
  );
}

export default TopographicMappingPortfolio;