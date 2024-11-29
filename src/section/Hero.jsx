import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-white p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-monsterrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-[8px]">
            Nike Shoes
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stats, index) => (
            <div key={index} className="flex flex-col">
              <p className="font-palanquin text-4xl font-bold">{stats.value}</p>
              <p className="font-montserrat leading-7 text-gray-700">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Featured shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        {/* Small Shoe Cards */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe}
              changeBigShoeImage={setBigShoeImg}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
