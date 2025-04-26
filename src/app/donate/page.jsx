"use client";
import DonateHero from "@/components/DonateHero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DonatePage = () => {
  return (
    <div>
      <DonateHero />

      {/* Why Your Donation Matters */}
      <section className="container mx-auto py-12 px-4 md:px-12 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Why Your Donation Matters
        </h2>
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          {/* Text */}
          <div className="md:w-1/2 w-full text-gray-700 leading-relaxed">
            <p className="mb-4">
              Every contribution, no matter the size, directly fuels our
              programs and provides essential support for children who have
              experienced the trauma of forced labor...
            </p>
            <p className="mb-4 font-semibold">Your donation can provide:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Safe shelter and nutritious meals.</li>
              <li>Medical care and psychological counseling.</li>
              <li>
                Educational support, including tuition, books, and uniforms.
              </li>
              <li>Vocational training for older children.</li>
              <li>
                Support for community empowerment initiatives to prevent future
                exploitation.
              </li>
            </ul>
            <p>
              You are not just donating money; you are investing in a child's
              right to a safe, healthy, and educated future.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full relative h-64 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/classroom.jpg"
              alt="Children learning or playing"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Choose How You Want to Give */}
      <section className="container mx-auto py-12 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Choose How You Want to Give
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* One-Time Donation */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">💸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              One-Time Donation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              Make a single contribution to support our immediate needs and
              ongoing programs.
            </p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Monthly Giving */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Monthly Giving
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              Become a recurring donor and provide consistent support for our
              long-term impact.
            </p>
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                Become a Monthly Donor
              </Button>
            </Link>
          </div>

          {/* Support a Program */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Support a Program
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
              Direct your donation to a specific program that resonates with
              you.
            </p>
            <Link href="/">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 w-full">
                Choose a Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency and Accountability */}
      <section className="container mx-auto py-12 px-4 md:px-12 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Transparency and Accountability
        </h2>
        <div className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center md:text-left">
          <p className="mb-4">
            We are committed to the highest standards of financial transparency
            and accountability...
          </p>
          <p className="mb-4">
            We are a registered non-profit organization, and your donations may
            be tax-deductible.
          </p>
          <p className="mb-4 font-semibold">Learn more about our financials:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>View our annual reports.</li>
            <li>See our financial statements.</li>
            <li>Read about our impact metrics.</li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View Financial Reports
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Make a Difference */}
      <section className="container mx-auto py-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          Your support can provide a pathway to freedom and opportunity for a
          child in need.
        </p>
        <Link href="#">
          <Button className="bg-orange-500 hover:bg-orange-600 text-xl px-8 py-4 shadow-lg">
            Donate Now
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default DonatePage;
