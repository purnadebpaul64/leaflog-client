import React from "react";
import { Link } from "react-router";

const AllPlantPageTable = ({ allPlantsData }) => {
  return (
    <div className="w-full md:w-10/12 mx-auto my-10 px-2">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="text-md text-gray-600">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Care Level</th>
              <th>Watering Frequency</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {allPlantsData.map((plant, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="rounded-xl h-16 w-16">
                        <img src={plant.photo} alt="Plant image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{plant.plantname}</div>
                    <div className="text-sm opacity-50">{plant.category}</div>
                  </div>
                </td>
                <td>
                  <div className="text-md">{plant.level}</div>
                </td>
                <td>{plant.wateringfreq} days</td>
                <th>
                  <Link to={`/plants/${plant._id}`}>
                    <button className="btn btn-outline btn-sm">Details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {allPlantsData.map((plant, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 grid grid-cols-2 gap-4 items-start"
          >
            <div className="col-span-1">
              <img
                src={plant.photo}
                alt={plant.plantname}
                className="w-full h-32 rounded-xl object-cover"
              />
            </div>
            <div className="col-span-1">
              <h3 className="font-semibold text-lg">{plant.plantname}</h3>
              <p className="text-sm text-gray-500 mb-1">{plant.category}</p>
              <p className="text-sm">
                <span className="font-medium text-gray-700">Care Level:</span>{" "}
                {plant.level}
              </p>
              <p className="text-sm mb-2">
                <span className="font-medium text-gray-700">Watering:</span>{" "}
                {plant.wateringfreq} days
              </p>
              <Link to={`/plants/${plant._id}`}>
                <button className="btn btn-sm btn-outline">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlantPageTable;
