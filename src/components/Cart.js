import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBookFromCart } from "../actions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return cart.map((book) => {
    return (
      <li key={book.id}>
        {book.title}
        <button onClick={() => dispatch(removeBookFromCart(book))}>
          remove from cart
        </button>
      </li>
    );
  });
}

export default Cart;
