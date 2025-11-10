import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Hybrid App Development |E-commerce App Development in India | Techmapperz",
  description: "Techmapperz creates user-friendly mobile apps for Android & iOS, delivering scalable, innovative, and high-performance solutions for various industries.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/fabcon`,
  },
};

const FabconPortfolio = () => {
  // Find the Fabcon project data from enhanced portfolio data
  const fabconData = enhancedPortfolioData.find(item => item.name === "Fabcon");
  
  if (!fabconData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={fabconData}
      projectSlug="fabcon"
    />
  );
}

export default FabconPortfolio;