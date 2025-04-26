"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const VolunteerSection = () => {
  return (
    <section
      id="volunteer-section"
      className="container mx-auto py-12 px-4 md:px-12 bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Volunteer: Give the Gift of Your Time
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left side */}
        <div className="md:w-1/2 w-full text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our volunteers are the backbone of our operations. Your time,
            skills, and passion are invaluable in helping us reach more children
            and provide the support they need to heal and thrive.
          </p>
          <p className="mb-4">
            Whether you can commit a few hours a week or contribute to a
            specific project, there's a place for you in our team.
          </p>
          <p className="mb-4 font-semibold">Ways you can volunteer:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Assist with educational activities or tutoring.</li>
            <li>Provide counseling or healthcare support (if qualified).</li>
            <li>Help with administrative tasks or event planning.</li>
            <li>
              Contribute your professional skills (e.g., graphic design,
              writing, social media).
            </li>
            <li>Support community outreach programs.</li>
          </ul>

          {/* Link to volunteer stories */}
          <Link href="/volunteer-stories" passHref>
            <Button
              variant="link"
              className="text-blue-700 hover:underline font-semibold p-0 h-auto"
            >
              Read stories from our amazing volunteers &rarr;
            </Button>
          </Link>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 w-full bg-gray-50 rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Become a Volunteer
          </h3>
          <p className="mb-4">
            Interested in volunteering? Here's our simple process:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Fill out our online volunteer application form.</li>
            <li>Participate in a brief interview.</li>
            <li>Complete a background check (if required for your role).</li>
            <li>Attend a volunteer orientation and training session.</li>
            <li>Start making a difference!</li>
          </ol>

          {/* Apply to Volunteer button */}
          <Link href="/volunteer-apply" passHref>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full">
              Apply to Volunteer
            </Button>
          </Link>

          {/* Volunteer requirements link */}
          <p className="text-sm text-gray-600 mt-4">
            Review our{" "}
            <Link href="/volunteer-requirements" passHref>
              <Button
                variant="link"
                className="hover:underline text-blue-700 font-medium p-0 h-auto"
              >
                volunteer requirements
              </Button>
            </Link>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
