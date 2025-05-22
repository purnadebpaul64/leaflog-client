import React from "react";
import bg from "../../assets/cta-bg.webp";
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <div
      className="w-11/12 mx-auto p-3 lg:py-20 lg:px-20 bg-cover mb-12 rounded-2xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:grid grid-cols-2">
        <div className="space-y-2.5">
          <h2 className="text-2xl text-primary">Join the Green Side</h2>
          <h3 className="hidden md:inline-block text-xl md:text-3xl lg:text-5xl lg:leading-15">
            Start your plant care journey today
          </h3>
          <h3 className="text-[16px] font-light">
            create your free account and give your plants the attention they
            deserve!
          </h3>
          <Link
            to={"/auth/registration"}
            className="btn btn-sm md:btn-lg btn-primary text-gray-600"
          >
            Create An Account
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CtaSection;
