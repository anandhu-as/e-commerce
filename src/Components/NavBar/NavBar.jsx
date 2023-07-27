import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { logo } from "../../NFT/Data";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const { cart, notifications } = useSelector((state) => state.products);
  const message =
    notifications.cartNotification.length + notifications.sameProduct.length;
  return (
    <div className="navbar fixed w-full animate__animated animate__fadeInDown">
      <img src={logo} className="cursor-pointer" alt="" />
      <h3>
        <Link to="/" id="name">
          NFT-APES
        </Link>
      </h3>
      <div>
        <Link to="/cart">
          <i className="fa fa-shopping-bag mr-2" aria-hidden="true"></i>
          {cart.length === 0 ? null : cart.length}
        </Link>
        <Link className="" to="/notification">
          <i className="fa-solid fa-bell fa-shake"></i>{" "}
          {message === 0 ? null : message}
        </Link>
        <Link to="/store">Buy an Ape</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
