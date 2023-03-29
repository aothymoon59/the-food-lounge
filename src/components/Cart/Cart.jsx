import React from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({ cart }) => {
  const handleOrder = () => {
    toast("Order Added!");
  };
  // let quantity = 0;
  // for (const food of cart) {
  //   quantity = quantity + food.quantity;
  // }

  return (
    <div className="cart">
      <h1 className="cart-title">Your cart</h1>
      <p className="cart-subTitle">Start adding foods to your cart</p>
      <div className="foods-name">
        {cart &&
          cart.map((food, index) => {
            return (
              <div key={index}>
                <li>
                  {food.strMeal} {food.quantity}
                </li>
              </div>
            );
          })}
      </div>
      <div className="order">
        <button onClick={handleOrder} className="order-btn">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
