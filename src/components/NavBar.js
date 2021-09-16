import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

function NavBar({ setSearchedBook }) {
  return (
    <div className="navbar">
      <ul>
        <Link className="navbar-buttons" to="/">
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
