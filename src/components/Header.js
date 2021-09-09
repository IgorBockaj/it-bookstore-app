import React from "react";
import SearchBar from "./SearchBar";

function Header({ searchBook }) {
  return (
    <div>
      <h2>Logo</h2>
      <SearchBar searchBook={searchBook} />
      <br />
      <button>Cart</button>
    </div>
  );
}

export default Header;
