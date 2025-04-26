import React from "react";
import Link from "next/link";

const WaysToImpactOverview = () => {
  // Define the different ways to get involved
  const impactOptions = [
    {
      name: "Donate",
      description: "Fuel our programs with your financial support.",
      link: "#donate-section",
      icon: "💰",
    }, // Use emoji as placeholder icon
    {
      name: "Volunteer",
      description: "Lend your skills and time to our cause.",
      link: "#volunteer-section",
      icon: "🤝",
    },
    {
      name: "Partner",
      description: "Collaborate with us for greater impact.",
      link: "#partner-section",
      icon: "🏢",
    },
    {
      name: "Advocate",
      description: "Help us spread the word and raise awareness.",
      link: "#advocate-section",
      icon: "📣",
    },
    {
      name: "Attend Events",
      description: "Connect with us at upcoming events.",
      link: "#events-section",
      icon: "📅",
    },
    {
      name: "Stay Connected",
      description: "Receive updates and stories.",
      link: "#newsletter-section",
      icon: "📧",
    },
  ];

  return (
    <section className="container mx-auto py-12 px-4 md:px-12  ">
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        How You Can Help
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {impactOptions.map((option) => (
         
          <Link
            href={option.link}
            key={option.name}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 ease-in-out h-full"
          >
            
              <div className="text-4xl mb-4">
                
                {option.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {option.name}
              </h3>
             
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {option.description}
              </p>
              
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WaysToImpactOverview;
