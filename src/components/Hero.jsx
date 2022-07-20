import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";

const Hero = () => {
  const [hero, setHero] = useState("");

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setHero(data);
    });
  }, []);

  return (
    <>
      {hero && hero.map((hero) => (
        <div id="#" className=" lg:flex-row flex flex-col-reverse  container mx-auto  lg:items-center image " key={hero.title}>
          <div>
            <h1 className="lg:text-5xl text-xl font-bold lg:w-[28rem] mx-auto lg:mx-0 lg:text-start text-center w-[18rem] tracking-wider leading-tight">
              {hero.title}
            </h1>
            <div className="flex">
              <div className=" border-r-[3px] border border-solid border-black mr-3 h-[4rem] mt-5 hidden md:flex"></div>
              <p className="lg:text-xl text-lg text-DarkGray w-[39rem] mt-6 md:p-0 p-3 ">
                {hero.description}
              </p>
            </div>
            <div className="lg:flex-row flex gap-6 mt-6 items-center container flex-col">

                <input type="text" placeholder="Enter your email here...."  className="bg-white px-3 py-4 text-md lg:text-xl rounded lg:w-[23rem]"/>
                <button className=" bg-primary rounded hover:bg-blue-800  text-white font-bold px-4 text-xl p-[15px]">Subscribe</button>
            </div>
          </div>
          <div>
              <img className="lg:w-[20rem] w-[10rem] lg:ml-[19rem] lg:mt-0 my-[2rem] mx-auto" src={urlFor(hero.imgUrl)} alt="img" />
        </div>
        </div>
      ))}
      
    </>
  );
};

export default Hero;
