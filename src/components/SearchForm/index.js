import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
      <h1>Search Beer Here:</h1>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="brand"
          type="text"
          className="form-control"
          placeholder="Type in a beer brand to begin"
        />
        <button type="submit" onClick={props.handleSearchSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
