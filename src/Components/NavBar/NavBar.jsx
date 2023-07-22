import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { logo } from "../../NFT/Data";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { cart } = useSelector((state) => state.products);
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <h3 className="animate__animated animate__bounceInLeft">
        <Link to="/">NFT-APES</Link>
      </h3>
      <div className="navbar-right">
        <Link className="animate__animated animate__fadeInDown" to="/store">
          store <i className="fa-solid fa-dollar-sign"></i>
        </Link>
        <Link className="animate__animated animate__fadeInDown" to="/cart">
          Bag <i className="fa-solid fa-bag-shopping"></i> {cart.length}
        </Link>
      </div>
    </div>
  );
};
