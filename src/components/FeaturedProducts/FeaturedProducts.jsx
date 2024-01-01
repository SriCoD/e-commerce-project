import React from "react";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      FeaturedProducts
      <div className="top">
        <h1>{type} products</h1>
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default FeaturedProducts;
