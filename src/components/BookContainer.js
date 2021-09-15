import React from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";

function BookContainer() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.length !== 0
        ? books[0].map((book) => <BookCard key={book.isbn13} book={book} />)
        : null}
    </div>
  );
}

export default BookContainer;
