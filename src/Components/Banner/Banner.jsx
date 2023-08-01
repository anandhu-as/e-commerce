import React from "react";
import { banner, homeParagraph } from "../../NFT/Data";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner flex items-center pt-16">
      <div className="w-1/2 pr-8">
        <img
          src={banner}
          alt="home-image"
          className="max-w-full h-auto pl-4 pt-4 image-animate"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-pink-800 pr-6 animate__animated animate__fadeInDown heading-animate">
          BORED-APES
        </h1>
        <p className="text-purple-600 pr-4 animate__animated animate__fadeInDown text-animate">
          {homeParagraph}
        </p>
        <div className="flex items-start mt-4  px-6 py-3  animate__animated animate__fadeInDown">
          <Link
            to="/store"
            className=" bg-pink-800 px-6 py-3  text-white rounded hover:bg-purple-800 mt-4 animate__animated animate__fadeInUp"
          >
            Explore
          </Link>
          <Link
            to="/about"
            className=" bg-purple-800 px-6 py-3 bg-purple-700 text-white rounded hover:bg-pink-800 mt-4 animate__animated animate__fadeInUp ml-8"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
