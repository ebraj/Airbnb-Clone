import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

function Banner() {
  return (
    <header className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[700px]">
      <Image src="/images/banner.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 -translate-y-2/4 w-full text-center px-5">
        <h2 className="p-2 text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase">
          Not sure where to go?
        </h2>
        <button className="border-2 border-gray-100 px-6 py-3 text-gray-100 hover:bg-gray-100 hover:text-red-400 rounded-full font-bold transition duration-100">
          Explore More <ArrowNarrowRightIcon className="inline h-7" />
        </button>
      </div>
    </header>
  );
}

export default Banner;
