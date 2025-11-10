import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "SHRC NGO Website with Two-Step OTP Verification | Case Study | Techmapperz",
  description: "Discover how Techmapperz developed a seamless booking platform for SHRC, featuring real-time availability, secure payments, and a hassle-free travel experience.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/shrc`,
  },
};

const SHRCPortfolio = () => {
  // Find the SHRC project data from enhanced portfolio data
  const shrcData = enhancedPortfolioData.find(item => item.name === "SHRC");
  
  if (!shrcData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={shrcData}
      projectSlug="shrc"
    />
  );
}

export default SHRCPortfolio;