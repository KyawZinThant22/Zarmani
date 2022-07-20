import React from "react";
import Slider from "./Slider";

const Category = ({category , setSelectedCategory}) => {
  return (
    <div className="mt-12 container mx-auto">
      <h1 className="text-xl font-bold">Browse The Category </h1>

      <div className=" mt-6">
          <Slider category={category} setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  );
};

export default Category;
