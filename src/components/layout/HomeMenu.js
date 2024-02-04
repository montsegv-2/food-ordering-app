import Image from "next/image";
import React from "react";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute h-full left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"sallad"} />
        </div>
        <div className="absolute -top-[300px] right-0 -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <img src="" alt="pizza" />
          <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
          <p className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-primary text-white rounded-full px-4 py-2">
            Add to car $12
          </button>
        </div>
      </div>
    </section>
  );
}
