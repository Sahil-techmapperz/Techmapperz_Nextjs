import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Industrial Planning & Mapping Solutions | GIS Services | Techmapperz",
  description: "Comprehensive industrial planning and mapping services by Techmapperz - optimizing industrial development through advanced GIS technology and sustainable planning.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/industrial_mapping`,
  },
};

const IndustrialMappingPortfolio = () => {
  // Find the Industrial Planning project data from enhanced portfolio data
  const industrialData = enhancedPortfolioData.find(item => item.name === "Industrial Planning and Mapping");
  
  if (!industrialData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={industrialData}
      projectSlug="industrial_mapping"
    />
  );
}

export default IndustrialMappingPortfolio;