import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Land Use & Land Cover Mapping for Human Settlement Analysis",
  description: "Techmapperz specializes in Land Use and Land Cover mapping, using GIS to analyze urban, rural, and residential areas with data on population, infrastructure, and land use.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/landcover_mapping`,
  },
};

const LandcoverMappingPortfolio = () => {
  // Find the Urban & Rural Areas project data from enhanced portfolio data
  const landcoverData = enhancedPortfolioData.find(item => item.name === "Urban & Rural Areas 2D Feature Extraction");
  
  if (!landcoverData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={landcoverData}
      projectSlug="landcover_mapping"
    />
  );
}

export default LandcoverMappingPortfolio;