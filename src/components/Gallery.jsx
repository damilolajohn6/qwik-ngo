"use client";
import Image from "next/image";
import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative w-full h-48 rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={src}
            alt={`Gallery Image ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
