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
        <div className="max-w-md mx-auto text-gray-500 mt-4 flex flex-col gap-4">
          <p>
            Nisi laboris elit proident Lorem duis id tempor esse irure cillum
            ea. Mollit ipsum in reprehenderit velit magna dolor. Aute
            reprehenderit excepteur sit sunt elit eu commodo in commodo eiusmod.
          </p>
          <p>
            Fugiat anim eu consequat exercitation aliqua cupidatat pariatur
            magna. Labore et proident ex eiusmod magna consectetur sit.
          </p>
          <p>
            Qui sunt veniam sint Lorem. Laboris ea ea ad deserunt culpa do in id
            ullamco labore qui duis enim.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-2xl underline text-gray-500"
            href="tel+46748374820"
          >
            +46 748 374 820
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
