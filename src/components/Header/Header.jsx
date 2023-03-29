import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="food.png" alt="" />
        <h4>Food Lounge</h4>
      </div>
      <div className="search-container">
        <input
          onChange={props.handleInputChange}
          className="search-field"
          type="text"
        />
        <button onClick={props.handleSearch} className="search-btn">
          Search
        </button>
      </div>
      <div className="nav-links">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
