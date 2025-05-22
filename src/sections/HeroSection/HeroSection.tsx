"use client";

import Image from "next/image";

import hugeicons_job_link from "@assets/icons/hugeicons_job-link.svg";
import search_icon from "@assets/icons/search-icon.svg";
import position_icon from "@assets/icons/positon-icon.svg";
import HeroCarrousel from "@/components/HeroCarrousel";

function HeroSection() {
  return (
    <section className="h-full w-full py-4 text-center lg:py-8">
      <div className="flex w-full flex-col items-center justify-center gap-4 px-4 lg:gap-6 lg:px-0">
        <div className="flex w-full max-w-[320px] items-center justify-center gap-1 rounded-full bg-white py-1.5 lg:gap-2 lg:py-2">
          <Image
            src={hugeicons_job_link}
            alt="Hugeicons Job Links"
            className="h-auto w-[18px] object-cover lg:w-[24px]"
          />

          <p className="text-primary-900 text-sm leading-[150%] lg:text-base">
            Your #1 Platform for Skill Sharing
          </p>
        </div>

        <h1 className="text-primary-900 max-w-full text-[38px] leading-[120%] font-medium md:text-[48px] lg:max-w-[846px] lg:text-[72px]">
          Showcase Your Mastery. Get Connected
        </h1>

        <p className="max-w-full text-sm leading-[150%] text-neutral-600 lg:max-w-[430px] lg:text-base">
          Create your profile, showcase your skills, and let employers find you.
        </p>

        <div className="mt-2 flex flex-col items-center gap-4 px-4 lg:mt-4 lg:flex-row lg:gap-2">
          <div className="flex h-[46px] w-full max-w-full items-center justify-between rounded-full border-[1px] border-[#EDEDED] bg-white px-2 shadow lg:h-[56px] lg:max-w-[500px] lg:px-4">
            <div className="flex items-center gap-2">
              <Image
                src={search_icon}
                alt="Search Icon"
                className="h-auto w-[18px] object-cover lg:w-[24px]"
              />

              <input
                type="text"
                placeholder="e.g. UX Designer"
                className="border-none text-sm leading-[150%] font-medium text-neutral-300 outline-none lg:text-base"
              />
            </div>

            <div className="h-[24px] w-[2px] bg-[#EDEDED]" />

            <div className="flex items-center gap-2">
              <Image
                src={position_icon}
                alt="Position Icon"
                className="mx-1 h-auto w-[18px] object-cover lg:w-[24px]"
              />

              <input
                type="text"
                placeholder="e.g. Liverpool, USA"
                className="border-none text-sm leading-[150%] font-medium text-neutral-300 outline-none lg:text-base"
              />
            </div>
          </div>

          <button className="bg-primary flex h-[46px] max-w-[151px] cursor-pointer items-center justify-center rounded-full px-6 text-sm leading-[150%] font-bold text-white outline-none lg:h-[56px] lg:px-10 lg:text-base">
            Search
          </button>
        </div>
      </div>

      <HeroCarrousel />
    </section>
  );
}

export default HeroSection;
