import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Land Use Classification & Analysis | Remote Sensing | Techmapperz",
  description: "Advanced land use classification using satellite imagery, machine learning, and GIS technology for environmental monitoring and urban planning.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/landuse_classification`,
  },
};

const LandUseClassificationPortfolio = () => {
  // Find the Land Use Classification & Analysis project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Land Use Classification & Analysis");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="landuse_classification"
    />
  );
}

export default LandUseClassificationPortfolio;