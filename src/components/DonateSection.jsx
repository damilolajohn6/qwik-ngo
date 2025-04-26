"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DonateSection = () => {
  return (
    <section
      id="donate-section"
      className="container mx-auto py-12 px-4 md:px-12  "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Donate: Invest in a Child's Future
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 w-full text-gray-700 leading-relaxed">
          <p className="mb-4">
            Your generous donation provides essential resources that directly
            impact the lives of children rescued from forced labor. It helps us
            offer safe shelter, nutritious meals, medical care, and the
            opportunity to receive a quality education.
          </p>
          <p className="mb-4 font-semibold">
            Here's how your donation can make a difference:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>$50 provides school supplies for one child for a year.</li>
            <li>$100 supports rehabilitation and counseling for a week.</li>
            <li>
              $250 helps cover reintegrating a child into school and community.
            </li>
          </ul>
          <p className="mb-4">
            Every contribution, no matter the size, brings us closer to a world
            where every child is free and empowered.
          </p>
          {/* Link using Button */}
          <Link href="/impact" passHref>
            <Button
              variant="link"
              className="text-blue-700 hover:underline font-semibold p-0 h-auto"
            >
              See the full impact of your donation &rarr;
            </Button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Choose How You Want to Give
          </h3>
          <div className="flex flex-col space-y-4">
            <p>[ Placeholder for Embedded Donation Form or Links ]</p>
            <p>
              You can set up a one-time donation or a recurring monthly gift.
              You can also choose to support a specific program.
            </p>

            {/* Donation Buttons */}
            <Link href="/donate/online" passHref>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full">
                Donate Online Now
              </Button>
            </Link>

            <Link href="/donate/monthly" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold w-full">
                Set Up Monthly Donation
              </Button>
            </Link>

            <Link href="/donate/programs" passHref>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold w-full">
                Support Specific Programs
              </Button>
            </Link>

            <p className="text-sm text-gray-600 mt-4">
              Information on tax deductibility will be provided upon donation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
