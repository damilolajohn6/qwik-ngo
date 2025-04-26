"use client";
import React from "react";
import BulletList from "./BulletList";
import Gallery from "./Gallery";

const ProgramSection = ({
  title,
  description,
  rescuePoints,
  carePoints,
  rehabPoints,
  images,
}) => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 mb-8">{description}</p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        How It Works
      </h3>

      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Rescue Missions
          </h4>
          <BulletList items={rescuePoints} />
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Immediate Care
          </h4>
          <BulletList items={carePoints} />
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Rehabilitation Services
          </h4>
          <BulletList items={rehabPoints} />
        </div>
      </div>

      <Gallery images={images} />
    </section>
  );
};

export default ProgramSection;
