import React from "react";
import BookCard from "./BookCard";
import Pages from "./Pages";

function BooksContainer({ books, handlePage }) {
  return (
    <div>
      <BookCard books={books} />
      <Pages handlePage={handlePage} />
    </div>
  );
}

export default BooksContainer;
