import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import Notfound from "../Notfound/Notfound";
import "./Shop.css";

const Shop = (props) => {
  const searchValue = props.searchValue;

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (food) => {
    const newCart = [...cart, food];
    setCart(newCart);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [searchValue]);

  return (
    <div className="shop ">
      {foods ? (
        <div className="foods-container">
          {foods.map((food) => (
            <Food
              handleAddToCart={handleAddToCart}
              key={food.idMeal}
              food={food}
            ></Food>
          ))}
        </div>
      ) : (
        <Notfound></Notfound>
      )}

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
