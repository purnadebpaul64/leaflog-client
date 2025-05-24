import React from "react";
import { useLoaderData } from "react-router";
import NewSinglePlantCard from "./NewSinglePlantCard";

const NewPlantsSection = () => {
  const newPlantsData = useLoaderData();

  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <section>
          <div className="text-center">
            <div className="md:w-3/6 lg:w-3/8 mx-auto pb-2">
              <div className="divider divider-primary">
                <h2 className="text-3xl text-primary">
                  New Plants on the Block
                </h2>
              </div>
            </div>
            <p>
              Say hello to our newest leafy friends. Add them to your care list
              and start tracking today!
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
          {newPlantsData.map((singlePlant) => (
            <NewSinglePlantCard
              key={singlePlant._id}
              singlePlant={singlePlant}
            ></NewSinglePlantCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NewPlantsSection;
