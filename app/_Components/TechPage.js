import React from "react";
import PropTypes from "prop-types";
import techStack from "./../technology/techStack"; // Your tech data

const TechPage = ({ query }) => {
  const stack = query?.stack;

  // Find the tech by name
  const tech = techStack.find(
    (item) => item.name?.toLowerCase() === stack?.toLowerCase()
  );

  console.log(tech);

  if (!tech) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 to-black">
        <div className="text-center text-lg font-semibold text-gray-400">
          Technology not found
        </div>
      </div>
    );
  }

  const {
    name = "Unknown",
    icon = "💻",
    releaseDate = "N/A",
    creator = "N/A",
    description = "No description available.",
    useCases = [],
    popularCompanies = [],
    website = "#",
    bg = "#1A202C",
    textColor = "#E2E8F0",
    features = [],
    popularity = "N/A",
    relatedTechnologies = [],
  } = tech;

  return (
    <div
      className="p-6 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-5xl">{icon}</div>
          <h1 className="text-4xl font-extrabold " style={{ color: textColor }}>
            {name}
          </h1>
        </div>

        <div className="mt-6 text-gray-300 space-y-4">
          <p>
            <strong className="text-white">Release Date:</strong> {releaseDate}
          </p>
          <p>
            <strong className="text-white">Creator:</strong> {creator}
          </p>
          <p className="mt-4">
            <strong className="text-white">Description:</strong> {description}
          </p>
        </div>

        {features.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold text-xl text-white">Key Features:</p>
            <ul className="list-disc pl-6 text-gray-300">
              {features.map((feature, index) => (
                <li key={index} className="my-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {popularity && (
          <div className="mt-6">
            <p className="font-semibold text-xl text-white">Popularity:</p>
            <p className="text-gray-300">{popularity}</p>
          </div>
        )}

        {useCases.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold text-xl text-white">Use Cases:</p>
            <ul className="list-disc pl-6 text-gray-300">
              {useCases.map((useCase, index) => (
                <li key={index} className="my-2">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        )}

        {popularCompanies.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold text-xl text-white">Popular Companies:</p>
            <ul className="list-disc pl-6 text-gray-300">
              {popularCompanies.map((company, index) => (
                <li key={index} className="my-2">
                  {company}
                </li>
              ))}
            </ul>
          </div>
        )}

        {relatedTechnologies.length > 0 && (
          <div className="mt-6">
            <p className="font-semibold text-xl text-white">
              Related Technologies:
            </p>
            <ul className="list-disc pl-6 text-gray-300">
              {relatedTechnologies.map((tech, index) => (
                <li key={index} className="my-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

TechPage.propTypes = {
  query: PropTypes.shape({
    stack: PropTypes.string.isRequired,
  }).isRequired,
};

export default TechPage;
