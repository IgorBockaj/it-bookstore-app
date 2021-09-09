import React from "react";

function BookCard({ books }) {
  return books.map((book) => (
    <li style={{ listStyle: "none" }} key={book.isbn13}>
      <h2>{book.title}</h2>
      <img src={book.image} alt="" />
      <h3>{book.price}</h3>
    </li>
  ));
}

export default BookCard;
