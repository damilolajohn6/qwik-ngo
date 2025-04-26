"use client";
import React from "react";

const SuccessStoryCard = ({ quote, name, age, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto h-full flex flex-col">
      <div className="text-lg font-semibold text-gray-900 mb-3">
        Game Changer
      </div>
      <blockquote className="text-gray-700 text-base leading-relaxed italic mb-4 flex-grow">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <div className="text-gray-900 font-semibold mb-3">
        {name} ({age} years Old)
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default SuccessStoryCard;
