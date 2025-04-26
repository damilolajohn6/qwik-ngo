import Image from "next/image";
import React from "react";

const MissionVisionSection = () => {
  return (
    <div className="w-full bg-[#EED8C3]">
      <section className="container mx-auto py-12 px-4 sm:px-6 md:px-12  rounded-lg ">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left side: Text content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Mission Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Our mission is driven by a structured and compassionate process.
                We believe every child deserves freedom and opportunity, and
                through collaboration, education, and empowerment, we turn this
                belief into reality.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Every child deserves the chance to dream, learn, and grow — free
                from exploitation. At Pathway to Freedom, we are on a mission to
                rescue children trapped in forced labor and provide them with
                the opportunity to thrive through education and care.
              </p>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/vission.jpg"
              alt="Adult teaching children"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionSection;
