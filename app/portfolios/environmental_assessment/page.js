import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Environmental Impact Assessment | GIS Environmental Analysis | Techmapperz",
  description: "Comprehensive environmental impact assessment using advanced GIS technology, remote sensing, and spatial analysis for sustainable development projects.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/environmental_assessment`,
  },
};

const EnvironmentalAssessmentPortfolio = () => {
  // Find the Environmental Impact Assessment project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Environmental Impact Assessment");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="environmental_assessment"
    />
  );
}

export default EnvironmentalAssessmentPortfolio;