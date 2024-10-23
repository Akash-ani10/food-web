import React, { useContext } from "react";
import "./PlaceOrder.css";
import { Form, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {
  const {getTotalCartAmount} =useContext(StoreContext);
  const navigate =useNavigate();
  
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="phone" required />
        <div className="multi-fields">
        <input type="text" placeholder="Zipcode" required />
        <input type="text" placeholder="City" required />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="adress" />
      <input type="text" placeholder="Street" />

      </div>
      
      <div className="place-order-right">
      <div className="cart-total">
        <h2> Cart Total</h2>
        <div>
          <div className="cart-total-detail">
            <p>subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <hr />
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:5}</p>
          </div>
          <hr />
          <div className="cart-total-detail">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 5}</b>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
        <button onClick={()=>navigate('/Cart')} >CANCEL  PAYMENT</button>
      </div>

      </div>
     
    </form>
  );
};

export default PlaceOrder;
