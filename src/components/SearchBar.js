import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./searchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ setSearchedBook }) {
  const [input, setInput] = useState("");
  const cart = useSelector((state) => state.cart);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedBook(input);
    setInput("");
  };

  return (
    <div className="search-bar">
      <div className="home-link">
        <Link className="searchbar-button" to="/">
          home
        </Link>
      </div>
      <div className="search-form">
        <form className="form">
          <input
            type="text"
            placeholder="Search for a book"
            value={input}
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>
            <Link className="searchbar-button" to="/">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </button>
        </form>
      </div>
      <div className="cart-link">
        <Link className="searchbar-button" to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length === 0 ? "" : cart.length}
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
