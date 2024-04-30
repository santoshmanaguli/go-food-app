import React from "react";

export default function Search() {
  //functions
  function onsubmit(e) {
    e.preventDefault();
  }

  //html
  return (
    <div className="d-flex justify-content-center">
      <form className="form">
        <input type="search" placeholder="search food here..." />
        <button
          type="submit"
          onClick={(e) => {
            onsubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
