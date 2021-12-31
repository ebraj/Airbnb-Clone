import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const LargeCard = ({ img, title, description, btnText }) => {
  return (
    <div className="md:container mx-auto relative">
      {/* Image Portion */}
      <div className="relative h-96 min-w-[300px] rounded-lg">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="absolute top-1/2 -translate-y-2/4 left-6">
        <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">{title}</h4>
        <h6 className="py-3">{description}</h6>
        <button className="px-6 py-2 text-gray-100 bg-gray-900 rounded-full font-bold transition duration-100">
          {btnText}
          <ArrowNarrowRightIcon className="inline h-7" />
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
