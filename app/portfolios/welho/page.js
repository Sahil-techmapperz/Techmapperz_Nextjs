import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Welho Health & Wellness Platform | Case Study | Techmapperz",
  description: "Welho is an outstanding online platform providing a huge variety of wellness services and products to promote holistic fitness and well-being, developed by Techmapperz.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/welho`,
  },
};

const WelhoPortfolio = () => {
  // Find the Welho project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Welho");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="welho"
    />
  );
}

export default WelhoPortfolio;