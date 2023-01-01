import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout--left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg"
          alt=""
          className="checkout--ad"
        />
        <div>
          <h2 className="checkout--title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout--right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
