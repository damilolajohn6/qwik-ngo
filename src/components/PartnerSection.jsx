import React from "react";
import Link from "next/link";

const PartnerSection = () => {
  return (
    // Section container with padding and background color
    <section
      id="partner-section"
      className="container mx-auto py-12 px-4 md:px-12  "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Partner With Us: Amplify Your Impact
      </h2>
      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left side: Text explaining value and types */}
        <div className="md:w-1/2 w-full text-gray-700 leading-relaxed">
          <p className="mb-4">
            Collaborating with organizations, businesses, and community groups
            is vital to expanding our reach and impact. By partnering with us,
            you align your brand or group with a powerful cause and contribute
            to lasting change in children's lives.
          </p>
          <p className="mb-4 font-semibold">
            We offer various ways to partner:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              **Corporate Sponsorships:** Support specific programs or events.
            </li>
            <li>
              **Cause Marketing:** Integrate our mission into your products or
              services.
            </li>
            <li>
              **In-Kind Donations:** Provide goods, services, or expertise.
            </li>
            <li>
              **Employee Engagement:** Organize volunteer days or donation
              drives.
            </li>
            <li>
              **Community Group Collaboration:** Joint initiatives with schools,
              clubs, or faith groups.
            </li>
            {/* Add more partnership types */}
          </ul>
          <p className="mb-4">
            Partnering with Pathway to Freedom is an opportunity to demonstrate
            social responsibility and inspire your stakeholders.
          </p>
          {/* Optional: Link to a partnerships brochure or page */}
          <Link
            href="/partnerships/brochure"
            className="text-blue-700 hover:underline font-semibold"
          >
            Download our Partnership Brochure &rarr;
          </Link>
        </div>

        {/* Right side: Call to Action for Partnerships */}
        <div className="md:w-1/2 w-full bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Partner?
          </h3>
          <p className="mb-4">
            We are excited to explore how we can work together to create a
            brighter future for children.
          </p>
          <p className="mb-6">
            Please contact us to discuss potential partnership opportunities
            that align with your goals.
          </p>

          <Link
            href="/contact/partnerships"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md text-center hover:bg-blue-700 transition duration-200"
          >
            Inquire About Partnerships
          </Link>

          <p className="text-sm text-gray-600 mt-4">
            Or email us directly at 
            <Link href="mailto:info@pathway.com" className="hover:underline">
              info@pathway.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
