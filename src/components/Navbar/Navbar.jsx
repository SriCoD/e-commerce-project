import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className=" item p-2 bg-red-600 size-2 h-2">
            <img
              src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/64/India-Flag-icon.png"
              alt="img"
            />
            <ExpandMoreIcon />
          </div>
          <div className="item">
            IND
            <ExpandMoreIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="centre">
          <Link to="/">Srishti Store</Link>
        </div>
        <div className="item">
          <Link to="/">Homepage</Link>
        </div>
        <div className="item">
          <Link to="/">About Us</Link>
        </div>
        <div className="item">
          <Link to="/">Contact Us</Link>
        </div>
        <div className="icons">
          <SearchIcon />
          <PersonIcon />
          <FavoriteIcon />
          <div className="cartIcon">
            <ShoppingCartIcon />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
