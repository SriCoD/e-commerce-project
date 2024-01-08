import React from "react";
import "./Cart.scss";
const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      
      <div className="total">
        <span>SUBTOTAL</span>
      
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span >Reset Cart</span>
        
      
    </div>
  );
};


export default Cart;
