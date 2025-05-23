"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { IoArrowBack, IoArrowForward, IoPlayOutline } from "react-icons/io5";

import { talentItems } from "@/constants";

function TalentSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full px-4 py-6 text-start lg:px-16 lg:py-16">
      <div className="flex w-full items-center justify-between">
        <h2 className="max-w-[790px] text-[36px] leading-[120%] font-medium text-neutral-900 lg:text-[56px]">
          Top Talent portfolio Showcase
        </h2>

        <div className="hidden items-center justify-center gap-2 lg:flex lg:gap-3">
          <button
            onClick={scrollPrev}
            className="text-primary-900 bg-primary-50 flex cursor-pointer items-center justify-center rounded-full p-4 text-base outline-none"
          >
            <IoArrowBack />
          </button>

          <button
            onClick={scrollNext}
            className="bg-primary flex cursor-pointer items-center justify-center rounded-full p-4 text-base text-white outline-none"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden lg:mt-8" ref={emblaRef}>
        <div className="flex cursor-grab">
          {talentItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[80%] pr-4 select-none sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[30%]"
            >
              <div
                className="relative h-[400px] w-full overflow-hidden rounded-2xl"
                style={{
                  backgroundImage: `url(${item.image.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 flex h-full w-full items-end justify-end bg-gradient-to-b from-white/20 to-black/30 px-4 py-8">
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <h4 className="text-[18px] font-semibold text-white lg:text-[24px]">
                        {item.name}
                      </h4>

                      <span className="text-sm font-semibold text-neutral-50 lg:text-base">
                        {item.job}
                      </span>
                    </div>

                    <button className="bg-primary-50 text-primary-900 hover:bg-primary flex cursor-pointer items-center justify-center rounded-full p-2 font-medium transition-all duration-200 hover:text-white lg:p-4">
                      <IoPlayOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles pour petits écrans */}
      <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
        <button
          onClick={scrollPrev}
          className="text-primary-900 bg-primary-50 flex cursor-pointer items-center justify-center rounded-full p-3 text-base outline-none"
        >
          <IoArrowBack />
        </button>

        <button
          onClick={scrollNext}
          className="bg-primary flex cursor-pointer items-center justify-center rounded-full p-3 text-base text-white outline-none"
        >
          <IoArrowForward />
        </button>
      </div>
    </section>
  );
}

export default TalentSection;
