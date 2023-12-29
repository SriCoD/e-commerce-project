import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>lorem</span>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <span>
            <a href="mailto:srishtibkma@gmail.com">Email</a>
          </span>
          <span>
            <a href="tel:9862516905">Phone</a>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Srishti Store</span>
          <span className="copyright">Copyrights 2024.All rights reserved</span>
        </div>
        <div className="right ">
          <img src="/img/payment.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
