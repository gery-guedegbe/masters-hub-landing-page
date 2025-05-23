"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { customerItems } from "@/constants";
import customer_review_image from "@assets/images/customer_review_image.png";

function CustomerReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full px-4 py-6 text-start lg:px-16 lg:py-8">
      <h2 className="mb-6 text-[28px] leading-tight font-medium text-neutral-900 md:text-[36px] lg:mb-8 lg:text-[56px]">
        What our clients say
      </h2>

      <div className="flex w-full flex-col-reverse items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
        {/* CAROUSEL */}
        <div className="w-full lg:w-2/3">
          <div
            className="overflow-hidden rounded-2xl bg-neutral-900 p-6"
            ref={emblaRef}
          >
            <div className="flex">
              {customerItems.map((item, index) => (
                <div
                  key={index}
                  className="flex min-w-full cursor-grab flex-col items-center justify-center gap-4 px-6 text-center transition-all duration-500 select-none lg:gap-6 lg:px-0"
                >
                  <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
                    <h4 className="text-[16px] font-semibold text-white lg:text-[20px]">
                      {item.name}
                    </h4>

                    <div className="h-1 w-1 rounded-full bg-white" />

                    <span className="text-[16px] font-medium text-neutral-200 lg:text-[20px]">
                      {item.role}
                    </span>
                  </div>

                  <p className="max-w-[528px] text-[20px] leading-tight font-medium text-white md:text-[26px] lg:text-[36px]">
                    “{item.desc}”
                  </p>
                </div>
              ))}
            </div>

            {/* NAVIGATION */}
            <div className="mt-6 flex items-center justify-center gap-2">
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
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/3">
          <Image
            src={customer_review_image}
            alt="Customer Review Image"
            className="mx-auto h-full w-[90vw] max-w-[500px] rounded-2xl object-cover lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default CustomerReviewSection;
