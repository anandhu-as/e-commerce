import React from "react";
import { banner } from "../../NFT/Data";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner flex items-center">
      <div className="w-1/2 pr-8">
        <img
          src={banner}
          alt=""
          className="max-w-full h-auto pl-4 pt-4 image-animate"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-pink-800 pr-6 animate__animated animate__fadeInDown heading-animate">
          What is NFT-APES ?
        </h1>
        <p className="text-purple-600 pr-4 animate__animated animate__fadeInDown text-animate">
          Bored Apes are the limited ten thousand Ethereum-based NFTs
          (Non-Fungible Tokens). They present unique and imaginative images of
          an ape with different facial expressions, clothes, etc. These NFTs
          have gained so much public attention that people spend millions to buy
          them.
        </p>
        <div className="flex items-start mt-4">
          <button className="px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800 mt-4 animate__animated animate__fadeInUp">
            <Link to="/store" className="text-white bg-purple-700">
              Explore
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
