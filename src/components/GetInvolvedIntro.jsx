import React from "react";

const GetInvolvedIntro = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-12 text-center">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Your Role in Building Brighter Futures
      </h1>

      {/* Brief Overview */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
        This page is your hub for all the ways you can support our mission to
        rescue children and provide them with opportunities to thrive. Every
        action, big or small, makes a tangible difference.
      </p>

      {/* Call to Action */}
      <p className="text-xl font-semibold text-blue-700">
        Explore the options below and find the best way for you to get involved!
      </p>
    </section>
  );
};

export default GetInvolvedIntro;
