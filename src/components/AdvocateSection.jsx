import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
// You might want to use icons here, e.g., from react-icons/fa or lucide-react
// import { FaShareAlt, FaUsers, FaEdit, FaCalendarEvent } from 'react-icons/fa';

const AdvocateSection = () => {
  const advocacyOptions = [
    {
      name: "Share on Social Media",
      description: "Spread our message with your network.",
      icon: "📱",
    }, // Use emoji as placeholder icon
    {
      name: "Talk to Others",
      description: "Educate your friends and family about child labor.",
      icon: "🗣️",
    },
    {
      name: "Contact Officials",
      description: "Urge policymakers to support child protection laws.",
      icon: "🏛️",
    },
    {
      name: "Host an Event",
      description: "Organize a fundraiser or awareness event.",
      icon: "🎉",
    },
    // Add more advocacy options
  ];

  return (
    // Section container with padding and background color
    <section
      id="advocate-section"
      className="container mx-auto py-12 px-4 md:px-12 bg-white"
    >
      {" "}
      {/* Added id for linking */}
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Be an Advocate: Raise Awareness
      </h2>
      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left side: Text explaining importance */}
        <div className="md:w-1/2 w-full text-gray-700 leading-relaxed">
          <p className="mb-4">
            Advocacy plays a crucial role in creating systemic change and
            protecting children from exploitation. By raising your voice and
            sharing information, you help shine a light on the issue of child
            labor and inspire others to act.
          </p>
          <p className="mb-4">
            Becoming an advocate means using your influence to support our
            mission and promote child rights.
          </p>
          <p className="mb-4 font-semibold">Simple ways you can advocate:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Share our success stories and program updates on social media.
            </li>
            <li>Educate your community about the realities of child labor.</li>
            <li>
              Write letters or contact your local and national representatives.
            </li>
            <li>Organize small awareness-raising events or presentations.</li>
            {/* Add more specific advocacy actions */}
          </ul>
          {/* Optional: Link to advocacy resources */}
          <Link href="/advocate/resources">
            <Button className="text-blue-700 hover:underline font-semibold">
              Access our Advocacy Resources &rarr;
            </Button>
          </Link>
        </div>

        {/* Right side: Advocacy Options Grid */}
        <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advocacyOptions.map((option) => (
            <div
              key={option.name}
              className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full"
            >
              <div className="text-4xl mb-4">
                {/* Replace with actual icons if using react-icons etc. */}
                {option.icon}
              </div>
              {/* Option Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {option.name}
              </h3>
              {/* Option Description */}
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {option.description}
              </p>
            </div>
          ))}
          {/* Optional: Link to advocacy campaigns */}
          <div className="sm:col-span-2 text-center mt-4">
            {" "}
            {/* Span across columns on sm+ */}
            <Link href="/advocate/campaigns">
              <Button className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-orange-600 transition duration-300 ease-in-out">
                Join Our Current Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvocateSection;
