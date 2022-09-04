import React from "react";
// import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../res/logo.png";
const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <div className="logos">
          <img src={image} alt="logo" className="logo" />
          <h1>
            {" "}
            Coin <span className="purple">Hunt</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
