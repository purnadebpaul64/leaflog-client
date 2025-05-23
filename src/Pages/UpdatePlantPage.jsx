import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const UpdatePlantPage = () => {
  const { user } = use(AuthContext);
  const PlantData = useLoaderData();
  const {
    _id,
    plantname,
    photo,
    category,
    level,
    lastwater,
    nextwater,
    wateringfreq,
    health,
    details,
  } = PlantData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Successfully",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto my-12 md:my-18">
      <div className="text-center">
        <div className="md:w-3/6 lg:w-2/6 mx-auto pb-2">
          <div className="divider divider-primary">
            <h2 className="text-3xl">Update Plant</h2>
          </div>
        </div>
        <p>
          Need to make changes? Update your plant’s care schedule or notes to
          keep everything on track.
        </p>
      </div>
      <div>
        <div className="bg-[#d8e9d640] border-1 border-primary rounded-2xl space-y-5 p-4 md:p-8 mt-8">
          <div>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                {/* plant name */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Plant Name
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Name"
                    name="plantname"
                    required
                    defaultValue={plantname}
                  />
                </fieldset>
                {/* plant image */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Photo
                  </label>
                  <input
                    type="text"
                    className="input w-full "
                    placeholder="Photo URL"
                    name="photo"
                    required
                    defaultValue={photo}
                  />
                </fieldset>
                {/* category */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Category
                  </label>

                  <select
                    name="category"
                    className="select select-bordered w-full"
                    required
                    defaultValue={category}
                  >
                    <option disabled value={""}>
                      Select a category
                    </option>
                    <option>Bonsi</option>
                    <option>Flowers</option>
                    <option>Fruits</option>
                    <option>Succulent</option>
                    <option>Tropical</option>
                  </select>
                </fieldset>
                {/* care level */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Care Level
                  </label>
                  <select
                    name="level"
                    className="select select-bordered w-full"
                    required
                    defaultValue={level}
                  >
                    <option disabled selected>
                      Select a level
                    </option>
                    <option>easy</option>
                    <option>moderate</option>
                    <option>difficult</option>
                  </select>
                </fieldset>
                {/* last water date */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Last Watered Date
                  </label>
                  <input
                    type="date"
                    name="lastwater"
                    className="input input-bordered w-full"
                    placeholder="Pick a date"
                    required
                    defaultValue={lastwater}
                  />
                </fieldset>
                {/* next water date */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Next Watered Date
                  </label>
                  <input
                    type="date"
                    name="nextwater"
                    className="input input-bordered w-full"
                    placeholder="Pick a date"
                    required
                    defaultValue={nextwater}
                  />
                </fieldset>
                {/* watering frequency */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    watering frequency
                  </label>
                  <input
                    type="number"
                    name="wateringfreq"
                    className="input input-bordered w-full"
                    placeholder="Enter frequency"
                    required
                    defaultValue={wateringfreq}
                  />
                </fieldset>
                {/* health status */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    Health Status
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Plant Health"
                    name="health"
                    required
                    defaultValue={health}
                  />
                </fieldset>
                {/* user email */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    User Email
                  </label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="User Email"
                    name="useremail"
                    readOnly
                    defaultValue={user.email}
                  />
                </fieldset>
                {/* user name */}
                <fieldset className="fieldset">
                  <label className="label font-semibold text-gray-600">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="User Name"
                    name="username"
                    readOnly
                    defaultValue={user.displayName}
                  />
                </fieldset>
                <div className="col-span-2">
                  {/* details */}
                  <fieldset className="fieldset">
                    <label className="label font-semibold text-gray-600">
                      Details
                    </label>
                    <textarea
                      className="textarea textarea-bordered w-full"
                      placeholder="Enter the details"
                      name="details"
                      required
                      defaultValue={details}
                    />
                  </fieldset>
                </div>
              </div>

              <button className="btn btn-primary mt-6 w-full text-gray-600">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlantPage;
