import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setSearchedBook }) {
  return (
    <div>
      <ul>
        <p>Most searched programming languages </p>
        <Link to="/">
          <button onClick={() => setSearchedBook("java")}>Java</button>
          <button onClick={() => setSearchedBook("python")}>Python</button>
          <button onClick={() => setSearchedBook("javascript")}>
            JavaScript
          </button>
          <button onClick={() => setSearchedBook("php")}>PHP</button>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
