import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone | Ebraj.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Main Section */}
      <main className="md:container mx-auto px-5">
        {/* Small Section */}
        <section>
          <h2 className="flex items-center space-x-4 font-bold text-xl md:2xl py-8 md:py-10">
            <span>Explore Nearby </span>
            <ArrowNarrowRightIcon className="inline h-7" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {exploreData?.map((indItem) => (
              <SmallCard
                key={indItem.img}
                img={indItem.img}
                location={indItem.location}
                distance={indItem.distance}
              />
            ))}
          </div>
        </section>

        {/* Medium Section */}
        <section className="pb-10">
          <h2 className="flex items-center space-x-4 font-bold text-xl md:2xl py-8 md:py-10">
            <span>Live Anywhere </span>
            <ArrowNarrowRightIcon className="inline h-7" />
          </h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((indItem) => (
              <MediumCard
                key={indItem.img}
                img={indItem.img}
                title={indItem.title}
              />
            ))}
          </div>
        </section>

        {/* LargeCard */}
        <LargeCard
          img="/images/large-card.jpg"
          title="The Greatest Outdoors"
          description="Wishists curated by Airbnb."
          btnText="Get Inspired"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(
    (response) => response.json()
  );
  const cardsData = await fetch("https://jsonkeeper.com/b/VHHT").then(
    (response) => response.json()
  );
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    },
  };
}
