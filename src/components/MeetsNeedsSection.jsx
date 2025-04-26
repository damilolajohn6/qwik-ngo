import React from "react";
import Link from "next/link";
import NeedsMetCard from "./NeedsMetCard";

const MeetsNeedsSection = () => {
  const needsMetData = [
    {
      title: "Holistic Approach",
      description:
        "The program addresses physical, emotional, and educational needs to ensure comprehensive recovery and growth.",
    },
    {
      title: "Child-Centered Care",
      description:
        "Every child receives personalized attention, recognizing their unique experiences and needs.",
    },
    {
      title: "Community Integration",
      description:
        "We work to reintegrate children into their communities as confident, educated individuals, breaking the cycle of forced labor.",
    },
  ];

  return (
    <section className="container mx-auto py-12 px-4 md:px-12 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        How It Meets Children's Needs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {needsMetData.map((item, index) => (
          <NeedsMetCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <Link
          href="/support-program"
          className="inline-block bg-[#E89B88] text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-[#8b594d] transition duration-300 ease-in-out"
        >
          Support a Program. Transform a Life.
        </Link>
      </div>
    </section>
  );
};

export default MeetsNeedsSection;
