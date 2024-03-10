import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { LuLineChart } from "react-icons/lu";

const menuLabels: [] = [
  "Average Order Value",
  "Conversion rate",
  "Gross Sales",
  "Net return value",
  "Store search conversion",
  "Return rate",
];

export const DropMenu = () => {
  return (
    <>
      <div className="w-212 h-167 rounded-lg bg-white border-2 border-gray-400 flex flex-col justify-center items-center gap-5 shadow-sm absolute top-35 left-150 z-50 p-10"></div>
    </>
  );
};
