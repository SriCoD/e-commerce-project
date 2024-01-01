import React from "react";
import "./Products.scss";
import List from "./../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItems">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>

          <div className="inputItems">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="1">Pullover</label>
          </div>

          <div className="inputItems">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="1">Coats</label>
          </div>
        </div>

        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          height="90"
          px
          src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="img"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
