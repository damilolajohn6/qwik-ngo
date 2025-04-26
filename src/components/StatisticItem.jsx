"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticItem = ({ value, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-4 transition duration-500"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1">
        {inView ? <CountUp end={parseInt(value)} duration={2} /> : "0"}+
      </div>
      <div className="text-base sm:text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default StatisticItem;
