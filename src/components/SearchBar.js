import React, { useState } from "react";

function SearchBar({ searchBook }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBook(input);
    setInput("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a book"
          value={input}
          onChange={handleInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
