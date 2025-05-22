import React from "react";

const UpdatePlantPage = () => {
  return (
    <div className="w-11/12 mx-auto my-12 md:my-24">
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
            <form>
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
                    name="dob"
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
                    name="dob"
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
                    name="dob"
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
