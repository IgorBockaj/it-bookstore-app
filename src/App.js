import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BookContainer from "./components/BookContainer";
import Cart from "./components/Cart";

import { useDispatch } from "react-redux";
import { fetchBooks } from "./actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

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
      <Router>
        <SearchBar setSearchedBook={setSearchedBook} />
        <NavBar setSearchedBook={setSearchedBook} />
        <Switch>
          <Route path="/" exact>
            <BookContainer setPage={setPage} />
          </Route>
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
