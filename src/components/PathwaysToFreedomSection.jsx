import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const PathwaysToFreedomSection = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-12 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Building Pathways to Freedom
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/class.jpg"
            alt="Children studying in a classroom"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>

        {/* Right side: Text content (Programs and CTA) */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          {/* Program 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Program 1: Rescue and Rehabilitation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Through partnerships with local authorities and community leaders,
              we identify children at risk and provide immediate support. Our
              safe spaces offer counseling, healthcare, and a sense of safety to
              begin the journey to recovery.
            </p>
          </div>

          {/* Program 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Program 2: Education for All
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Education is the key to breaking the cycle of exploitation. We
              reintegrate children into schools, provide scholarships, and train
              teachers to offer trauma-informed care.
            </p>
          </div>

          {/* Program 3 */}
          <div className="mb-8">
            {" "}
            {/* Increased bottom margin before CTA */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Program 3: Community Empowerment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We address the root causes of child labor by empowering
              communities. From income-generating activities for families to
              workshops on child rights, we ensure long-term change.
            </p>
          </div>

          {/* Call-to-Action Button/Link */}
          <div className="flex justify-center md:justify-start">
            {" "}
            {/* Center on mobile, left-align on md+ */}
            <Link href="/about-mission">
              <Button className="inline-block bg-transparent border border-[#7DAA92] text-[#7DAA92]  font-semibold  p-6 rounded-md shadow hover:bg-transparent transition duration-300 ease-in-out">
                Learn more about our mission or join us today.
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysToFreedomSection;
