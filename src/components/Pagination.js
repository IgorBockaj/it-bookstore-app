import React from "react";

import "./pagination.css";

function Pagination({ setPage }) {
  return (
    <div className="pagination">
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
    </div>
  );
}

export default Pagination;
