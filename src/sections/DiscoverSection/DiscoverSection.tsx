"use client";

import { useState } from "react";

import { mastersData } from "@/constants";
import MasterCard from "@/components/MasterCard";

import { MdOutlineArrowOutward } from "react-icons/md";

import {
  LuChartNoAxesCombined,
  LuCircleDollarSign,
  LuGalleryVerticalEnd,
  LuLayoutGrid,
  LuLayoutTemplate,
  LuUserPlus,
  LuWand,
} from "react-icons/lu";

const barItems = [
  { id: 1, category: "Developer", icon: LuLayoutGrid },
  { id: 2, category: "UI Designer", icon: LuLayoutTemplate },
  { id: 3, category: "Project Manager", icon: LuChartNoAxesCombined },
  { id: 4, category: "Designer", icon: LuWand },
  { id: 5, category: "Accountant", icon: LuCircleDollarSign },
  { id: 6, category: "Human Resource", icon: LuUserPlus },
  { id: 7, category: "Marketing", icon: LuGalleryVerticalEnd },
];

function DiscoverSection() {
  const [activeTab, setActiveTab] = useState("UI Designer");

  const filteredMasters = mastersData[activeTab];

  return (
    <section
      id="skillSet"
      className="h-full w-full px-4 py-4 text-center lg:px-16 lg:py-8"
    >
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-4">
        <h2 className="max-w-[482px] text-[36px] leading-[120%] font-medium text-neutral-900 lg:text-[56px]">
          Discover the Emerging Masters
        </h2>

        <p className="max-w-[388px] text-sm leading-[150%] text-neutral-600 lg:text-base">
          Find the best master for your company and boosts your business 10x!
        </p>
      </div>

      <div className="mt-6 w-full space-y-8 lg:mt-12 lg:space-y-12">
        <div className="flex max-w-[1240px] items-center justify-start gap-2 overflow-x-auto border-b border-neutral-200 md:justify-center">
          {barItems.map(({ id, icon: Icon, category }) => (
            <button
              key={id}
              onClick={() => setActiveTab(category)}
              className={`flex cursor-pointer items-center gap-1 border-b-2 px-4 py-2 text-sm leading-[150%] font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === category
                  ? "border-primary text-primary"
                  : "hover:text-primary border-transparent text-neutral-500"
              }`}
            >
              <Icon size={16} />

              <span>{category}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 py-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:py-2">
          {filteredMasters.map((master, index) => (
            <MasterCard key={index} data={master} />
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <button className="border-primary-200 text-primary hidden cursor-pointer items-center justify-center gap-2.5 rounded-full border-[1px] px-2 py-1.5 text-base leading-[150%] font-bold backdrop-blur-lg outline-none lg:flex">
            View All
            <span className="bg-primary flex h-[40px] w-[40px] items-center justify-center rounded-full text-white">
              <MdOutlineArrowOutward className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscoverSection;
