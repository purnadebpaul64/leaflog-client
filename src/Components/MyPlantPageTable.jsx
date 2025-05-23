import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPlantPageTable = ({ allPlantOfthisUser }) => {
  //   console.log(allPlantOfthisUser);
  const [plantData, setPlantData] = useState(allPlantOfthisUser);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plants/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Plant has been deleted.",
                icon: "success",
              });
              const remainingPlant = plantData.filter((pla) => pla._id !== _id);
              setPlantData(remainingPlant);
            }
          });
      }
    });
  };

  return (
    <div className="w-full md:w-11/12 lg:10/12 mx-auto my-10 px-2">
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
            {plantData.map((plant, index) => (
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
                    <button className="btn btn-outline btn-sm mr-2">
                      Details
                    </button>
                  </Link>
                  <Link to={`/update-plant/${plant._id}`}>
                    <button className="btn btn-info btn-sm mr-2">Update</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(plant._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {plantData.map((plant, index) => (
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
                <button className="btn btn-xs btn-outline mr-2">
                  <FaEye size={18} />
                </button>
              </Link>
              <Link to={`/plants/${plant._id}`}>
                <button className="btn btn-xs btn-info mr-2">
                  <FaGear size={18} />
                </button>
              </Link>

              <button
                onClick={() => handleDelete(plant._id)}
                className="btn btn-xs btn-error"
              >
                <FaRegTrashAlt size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlantPageTable;
