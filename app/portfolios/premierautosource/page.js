import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Premier Auto Source | Automotive Information Platform | Techmapperz",
  description: "PremierAutoSource is a dynamic online platform dedicated to providing comprehensive information and resources related to automobiles, developed by Techmapperz.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/premierautosource`,
  },
};

const PremierAutoSourcePortfolio = () => {
  // Find the Premier Auto Source project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "PAS Auto Source");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="premierautosource"
    />
  );
}

export default PremierAutoSourcePortfolio;