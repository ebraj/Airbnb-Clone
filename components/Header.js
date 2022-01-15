import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  GlobeIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header({ placeHolder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm py-2">
      <div className="md:container px-5 grid grid-cols-3 mx-auto">
        {/* Left Part */}
        <div
          className="relative h-12 cursor-pointer flex items-center w-12"
          onClick={() => {
            router.push("/");
          }}
        >
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
            value={searchInput}
            className="p-2 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm"
            placeholder={placeHolder || "Start your trip"}
            onChange={(e) => setSearchInput(e.target.value)}
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

        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSelect}
            />
            <div className="my-2 flex items-center border-b">
              <h2 className="flex-grow">Number of Guests</h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-4 outline-none"
                value={noOfGuests}
                min={1}
                onChange={(e) => {
                  setNoOfGuests(e.target.value);
                }}
              />
            </div>
            <div className="flex py-2">
              <button className="flex-grow text-gray-500" onClick={resetInput}>
                Cancel
              </button>
              <button className="flex-grow text-red-400" onClick={search}>
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
