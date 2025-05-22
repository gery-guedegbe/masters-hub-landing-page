import Image from "next/image";

import work_section_image from "@assets/images/work_section_image.png";
import download_icon from "@assets/icons/download-icon.svg";
import upload_icon from "@assets/icons/upload-icon.svg";
import get_icon from "@assets/icons/get-icon.svg";

function HowItWorkSection() {
  return (
    <section className="w-full px-4 py-6 text-center lg:px-16 lg:py-16">
      <div className="flex w-full flex-col items-start justify-center gap-16 text-start lg:flex-row lg:justify-between lg:gap-0">
        <div className="w-full lg:w-1/2">
          <h2 className="max-w-[657px] text-[36px] leading-[120%] font-medium text-neutral-900 lg:text-[56px]">
            How It Works
          </h2>

          <div className="mt-4 w-full space-y-4 lg:mt-0 lg:space-y-6">
            <div className="flex w-full flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-4">
              <h3 className="text-primary-900/15 text-[60px] leading-[120%] font-medium md:text-[70px] lg:text-[108px]">
                01
              </h3>

              <div className="flex w-full max-w-[445px] items-center gap-2.5 rounded-md bg-white p-3 shadow-2xl lg:gap-4 lg:rounded-[20px] lg:p-4">
                <Image
                  src={download_icon}
                  alt="Download Icon"
                  className="h-auto w-[36px] object-cover lg:w-[56px]"
                />

                <div className="space-y-0.5 lg:space-y-1">
                  <h4 className="text-lg leading-[120%] font-medium text-neutral-900 lg:text-[24px]">
                    Sign Up and create Account
                  </h4>

                  <p className="text-sm leading-[150%] break-words text-neutral-600 lg:text-base">
                    Fill out your details and showcase your skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col-reverse items-end gap-2 lg:flex-row lg:items-center lg:gap-4">
              <div className="flex w-full max-w-[445px] items-center gap-2.5 rounded-md bg-white p-3 shadow-2xl lg:gap-4 lg:rounded-[20px] lg:p-4">
                <Image
                  src={upload_icon}
                  alt="Upload Icon"
                  className="h-auto w-[36px] object-cover lg:w-[56px]"
                />

                <div className="space-y-0.5 lg:space-y-1">
                  <h4 className="text-lg leading-[120%] font-medium text-neutral-900 lg:text-[24px]">
                    Upload Your Portfolio
                  </h4>

                  <p className="text-sm leading-[150%] break-words text-neutral-600 lg:text-base">
                    Add your resume, videos, and more.
                  </p>
                </div>
              </div>

              <h3 className="text-primary-900/15 text-[60px] leading-[120%] font-medium md:text-[70px] lg:text-[108px]">
                02
              </h3>
            </div>

            <div className="flex w-full flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-4">
              <h3 className="text-primary-900/15 text-[60px] leading-[120%] font-medium md:text-[70px] lg:text-[108px]">
                03
              </h3>

              <div className="flex w-full max-w-[445px] items-center gap-2.5 rounded-md bg-white p-3 shadow-2xl lg:gap-4 lg:rounded-[20px] lg:p-4">
                <Image
                  src={get_icon}
                  alt="Get Icon"
                  className="h-auto w-[36px] object-cover lg:w-[56px]"
                />

                <div className="space-y-0.5 lg:space-y-1">
                  <h4 className="text-lg leading-[120%] font-medium text-neutral-900 lg:text-[24px]">
                    Get Discovered
                  </h4>

                  <p className="text-sm leading-[150%] break-words text-neutral-600 lg:text-base">
                    Let employers find and contact you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full lg:w-1/2">
          <Image
            src={work_section_image}
            alt="Work Section Image"
            className="h-auto w-[80vw] object-cover lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorkSection;
