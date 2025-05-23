import React, { use } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddPlantPage = () => {
  const { user } = use(AuthContext);
  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());
    // console.log(newPlant);

    // add plant
    fetch("http://localhost:3000/addplant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Plant Successfully added!",
            icon: "success",
            timer: 1800,
          }).then(() => {
            form.reset();
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto my-12 md:my-18">
      <div className="text-center">
        <div className="md:w-3/6 lg:w-2/6 mx-auto pb-2">
          <div className="divider divider-primary">
            <h2 className="text-3xl">Add a New Plant</h2>
          </div>
        </div>
        <p>
          Keep your green friends happy and healthy! Fill in the details below
          to start tracking care tasks for your plant.
        </p>
      </div>
      <div>
        <div className="bg-[#d8e9d640] border-1 border-primary rounded-2xl space-y-5 p-3 md:p-8 mt-8">
          <div>
            <form onSubmit={handleAddPlant}>
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
                  >
                    <option disabled selected>
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
                    defaultValue={user.email}
                    readOnly
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
                    />
                  </fieldset>
                </div>
              </div>

              <button className="btn btn-primary mt-6 w-full text-gray-600">
                Add Plant
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlantPage;
