import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { logo } from "../../NFT/Data";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const { cart, sameItem } = useSelector((state) => state.products);
  const message = cart.length + sameItem.length;
  return (
    <div className="navbar fixed w-full">
      <img src={logo} className="cursor-pointer" alt="" />
      <h3 className="animate__animated animate__bounceInLeft">
        <Link to="/" id="name">NFT-APES</Link>
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
          {message === 0 ? null : message}
        </Link>
        <Link className="animate__animated animate__fadeInDown " to="/store">
          Buy an Ape
        </Link>
        <Link className="animate__animated animate__fadeInDown " to="/about">
          About
        </Link>
      </div>
    </div>
  );
};
