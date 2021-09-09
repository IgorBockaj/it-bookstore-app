import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BooksContainer from "./components/BooksContainer";

function App() {
  const [books, setBooks] = useState([]);
  const [searchedBook, setSearchedBook] = useState("");
  const [page, setPage] = useState(1);

  const searchBook = (book) => {
    setSearchedBook(book);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    if (!searchedBook) return;

    return fetch(`https://api.itbook.store/1.0/search/${searchedBook}/${page}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, [searchedBook, page]);

  return (
    <div>
      <Header searchBook={searchBook} />
      <BooksContainer books={books} handlePage={handlePage} />
    </div>
  );
}

export default App;
