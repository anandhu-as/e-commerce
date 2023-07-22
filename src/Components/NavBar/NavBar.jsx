import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { logo } from "../../NFT/Data";

export const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <h3 className="animate__animated animate__bounceInLeft">NFT-APES</h3>
      <div className="navbar-right">
        <Link className="animate__animated animate__fadeInDown" to="/store">
          Apes <i className="fa-solid fa-dollar-sign"></i>
        </Link>
        <Link className="animate__animated animate__fadeInDown" to="/cart">
          Cart <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  );
};
