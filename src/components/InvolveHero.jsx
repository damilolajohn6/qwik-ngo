import Image from "next/image";
import React from "react";

const InvolveHero = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
         Get Involve
        </h1>
        <p className="text-lg md:text-xl drop-shadow-md">Home/get-involve</p>
      </div>
    </section>
  );
};

export default InvolveHero;
