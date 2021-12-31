import Image from "next/image";

function SmallCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 rounded-lg transition duration-200">
      <div className="relative h-80 w-80 rounded-lg overflow-hidden">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h4 className="py-2">{title}</h4>
    </div>
  );
}

export default SmallCard;
