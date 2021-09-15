import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToCart } from "../actions";

function BookCard({ book }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartIDs = cart.map((item) => item.id);

  const handleAdd = (book) => {
    dispatch(addBookToCart(book));
  };

  return (
    <>
      <li key={book.isbn13}>
        {book.title} {book.price}
      </li>

      {cartIDs.includes(book.isbn13) ? null : (
        <button onClick={() => handleAdd(book)}>Add to cart</button>
      )}
    </>
  );
}

export default BookCard;
