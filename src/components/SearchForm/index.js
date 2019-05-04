import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="brand"
          list="brands"
          type="text"
          className="form-control"
          placeholder="Type in a beer brand to begin"
          id="brand"
        />
        <datalist id="brands">
          {props.brands.map(brand => (
            <option value={brand} key={brand} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleSearchSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
