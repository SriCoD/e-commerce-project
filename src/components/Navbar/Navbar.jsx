import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="centre">
          <Link className="link" to="/">
            Srishti Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About Us
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact Us
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
