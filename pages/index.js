import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  console.log(exploreData);
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
      <main>
        <section className="md:container mx-auto px-5 py-5 md:py-10">
          <h2 className="font-bold text-xl md:2xl pb-5">Explore Nearby</h2>
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
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(
    (response) => response.json()
  );
  return {
    props: {
      exploreData: exploreData,
    },
  };
}
