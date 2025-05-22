import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  const [passError, setPassError] = useState([]);
  return (
    <div className="py-18 flex justify-center items-center">
      <form className="fieldset bg-base-200 border-primary rounded-box w-sm border p-4">
        <legend className="fieldset-legend justify-center text-xl font-bold">
          Registration
        </legend>

        <label className="label font-semibold">Name</label>
        <input
          name="name"
          type="text"
          className="input w-full"
          placeholder="Your Name"
          required
        />

        <label className="label font-semibold">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
          required
        />

        <label className="label font-semibold">PhotoURL</label>
        <input
          name="photo"
          type="text"
          className="input w-full"
          placeholder="Your Photo URL"
        />

        <label className="label font-semibold">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPass ? "text" : "password"}
            className="input w-full "
            placeholder="Password"
            required
          />
          <div
            onClick={() => {
              setShowPass(!showPass);
            }}
            className="absolute top-0 right-0 btn btn-ghost"
          >
            {showPass ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>

        {/* Show password validation errors */}
        {passError.length > 0 && (
          <ul className="text-red-500 list-disc list-inside mt-2">
            {passError.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        )}

        <button type="submit" className="btn btn-primary text-white mt-4">
          Register
        </button>
        <div className="divider">OR</div>
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-center pt-5">
          Do You Already Have An Account ?<span> </span>
          <Link className="text-primary font-bold" to={"/auth"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
