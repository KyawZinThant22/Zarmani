import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { urlFor } from "../client";

const Slider = ({ category , setSelectedCategory}) => {

  const responsive = {
    300: {
      items: 1,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  };


  const handleDragStart = (e) => e.preventDefault();
  const items =
    category &&
    category?.map((item) => [
      <div onClick={()=>setSelectedCategory(item.slug.current)}  key={item.title} className="cursor-pointer hover:bg-primary hover:text-white bg-white h-[14rem] px-[10px] object-contain lg:ml-2 mx-auto w-[20rem] rounded-lg flex flex-col items-center justify-center">
        <img
            className="w-[4rem]"
          src={urlFor(item.imgUrl)}
          alt={item.title}
          onDragStart={handleDragStart}
        />
        <p className="text-2xl font-bold mt-6">{item.title}</p>
      </div>,
    ]);
  return (
    <div className="mt-8">
      {category && (
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayDirection="ltr"
          autoPlayInterval={2000}
          infinite
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
        />
      )}
    </div>
  );
};

export default Slider;
