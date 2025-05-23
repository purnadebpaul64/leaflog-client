import React from "react";
import { useLoaderData } from "react-router";

const PlantDetails = () => {
  const singlePlantData = useLoaderData();
  const {
    photo,
    plantname,
    category,
    level,
    lastwater,
    nextwater,
    wateringfreq,
    health,
    details,
  } = singlePlantData;
  // console.log(singlePlantData);

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="p-4 border-1 border-primary rounded-xl grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-linear-to-t from-secondary to-white">
        <div>
          <img
            className="rounded-lg w-full md:h-110 object-cover"
            src={photo}
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="md:flex justify-between items-end">
            <h2 className="text-3xl leading-12 md:text-[46px] text-primary">
              {plantname}
            </h2>
            <div class="badge badge-primary text-gray-700 text-lg">
              {category}
            </div>
          </div>
          <div className="border-b-1 border-gray-400 border-dashed"></div>
          <div>
            <p>{details}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl">
              <span className="font-semibold">Care Level : </span>
              {level}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Health Status : </span>
              {health}
            </p>
          </div>
          <div className="border-b-1 border-gray-400 border-dashed"></div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-primary pb-1">
              Watering Details
            </h3>
            <p className="text-lg">
              <span className="font-semibold">Last Watered Date : </span>
              {lastwater}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Next Watering Date : </span>
              {nextwater}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Watering Frequency : </span>
              {wateringfreq} Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
