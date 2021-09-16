import React from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

function BookContainer({ setPage }) {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.length !== 0
        ? books[0].map((book) => <BookCard key={book.isbn13} book={book} />)
        : null}
      {books.length === 0 ? null : <Pagination setPage={setPage} />}
    </div>
  );
}

export default BookContainer;
