import Image from "next/image";

import woman_image from "@assets/images/woman.png";
import circles_background from "@assets/images/circles-background.png";
import abstract_top_arrow from "@assets/images/abstract-top-arrow.png";
import abstract_bottom_arrow from "@assets/images/abstract-bottom-arrow.png";
import message_icon from "@assets/icons/message-icon.svg";
import deskop_mobile_icon from "@assets/icons/deskop-pc-icon.svg";
import global_search_icon from "@assets/icons/global-search-icon.svg";
import plus_stacks_icon from "@assets/icons/plus-stacks-icon.svg";

function WhySection() {
  return (
    <section className="h-full w-full px-4 py-4 text-center lg:px-16 lg:py-8">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-4">
        <h2 className="max-w-[534px] text-[36px] leading-[120%] font-medium text-neutral-900 lg:text-[56px]">
          Why Choose Masters in Me?
        </h2>

        <p className="max-w-[502px] text-sm leading-[150%] text-neutral-600 lg:text-base">
          Unlock your true potential and discover a world of opportunities that
          align with your skills, interests, and aspirations
        </p>
      </div>

      <div className="relative mx-auto mt-8 flex w-full items-center justify-center lg:mt-12">
        <div
          style={{
            backgroundImage: `url(${circles_background.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="relative flex w-full max-w-[636px] items-center justify-center"
        >
          <Image
            src={woman_image}
            alt="Wooman Image"
            className="h-auto w-[60vw] max-w-[349px] rounded-[20px] object-cover md:w-[70vw] lg:w-[80vw]"
          />

          <div className="absolute inset-0 flex h-full w-full items-end justify-center bg-transparent text-center">
            <h4 className="py-4 text-base leading-[120%] font-medium text-white md:py-6 md:text-lg lg:py-10 lg:text-[24px]">
              Video Resume
            </h4>
          </div>

          <Image
            src={abstract_top_arrow}
            alt="Abstract Top Arrow"
            className="absolute top-0 right-0 h-auto w-[44px] object-cover lg:w-[74px]"
          />

          <Image
            src={abstract_bottom_arrow}
            alt="Abstract Bottom Arrow"
            className="absolute bottom-0 left-0 h-auto w-[44px] object-cover lg:w-[74px]"
          />
        </div>

        <div className="absolute top-8 -right-1 flex w-[40vw] max-w-[260px] flex-col items-center justify-between gap-3 text-start md:right-4 md:w-[70vw] lg:top-16 lg:right-16 lg:w-[90vw]">
          <div className="flex w-full items-center gap-2 rounded-[12px] bg-white p-1 shadow-lg md:p-1.5 lg:gap-4 lg:rounded-[20px] lg:p-3">
            <Image
              src={message_icon}
              alt="Message Icon"
              className="h-auto w-[28px] object-cover lg:w-[48px]"
            />

            <p className="text-xs leading-[150%] font-bold break-words text-neutral-900 md:text-base lg:text-[20px]">
              Networking Opportunities
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-[20px] bg-white p-2 text-center shadow-lg md:p-2.5 lg:p-4">
            <Image
              src={plus_stacks_icon}
              alt="Plus Stacks Icon"
              className="h-auto w-[28px] object-cover lg:mb-1 lg:w-[48px]"
            />

            <div className="mb-1 space-y-0.5 lg:mb-2">
              <p className="text-sm leading-[150%] font-bold break-words text-neutral-900 md:text-base lg:text-[20px]">
                Resume Builder
              </p>

              <span className="text-xs leading-0 text-neutral-600 lg:leading-[150%]">
                Create a professional resume using our built-in resume builder.
              </span>
            </div>

            <button className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-2 py-1.5 text-xs leading-[150%] font-medium text-white outline-none md:px-3 md:py-2.5">
              Build Resume
            </button>
          </div>
        </div>

        <div className="absolute bottom-5 -left-1 flex w-[40vw] max-w-[260px] flex-col items-center justify-between gap-3 text-start md:bottom-12 md:left-4 md:w-[70vw] lg:bottom-10 lg:left-16 lg:w-[90vw]">
          <div className="flex w-full flex-col items-center justify-center gap-2 rounded-[20px] bg-white p-2 text-center shadow-lg md:p-2.5 lg:p-4">
            <Image
              src={deskop_mobile_icon}
              alt="Deskop and Mobile Icon"
              className="h-auto w-[28px] object-cover lg:mb-1 lg:w-[48px]"
            />

            <div className="mb-1 space-y-0 md:space-y-0.5 lg:mb-2">
              <p className="text-sm leading-[150%] font-bold break-words text-neutral-900 md:text-base lg:text-[20px]">
                Showcase Work
              </p>

              <span className="text-xs leading-0 text-neutral-600 lg:leading-[150%]">
                Showcase your project to stand out among all
              </span>
            </div>

            <button className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-2 py-1.5 text-xs leading-[150%] font-medium text-white outline-none md:px-3 md:py-2.5">
              Add Work
            </button>
          </div>

          <div className="flex w-full items-center gap-2 rounded-[12px] bg-white p-1 shadow-lg md:p-1.5 lg:gap-4 lg:rounded-[20px] lg:p-3">
            <Image
              src={global_search_icon}
              alt="Global Search Icon"
              className="h-auto w-[28px] object-cover lg:w-[48px]"
            />

            <div>
              <p className="text-xs leading-[150%] font-bold break-words text-neutral-900 md:text-base lg:text-[20px]">
                100K +
              </p>

              <span className="text-xs leading-0 text-neutral-600 lg:leading-[150%]">
                Worldwide Active Users
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
