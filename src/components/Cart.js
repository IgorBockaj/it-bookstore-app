import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBookFromCart } from "../actions";

import "./cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartPrices = cart
    .map((item) => item.price.split("").slice(1).join(""))
    .reduce((prevValue, currValue) => {
      return +prevValue + +currValue;
    }, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((book) => (
          <li className="cart-item" key={book.id}>
            <img src={book.img} alt="" />
            <h2 className="cart-item_heading">{book.title}</h2>
            <h2 className="cart-item_price">{book.price}</h2>
            <button
              className="cart-button"
              onClick={() => dispatch(removeBookFromCart(book))}
            >
              remove from cart
            </button>
          </li>
        ))}
      </div>
      {cartPrices === 0 ? null : (
        <div className="cart-price">{cartPrices.toFixed(2)}$</div>
      )}
    </div>
  );
}

export default Cart;
