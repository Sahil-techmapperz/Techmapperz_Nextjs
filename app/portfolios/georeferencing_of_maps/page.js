import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Advanced Georeferencing Services | Historical Map Digitization | Techmapperz",
  description: "Professional georeferencing services by Techmapperz - transforming legacy maps into precise digital geographic data with exceptional accuracy and quality.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/georeferencing_of_maps`,
  },
};

const GeoreferencingPortfolio = () => {
  // Find the Georeferencing project data from enhanced portfolio data
  const georeferencingData = enhancedPortfolioData.find(item => item.name === "Georeferencing of Maps");
  
  if (!georeferencingData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={georeferencingData}
      projectSlug="georeferencing_of_maps"
    />
  );
}

export default GeoreferencingPortfolio;