import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToCart } from "../actions";

import "./bookCard.css";

function BookCard({ book }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartIDs = cart.map((item) => item.id);

  return (
    <div className="book-card">
      <li key={book.isbn13}>
        <img src={book.image} alt="" />
        <h2>{book.title}</h2>
        <p>{book.price}</p>
      </li>

      {cartIDs.includes(book.isbn13) ? (
        <p>Book added to cart</p>
      ) : (
        <button
          className="book-button"
          onClick={() => dispatch(addBookToCart(book))}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default BookCard;
