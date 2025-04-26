import Image from "next/image";
import React from "react";

const ProgramBlock = ({ title, howItWorksTitle, points, images }) => {
  const programPoints = points || [];
  const programImages = images || [];

  const placeholderImage =
    "https://placehold.co/400x300/e0e0e0/333333?text=Program+Image";

  return (
    <section className="container mx-auto py-8 px-4 md:px-12 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
        {title}
      </h2>
     
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          {howItWorksTitle || "How It Works"} {/* Use prop title or default */}
        </h3>

       
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          {programPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-items-center">
        {programImages.map((image, index) => (
          
          <div
            key={index}
            className="w-full relative h-48 rounded-lg overflow-hidden shadow-sm"
          >
            <Image
              src={image.src || placeholderImage} 
              alt={image.alt || "Program related image"} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg" 
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramBlock;
