import React, { useState, useEffect } from "react";
import { fetchBooks } from "./actions";
import SearchBar from "./components/SearchBar";
import { useDispatch } from "react-redux";
import BookContainer from "./components/BookContainer";
import Cart from "./components/Cart";

function App() {
  const [searchedBook, setSearchedBook] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchedBook) return;

    return dispatch(fetchBooks(searchedBook, page));
  }, [searchedBook, dispatch, page]);

  return (
    <div>
      <SearchBar setSearchedBook={setSearchedBook} />
      <Cart />
      <BookContainer />
      <div>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
      </div>
    </div>
  );
}

export default App;
