import React from "react";
import herobg from "../assets/error-bg.webp";
import MyPlantPageTable from "../Components/MyPlantPageTable";
import { useLoaderData } from "react-router";

const MyPlantsPage = () => {
  const allPlantOfthisUser = useLoaderData();
  console.log(allPlantOfthisUser);

  return (
    <div>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="h-[40vh] md:h-[20vh] lg:h-[40vh] flex flex-col items-center justify-center lg:w-8/12 mx-auto text-center space-y-3">
          <h2 className="text-4xl text-primary">My Plants</h2>
          <p className="text-xl font-semibold">
            Here’s your personal garden in one place! 🌿
          </p>
          <p className="hidden md:inline-block text-sm">
            Browse all the plants you’re tracking, check their care status, and
            keep them thriving.
          </p>
        </div>
      </section>

      {/* ==== */}
      <MyPlantPageTable
        allPlantOfthisUser={allPlantOfthisUser}
      ></MyPlantPageTable>
    </div>
  );
};

export default MyPlantsPage;
