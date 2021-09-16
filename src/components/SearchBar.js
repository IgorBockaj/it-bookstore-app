import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
    <div>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search for a book"
            value={input}
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>Search</button>
        </form>
      </div>
      <div>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length === 0 ? "" : cart.length}
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
