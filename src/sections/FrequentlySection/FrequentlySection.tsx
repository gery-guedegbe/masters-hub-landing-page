"use client";

import Image from "next/image";
import { useState } from "react";

import { frequentlyItems } from "@/constants";

import plus_icon from "@assets/icons/plus-icon.svg";

function FrequentlySection() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleIsOpen = (id: number) => {
    setIsOpen((activeId) => (activeId == id ? null : id));
  };

  return (
    <section className="w-full px-4 py-6 text-start lg:px-16 lg:py-16">
      <h2 className="mb-6 text-[28px] leading-tight font-medium text-neutral-900 md:text-[36px] lg:mb-8 lg:text-[56px]">
        Frequently asked Questions
      </h2>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {frequentlyItems.map((item, index) => {
          const isActive = isOpen === item.id;

          return (
            <div
              key={index}
              onClick={() => handleIsOpen(item.id)}
              className={`${isActive ? "border-primary-200 bg-primary-50" : "border-[#E6E9EA] bg-transparent"} flex w-full cursor-pointer items-start justify-between rounded-xl border-[1px] p-3 shadow-md lg:p-4 lg:shadow-xl`}
            >
              <div
                className={` ${isActive ? "items-start" : "items-center"} flex gap-2 lg:gap-4`}
              >
                <div className="text-primary-900 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-neutral-50 p-4 text-[16px] leading-[150%] font-medium lg:h-[56px] lg:w-[56px] lg:p-6 lg:text-[20px]">
                  {item.num}
                </div>

                <div className="space-y-2 lg:space-y-4">
                  <h3 className="text-[16px] leading-[120%] font-medium break-words text-neutral-900 lg:text-[24px]">
                    {item.question}
                  </h3>

                  {isActive && (
                    <p className="text-sm leading-[150%] text-neutral-600 lg:text-base">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>

              <Image
                src={plus_icon}
                alt="Plus Icon"
                className={`${isActive ? "rotate-45" : "rotate-none"} h-auto w-[18px] object-cover transition-all duration-200 lg:w-[24px]`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FrequentlySection;
