import React from "react";
import "./Product.scss";
import { useState } from "react";
import List from "./../../components/List/List";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import { Link } from "react-router-dom";

const Product = () => {
  const [selectedImg, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div clasname="images">
          <img
            src={images[0]}
            width="500"
            alt="img"
            onClick={(e) => setSelectedImage(0)}
          />

          <img
            src={images[1]}
            alt="img"
            width="500"
            onClick={(e) => setSelectedImage(0)}
          />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartOutlinedIcon />
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderOutlinedIcon />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceOutlinedIcon />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Description</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
