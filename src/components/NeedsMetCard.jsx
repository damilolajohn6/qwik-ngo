import React from "react";

const NeedsMetCard = ({ title, description }) => {
  return (
    <div className="bg-blue-200 rounded-lg shadow-md p-6 h-full flex flex-col">

      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed flex-grow">

        {description}
      </p>
    </div>
  );
};

export default NeedsMetCard;
