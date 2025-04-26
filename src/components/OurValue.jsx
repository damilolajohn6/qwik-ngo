import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const OurValue = () => {

  return (
    <section className=" mx-auto py-12 px-4 md:px-12 bg-orange-50 rounded-lg shadow-md">

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
        Our Value Promise
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="md:w-1/2 w-full flex flex-col justify-center">

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Identifying and Rescuing: Reaching Those in Need
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We collaborate with communities, authorities, and grassroots
              organizations to identify children in forced labor. Our team
              intervenes swiftly to rescue them and provide immediate
              support.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Rehabilitation and Healing: Rebuilding Lives
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our safe spaces offer counseling, medical care, and essential
              services to help children heal from trauma and regain their
              confidence.
            </p>
          </div>

          {/* Reintegrating Through Education */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Reintegrating Through Education: Opening Doors to Education
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We work with schools and educators to ensure rescued children
              receive quality education. Through scholarships and ongoing
              support, we give them a chance to dream again.
            </p>
          </div>

          {/* Empowering Communities */}
          <div className="mb-8"> {/* Increased bottom margin before CTA */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Empowering Communities: Breaking the Cycle
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We empower families and communities with sustainable
              livelihoods and awareness programs, ensuring lasting change
              for generations to come.
            </p>
          </div>

          {/* Call-to-Action Button/Link */}
          <div className="flex justify-center md:justify-start"> {/* Center on mobile, left-align on md+ */}
            <Link href="/support-program"> {/* Link to your support/program page */}
              <a className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-blue-700 transition duration-300 ease-in-out">
                Support a Program. Transform a Life.
              </a>
            </Link>
          </div>

        </div>

        <div className="md:w-1/2 w-full relative h-80 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/rise.jpg"
            alt="Child smiling and holding books" 
            layout="fill"
            objectFit="cover" 
            className="rounded-lg" 
            priority 
          />
        </div>
      </div>
    </section>
  );
};

export default OurValue;
