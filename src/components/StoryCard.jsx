"use client";
import Image from "next/image";
import React from "react";

const StoryCard = ({ imageSrc, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt="Story Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
