import Image from "next/image";

import { logoItems } from "@/constants";

const groupLogosDescending = (items: typeof logoItems, start = 8) => {
  const result = [];
  let i = 0;
  let count = start;

  while (i < items.length) {
    result.push(items.slice(i, i + count));
    i += count;
    count = Math.max(count - 1, 1);
  }

  return result;
};

const groupedLogos = groupLogosDescending(logoItems);

function ClientSection() {
  return (
    <section className="bg-white-2 mt-4 h-full w-full px-4 py-6 text-center lg:mt-10 lg:px-16 lg:py-16">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-4">
        <h2 className="max-w-[657px] text-[36px] leading-[120%] font-medium text-neutral-900 lg:text-[56px]">
          We are happy to work with incredible clients
        </h2>

        <p className="max-w-[657px] text-sm leading-[150%] text-neutral-600 lg:text-base">
          Fortune 500 companies and renowned global brands place their trust in
          our products, solutions, and bespoke software development services.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {groupedLogos.map((group, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
            {group.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <Image
                  src={logo.logo}
                  alt={logo.alt}
                  className="h-auto max-h-12 w-full object-contain opacity-70 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientSection;
