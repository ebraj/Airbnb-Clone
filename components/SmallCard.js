import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:scale-105 bg-gray-50 p-3 rounded-lg transition duration-200">
      {/* Left Portion */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right Portion */}
      <div>
        <h4 className="uppercase font-semibold text-gray-800">{location}</h4>
        <h6 className="text-gray-500">{distance}</h6>
      </div>
    </div>
  );
}

export default SmallCard;
