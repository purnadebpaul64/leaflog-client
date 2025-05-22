import React from "react";
import herobg from "../assets/error-bg.webp";

const AllPlantPage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="h-[40vh] md:h-[20vh] lg:h-[40vh] flex flex-col items-center justify-center lg:w-8/12 mx-auto text-center space-y-3">
          <h2 className="text-4xl text-primary">All Plant</h2>
          <p className="text-xl font-semibold">
            Discover a world of greenery! 🌿
          </p>
          <p className="text-sm hidden md:inline-block">
            Browse all the plants featured in our system — learn about their
            care needs, types, and how to keep them healthy and happy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllPlantPage;
