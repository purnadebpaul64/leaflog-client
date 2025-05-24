import React from "react";
import { Link } from "react-router";

const NewSinglePlantCard = ({ singlePlant }) => {
  const { _id, plantname, photo, category, level, wateringfreq } = singlePlant;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 border-1 border-primary rounded-lg">
      <div className="md:col-span-1">
        <img
          className="w-full h-40 md:h-full object-cover rounded-md"
          src={photo}
          alt=""
        />
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl text-gray-600">{plantname}</h2>
        <div className="border-b-2 border-secondary py-1"></div>
        <div className="py-1">
          <p>
            <span className="font-medium text-sm">Category : </span>
            {category}
          </p>
          <p>
            <span className="font-medium text-sm">Care Level : </span>
            {level}
          </p>
        </div>
        <Link to={`/plants/${_id}`}>
          <button className="btn btn-xs btn-primary text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewSinglePlantCard;
