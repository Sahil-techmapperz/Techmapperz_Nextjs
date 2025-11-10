import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Techmapperz CRM | Customer Relationship Management System | Case Study",
  description: "The sales, marketing, and customer relationship management software designed to provide factual data and management tools for customer interaction within Techmapperz CRM.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/crm`,
  },
};

const TechmapperzCRMPortfolio = () => {
  // Find the Techmapperz CRM project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Techmapperz CRM");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="crm"
    />
  );
}

export default TechmapperzCRMPortfolio;