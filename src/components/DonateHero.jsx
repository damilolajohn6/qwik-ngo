import Image from "next/image";
import React from "react";

const DonateHero = () => {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/program.jpg"
          alt="Two children looking at a stick"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="filter brightness-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Your Gift Changes Lives
        </h1>
        <p className="text-lg md:text-xl drop-shadow-md">
          Support our mission and empower children rescued from forced labor.
        </p>
      </div>
    </section>
  );
};

export default DonateHero;
