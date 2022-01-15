import { useRouter } from "next/router";
import { format } from "date-fns";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(location, startDate, endDate, noOfGuests);
  const formattedStartDate = format(new Date(startDate), "ss MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "ss MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} `} />
      <main className="md:container mx-auto px-5 py-5 md:py-10">
        <div className="flex">
          <section className="w-screen">
            <p className="">
              300+ Stays - {range} - {noOfGuests} for guests
            </p>
            <h2 className="text-2xl font-bold py-2">Stays in {location}</h2>
            <div className="hidden lg:inline-flex mb-4 space-x-1">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms & Beds</p>
              <p className="button">More filters</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
