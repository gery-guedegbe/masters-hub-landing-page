import Image from "next/image";
import avatar_1 from "@assets/images/avatar-1.png";
import avatar_2 from "@assets/images/avatar-2.png";
import avatar_3 from "@assets/images/avatar-3.png";

const carrouselItems = [
  { id: 1, image: avatar_1, bg: "#E1E9FE" },
  { id: 2, image: avatar_2, bg: "#ECF5D6" },
  { id: 3, image: avatar_3, bg: "#FFEED2" },
];

function HeroCarrousel() {
  const repeatedItems = [...carrouselItems, ...carrouselItems];

  return (
    <div className="relative mt-10 w-full overflow-x-hidden lg:mt-16">
      <div className="animate-scroll flex gap-4 whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className="relative h-[286px] w-[70%] flex-shrink-0 overflow-hidden rounded-2xl sm:w-[50%] md:w-[40%] lg:h-[338px] lg:w-[25%]"
          >
            <Image
              src={item.image}
              alt={`Avatar ${item.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCarrousel;
