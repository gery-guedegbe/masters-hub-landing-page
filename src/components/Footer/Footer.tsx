import Image from "next/image";

import { footerData } from "@/constants";

import footer_logo from "@assets/logos/footer-logo.svg";
import footer_gradient_background from "@assets/images/footer_gradient_background.png";
import instagram_logo from "@assets/logos/instagram-logo.svg";
import tiktok_logo from "@assets/logos/footer-tiktok-logo.svg";
import telegram_logo from "@assets/logos/telegram-logo.svg";
import youtube_logo from "@assets/logos/youtube-logo.svg";

function Footer() {
  return (
    <footer
      id="contactUs"
      style={{
        backgroundImage: `url(${footer_gradient_background.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full text-start"
    >
      <div className="mx-auto grid grid-cols-2 items-start justify-between gap-6 px-4 py-6 lg:auto-cols-auto lg:grid-flow-col lg:gap-8 lg:px-16 lg:py-8">
        <div className="-mt-3">
          <Image
            src={footer_logo}
            alt="Footer Logo"
            className="h-auto w-[40vw] max-w-[215px] sm:w-[60vw] lg:w-[90vw]"
          />

          <ul className="mt-2 space-y-2 lg:mt-4 lg:space-y-4">
            <li className="text-sm leading-[150%] break-words lg:text-base">
              <span className="font-bold text-[#282828]">
                Corporate Head Office:
              </span>{" "}
              <p className="">{footerData.companyInfo.address}</p>
            </li>

            <li className="text-sm leading-[150%] lg:text-base">
              <span className="font-bold text-[#282828]">Phone:</span>{" "}
              {footerData.companyInfo.phone}
            </li>

            <li className="text-sm leading-[150%] lg:text-base">
              <span className="font-bold text-[#282828]">Fax:</span>{" "}
              {footerData.companyInfo.fax}
            </li>

            <li className="text-sm leading-[150%] lg:text-base">
              <span className="font-bold text-[#282828]">Email:</span>{" "}
              {footerData.companyInfo.email}
            </li>
          </ul>
        </div>

        <>
          {" "}
          {footerData.sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 lg:gap-4"
            >
              <h3 className="text-primary-900 text-[16px] font-bold lg:text-[20px]">
                {section.title}
              </h3>

              <ul className="space-y-1.5 lg:space-y-3">
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-sm leading-[150%] text-neutral-600 lg:text-base"
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      </div>

      <div className="mx-auto flex w-full flex-col-reverse items-start justify-center gap-3 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-16 lg:py-8">
        <h4 className="text-primary-900 text-sm leading-[150%] lg:text-base">
          ©2024 All rights reserved
        </h4>

        <div className="flex items-center gap-2.5 lg:gap-5">
          <Image
            src={instagram_logo}
            alt="Instagram Logo"
            className="h-auto w-[18px] object-cover lg:w-[26px]"
          />

          <Image
            src={telegram_logo}
            alt="Telegram Logo"
            className="h-auto w-[18px] object-cover lg:w-[26px]"
          />

          <Image
            src={tiktok_logo}
            alt="Tiktok Logo"
            className="h-auto w-[18px] object-cover lg:w-[26px]"
          />

          <Image
            src={youtube_logo}
            alt="Youtube Logo"
            className="h-auto w-[18px] object-cover lg:w-[26px]"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
