"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SponsorLogosSection = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef(null);

  const [visibleLogos, setVisibleLogos] = useState(4); 

  const defaultLogos = [
    { src: "/logos/sponsor1.png", alt: "Sponsor 1 Logo" },
    { src: "/logos/sponsor2.png", alt: "Sponsor 2 Logo" },
    { src: "/logos/sponsor3.png", alt: "Sponsor 3 Logo" },
    { src: "/logos/sponsor4.png", alt: "Sponsor 4 Logo" },
    { src: "/logos/sponsor5.png", alt: "Sponsor 5 Logo" },
    { src: "/logos/sponsor6.png", alt: "Sponsor 6 Logo" },
    { src: "/logos/sponsor7.png", alt: "Sponsor 7 Logo" },
    { src: "/logos/sponsor8.png", alt: "Sponsor 8 Logo" },
    { src: "/logos/sponsor9.png", alt: "Sponsor 9 Logo" },
    { src: "/logos/sponsor10.png", alt: "Sponsor 10 Logo" },
    // Add more logo objects here
  ];

  const sponsorLogos = logos && logos.length > 0 ? logos : defaultLogos;

  useEffect(() => {
    const calculateVisibleLogos = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        if (width >= 1024) {

            setVisibleLogos(5);
        } else if (width >= 768) {

            setVisibleLogos(4);
        } else if (width >= 640) {

            setVisibleLogos(3);
        } else {

            setVisibleLogos(2);
        }
      }
    };

    calculateVisibleLogos();
    window.addEventListener("resize", calculateVisibleLogos);

    return () => {
      window.removeEventListener("resize", calculateVisibleLogos);
    };
  }, []);

  const maxIndex = Math.max(0, sponsorLogos.length - visibleLogos);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const transformValue = `translateX(-${currentIndex * (100 / visibleLogos)}%)`;

  return (
    <section className="container mx-auto py-12 px-4 md:px-12">

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Sponsors
      </h2>

      <div ref={carouselRef} className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: transformValue }}
        >
          {sponsorLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-1/${visibleLogos} flex items-center justify-center p-4`} 
              style={{ width: `${100 / visibleLogos}%` }} 
            >
              <div className="w-full max-w-[150px] h-[80px] relative flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  className="opacity-80"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-gray-700 hover:bg-gray-200 focus:outline-none z-10 transition-opacity duration-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Previous Sponsor"
          disabled={currentIndex === 0} 
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-gray-700 hover:bg-gray-200 focus:outline-none z-10 transition-opacity duration-300 ${
            currentIndex >= maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          aria-label="Next Sponsor"
          disabled={currentIndex >= maxIndex} 
        >
          <FaChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default SponsorLogosSection;
