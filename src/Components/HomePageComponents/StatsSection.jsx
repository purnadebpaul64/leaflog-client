import React from "react";
import CountUp from "react-countup";
import { FaLeaf, FaSmile, FaStar, FaGlobe } from "react-icons/fa";

const stats = [
  {
    title: "Plants Managed",
    value: 50000,
    suffix: "+",
    icon: <FaLeaf className="text-primary text-3xl" />,
  },
  {
    title: "Happy Gardeners",
    value: 15000,
    suffix: "+",
    icon: <FaSmile className="text-primary text-3xl" />,
  },
  {
    title: "Plant Health Rating",
    value: 4.9,
    decimals: 1,
    suffix: "★",
    icon: <FaStar className="text-primary text-3xl" />,
  },
  {
    title: "Global Plant Lovers",
    value: 35,
    suffix: "+",
    icon: <FaGlobe className="text-primary text-3xl" />,
  },
];

const StatsSection = () => {
  return (
    <section className=" lg:py-8">
      <div className="w-11/12 mx-auto px-4 text-center">
        <section className="-mt-5">
          <div className="text-center">
            <div className="md:w-3/6 lg:w-3/8 mx-auto pb-8">
              <div className="divider divider-primary">
                <h2 className="text-3xl text-primary">🌿 LeafLog in Numbers</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#D8E9D650] rounded-xl p-2 md:p-4 lg:p-6 shadow-md flex flex-col items-center"
            >
              {stat.icon}
              <div className="text-2xl lg:text-4xl font-bold text-gray-600 mt-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix || ""}
                  decimals={stat.decimals || 0}
                />
              </div>
              <p className="text-gray-600 text-sm font-semibold mt-2">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
