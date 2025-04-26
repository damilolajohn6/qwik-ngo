import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeHeroSection = () => {
  return (
    <section className="relative h-[700px] sm:h-[750px] md:h-[800px] lg:h-[900px] flex flex-col justify-between text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/homehero.jpg"
          alt="Children reading in a classroom"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="brightness-50"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center h-full">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
          Every Child Deserves a Classroom, Not a Factory
        </h1>

        {/* Subheading */}
        <p className="text-md sm:text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl">
          Improving children's lives by empowering them with knowledge.
        </p>

        {/* Central Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
          <Link
            href="/get-involved"
            className="bg-[#7DAA92] text-white font-semibold py-3 px-6 sm:px-8 rounded-md shadow-lg hover:bg-[#39644d] transition duration-300 ease-in-out text-center"
          >
            Get Involved
          </Link>
          <Link
            href="/success-stories"
            className="bg-[#7DAA92] bg-opacity-20 text-white font-semibold py-3 px-6 sm:px-8 rounded-md shadow-lg hover:bg-[#39644d] transition duration-300 ease-in-out text-center"
          >
            Watch Our Success Stories
          </Link>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="relative bg-gray-900 w-full">
        <div className="relative z-10 py-8 px-4 sm:px-6 md:px-12 bg-opacity-80 mx-auto justify-center items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Donate Now Button */}
            <Link
              href="/donate"
              className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#E89B88] text-white font-bold text-base sm:text-lg shadow-lg hover:bg-[#8b584b] transition duration-300 ease-in-out"
            >
              Donate Now
            </Link>

            {/* Middle Text */}
            <div className="flex-grow text-md sm:text-lg md:text-xl font-semibold">
              Join us in rescuing every child trapped in child labour.
            </div>

            {/* Learn More Button */}
            <Link
              href="/learn-more"
              className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#7DAA92] text-white font-bold text-base sm:text-lg shadow-lg hover:bg-[#39644d] transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
