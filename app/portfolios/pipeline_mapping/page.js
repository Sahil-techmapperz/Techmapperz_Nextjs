import PortfolioDetailTemplate from '../PortfolioDetailTemplate';
import { enhancedPortfolioData } from '../enhancedPortfolioData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://techmapperz.com";

export const metadata = {
  title: "Pipeline Mapping & Analysis | GIS Route Optimization | Techmapperz",
  description: "Professional pipeline mapping and analysis services including route optimization, environmental impact assessment, and infrastructure integration for oil, gas, and water networks.",
  alternates: {
    canonical: `${BASE_URL}/portfolios/pipeline_mapping`,
  },
};

const PipelineMappingPortfolio = () => {
  // Find the Pipeline Mapping & Analysis project data from enhanced portfolio data
  const portfolioItem = enhancedPortfolioData.find(item => item.name === "Pipeline Mapping & Analysis");
  
  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <PortfolioDetailTemplate
      portfolioItem={portfolioItem}
      projectSlug="pipeline_mapping"
    />
  );
}

export default PipelineMappingPortfolio;