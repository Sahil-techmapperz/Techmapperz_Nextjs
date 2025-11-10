import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "White Spread Foods Dashboard | Business Intelligence Platform | Techmapperz",
  description: "The White Spread Foods Dashboard is an all-encompassing solution designed to provide real-time insights on multiple aspects of company operations, developed by Techmapperz.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/whitespreadfoods`,
  },
};

const WhiteSpreadFoodsPortfolio = () => {
  // Find the White Spread Foods project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "White Spread Foods");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="whitespreadfoods"
    />
  );
}

export default WhiteSpreadFoodsPortfolio;