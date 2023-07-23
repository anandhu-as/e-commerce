import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { logo } from "../../NFT/Data";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { cart } = useSelector((state) => state.products);
  return (
    <div className="navbar fixed w-full">
      <img src={logo} alt="" />
      <h3 className="animate__animated animate__bounceInLeft">
        <Link to="/">NFT-APES</Link>
      </h3>
      <div className="navbar-right">
        <Link className="animate__animated animate__fadeInDown" to="/cart">
          <i className="fa-solid fa-cart-shopping pr-4"></i>
          {cart.length === 0 ? null : cart.length}
        </Link>
        <Link
          className="animate__animated animate__fadeInDown"
          to="/notification"
        >
          <i className="fa-solid fa-bell fa-shake"></i>{" "}
          {cart.length === 0 ? null : cart.length}
        </Link>
        <Link
          className="animate__animated animate__fadeInDown animate-pulse"
          to="/store"
        >
          store
        </Link>
        <Link
          className="animate__animated animate__fadeInDown animate-pulse"
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};
