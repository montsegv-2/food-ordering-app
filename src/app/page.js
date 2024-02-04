import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-6">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
      </section>
      <p className="max-w-2xl mx-auto mt-4 text-gray-500">
        Nisi laboris elit proident Lorem duis id tempor esse irure cillum ea.
        Mollit ipsum in reprehenderit velit magna dolor. Aute reprehenderit
        excepteur sit sunt elit eu commodo in commodo eiusmod.
      </p>
    </>
  );
}
