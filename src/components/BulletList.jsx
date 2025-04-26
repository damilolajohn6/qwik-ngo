"use client";
import React from "react";

const BulletList = ({ items }) => {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default BulletList;
