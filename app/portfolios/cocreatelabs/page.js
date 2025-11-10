import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Website Advance Tool | Advance Dashboard | Techmapperz | India",
  description: "Boost productivity with our website advance tools that ensuring seamless data management, automation, and analytics for smarter decisions.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/cocreatelabs`,
  },
};

const CocreateLabsPortfolio = () => {
  // Find the Cocreate Lab project data from enhanced portfolio data
  const cocreateLabsData = enhancedPortfolioData.find(item => item.name === "Cocreate Lab");
  
  if (!cocreateLabsData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={cocreateLabsData}
      projectSlug="cocreatelabs"
    />
  );
}

export default CocreateLabsPortfolio;