import React from "react";
import bg from "../../assets/cta-bg.webp";
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <div
      className="w-11/12 mx-auto py-20 px-20 bg-cover mb-12 rounded-2xl"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="grid grid-cols-2">
        <div className="space-y-2.5">
          <h2 className="text-2xl text-primary">Join the Green Side</h2>
          <h3 className="text-5xl leading-15">
            Start your plant care journey today
          </h3>
          <h3 className="text-[16px] font-light">
            create your free account and give your plants the attention they
            deserve! 🌿
          </h3>
          <Link
            to={"/auth/registration"}
            className="btn btn-primary text-gray-600"
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
