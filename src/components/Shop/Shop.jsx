import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import Notfound from "../Notfound/Notfound";
import "./Shop.css";

const Shop = (props) => {
  const searchValue = props.searchValue;

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [searchValue]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct =
        foods && foods.find((product) => product.idMeal === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [foods]);

  const handleAddToCart = (food) => {
    let newCart = [];

    const exist = cart.find((pd) => pd.idMeal === food.idMeal);
    if (!exist) {
      food.quantity = 1;
      newCart = [...cart, food];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.idMeal !== food.idMeal);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(food.idMeal);
  };

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
