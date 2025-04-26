import React from "react";
import StatisticItem from "./StatisticItem";

const StatisticsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <StatisticItem value="500" label="Children Rescued" />
        <StatisticItem value="400" label="Children Enrolled in School" />
        <StatisticItem value="50" label="Communities Supported" />
      </div>
    </section>
  );
};

export default StatisticsSection;
