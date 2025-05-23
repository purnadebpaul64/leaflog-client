import React from "react";

const AllPlantPageTable = ({ allPlantsData }) => {
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
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
            {/* row 1 */}
            {allPlantsData.map((plant) => (
              <tr>
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
                  <button className="btn btn-outline btn-sm">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllPlantPageTable;
