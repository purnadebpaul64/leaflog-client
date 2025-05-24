import React, { use } from "react";
import logo from "../assets/leaflog-logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Loged Out Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="bg-[#d8e9d640] border-b-1 border-gray-400 py-3">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-2"
            >
              <NavLink to={"/"} className="">
                Home
              </NavLink>
              <NavLink to={"/all-plants"} className="">
                All Plants
              </NavLink>
              <NavLink to={"/add-new-plant"} className="">
                Add Plant
              </NavLink>
              <NavLink to={`/my-plants/${user?.email}`} className="">
                My Plants
              </NavLink>
            </ul>
          </div>
          <Link to={"/"} className="w-30 lg:w-36">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1 font-bold">
            <NavLink to={"/"} className="font-medium">
              Home
            </NavLink>
            <NavLink to={"/all-plants"} className="font-medium">
              All Plants
            </NavLink>
            <NavLink to={"/add-new-plant"} className="font-medium">
              Add Plant
            </NavLink>
            <NavLink to={`/my-plants/${user?.email}`} className="font-medium">
              My Plants
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {/*  */}
          {user && (
            <div
              className="tooltip tooltip-bottom z-20"
              data-tip={user.displayName}
            >
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            </div>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary font-bold text-[12px] md:text-[16px] text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={"/auth"}>
                <button className="btn btn-outline btn-primary font-bold text-[12px] md:text-[16px] hover:text-white">
                  login
                </button>
              </Link>
              <Link to={"/auth/registration"}>
                <button className="btn btn-primary font-bold text-[12px] md:text-[16px] text-white">
                  Register
                </button>
              </Link>
            </>
          )}
          {/*  */}
          {/* <Link to={"/auth"}>
            <button className="btn btn-outline btn-primary font-bold text-[12px] md:text-[16px] hover:text-white">
              login
            </button>
          </Link>
          <Link to={"/auth/registration"}>
            <button className="btn btn-primary font-bold text-[12px] md:text-[16px] text-white">
              Register
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
