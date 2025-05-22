import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import bgimg from "../assets/error-bg.webp";
import errorimg from "../assets/404img.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="w-11/12 mx-auto flex flex-col gap-8 justify-center items-center">
          <div>
            <img className="w-32" src={errorimg} alt="" />
          </div>
          <div>
            <p className="text-2xl">
              Error <span className="text-primary">404</span> | Page Not Found
            </p>
          </div>
          <Link to={"/"} className="btn btn-primary text-gray-600">
            Back To Home
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
