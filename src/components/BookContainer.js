import React from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

import "./bookContainer.css";

function BookContainer({ setPage }) {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-container">
      <div className="cards">
        {books.length !== 0 ? (
          books[0].map((book) => <BookCard key={book.isbn13} book={book} />)
        ) : (
          <h1 className="message">Search for a book</h1>
        )}
      </div>
      <div className="pagination">
        {books.length === 0 ? null : <Pagination setPage={setPage} />}
      </div>
    </div>
  );
}

export default BookContainer;
