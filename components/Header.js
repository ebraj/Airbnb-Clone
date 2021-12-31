import Image from "next/image";
import {
  GlobeIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm py-2">
      <div className="md:container px-5 grid grid-cols-3 mx-auto">
        {/* Left Part */}
        <div className="relative h-12 cursor-pointer flex items-center justify-start">
          <Image
            src="/images/airbnb-logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* Middle Part */}
        <div className="md:border rounded-full flex items-center px-2 md:shadow-sm">
          <input
            className="p-2 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm"
            placeholder="Start your search"
          />
          <SearchIcon className="hidden md:inline-flex bg-red-400 text-white rounded-full h-8 p-2 cursor-pointer" />
        </div>
        {/* Left Part */}
        <div className="flex items-center space-x-2 justify-end text-gray-500">
          <p className="hidden md:inline">Become a Host</p>
          <GlobeIcon className="h-6 hidden md:inline" />

          <div className="flex border space-x-2 p-2 rounded-full ">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
