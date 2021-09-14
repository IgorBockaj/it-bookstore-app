import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBookToCart } from "../actions";

function BookCard() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  return books.length === 0
    ? null
    : books[0].map((book) => (
        <li key={book.isbn13}>
          {book.title}
          <br />
          {book.price}

          <button onClick={() => dispatch(addBookToCart(book))}>
            add to cart
          </button>
        </li>
      ));
}

export default BookCard;
