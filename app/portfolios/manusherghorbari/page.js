import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Manusher Ghorbari Booking Platform | Hospitality Solution | Techmapperz",
  description: "The Manusher Ghorbari room booking website is a user-friendly platform devoted to simplifying hotel reservation processes, developed by Techmapperz.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/manusherghorbari`,
  },
};

const ManusherGhorbariPortfolio = () => {
  // Find the Manusher Ghorbari project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Manusher Ghorbari");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="manusherghorbari"
    />
  );
}

export default ManusherGhorbariPortfolio;