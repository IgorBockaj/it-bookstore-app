import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return cart.map((book) => {
    return <li key={book.id}>{book.title}</li>;
  });
}

export default Cart;
