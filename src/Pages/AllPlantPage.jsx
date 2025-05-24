import React, { useState } from "react";
import herobg from "../assets/error-bg.webp";
import { useLoaderData } from "react-router";
import AllPlantPageTable from "../Components/AllPlantPageTable";

const AllPlantPage = () => {
  const allPlantsData = useLoaderData();
  // console.log(allPlantsData);
  const [sorted, setSorted] = useState(false);

  const levelOrder = { easy: 1, moderate: 2, difficult: 3 };

  const handleSortClick = () => {
    setSorted((prev) => !prev);
  };

  const sortedPlants = sorted
    ? [...allPlantsData].sort(
        (a, b) => levelOrder[a.level] - levelOrder[b.level]
      )
    : allPlantsData;

  return (
    <div>
      <section
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
      </section>

      {/* ===== Sort Button ===== */}
      <div className="w-full md:w-10/12 mx-auto text-center px-4 mt-6">
        <button onClick={handleSortClick} className="btn btn-outline btn-sm">
          {sorted ? "Reset Order" : "Sort by Care Level"}
        </button>
      </div>
      {/* ======== */}
      <AllPlantPageTable allPlantsData={sortedPlants}></AllPlantPageTable>
    </div>
  );
};

export default AllPlantPage;
