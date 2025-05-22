import { FC } from "react";
import star from "@assets/icons/star-icon.svg";
import Image from "next/image";

import { Master } from "@/constants";

type Props = {
  data: Master;
};

const MasterCard: FC<Props> = ({ data }) => {
  return (
    <div className="group hover:border-primary-200 hover:bg-primary-50 w-full max-w-full cursor-pointer rounded-[20px] border-[1px] border-neutral-50 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-xl lg:max-w-[292px] lg:p-6">
      <div className="relative mx-auto mb-1 h-20 w-20">
        <Image
          src={data.avatar}
          alt={data.name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />

        {data.isOnline && (
          <span className="bg-success absolute right-4 bottom-5 h-3 w-3 rounded-full border-2 border-white" />
        )}
      </div>

      <div className="flex items-center justify-center gap-1">
        <Image
          src={star}
          alt="Star Icon"
          width={15}
          height={15}
          className="object-cover"
        />

        <span className="text-xs leading-[150%] font-semibold text-neutral-800 lg:text-sm">
          {data.rating.toFixed(1)}
        </span>

        <span className="text-xs leading-[150%] text-neutral-800">
          ({data.reviews})
        </span>
      </div>

      <div className="my-1.5">
        <h3 className="text-base leading-[150%] font-bold text-neutral-900 lg:text-[20px]">
          {data.name}
        </h3>

        <span className="text-xs leading-[150%] text-neutral-500">
          {data.role}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1 lg:gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="group-hover:border-primary-200 rounded-full border-[1px] border-neutral-50 bg-gray-100 px-3 py-1 text-xs leading-[150%] font-medium text-neutral-700 shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MasterCard;
