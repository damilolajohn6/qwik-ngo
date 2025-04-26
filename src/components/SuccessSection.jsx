"use client";
import React from "react";
import Image from "next/image";
import StoryCard from "./StoryCard";
import { Button } from "./ui/button";

const SuccessSection = () => {
  const storyImage = "/data.jpg"; 
  const cardImage = "/student.jpg"; 

  const cards = Array(6).fill({
    imageSrc: cardImage,
    description:
      "Meet the children whose lives have been transformed through our programs.",
  });

  return (
    <section className="container mx-auto py-12 px-4 md:px-12">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Success Stories
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Every child rescued from forced labor carries with them a story—of
          struggle, resilience, and the unbreakable spirit of hope. At Pathwaytofreedom, these stories are not just milestones; they are the heart of
          our mission...
        </p>
      </div>

      {/* Video Thumbnail */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src={storyImage}
          alt="Success Stories Video"
          width={800}
          height={450}
          className="rounded-lg"
          style={{ objectFit: "cover" }}
        />
        {/* Optional: Add a play button icon absolutely centered here if you want */}
      </div>

      <div className="text-center mb-16">
        <Button className="bg-green-200 text-green-800 font-semibold px-6 py-2 rounded-full hover:bg-green-300 transition">
          Subscribe to our YouTube Channel
        </Button>
      </div>

      {/* Be Part of Their Story */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Be Part of Their Story
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((card, idx) => (
            <StoryCard
              key={idx}
              imageSrc={card.imageSrc}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Before & After Journeys */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Before & After Journeys
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.slice(3).map((card, idx) => (
            <StoryCard
              key={idx}
              imageSrc={card.imageSrc}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Create New Story Button */}
      <div className="text-center">
        <Button className="bg-green-200 text-green-800 font-semibold px-8 py-3 rounded-full hover:bg-green-300 transition">
          Create a New Story, Donate Now
        </Button>
      </div>
    </section>
  );
};

export default SuccessSection;
