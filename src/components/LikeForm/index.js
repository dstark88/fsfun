import React from "react";
// import Counter from "../Counter";
import "./style.css";

function LikeForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="brand"
          type="text"
          className="form-control"
          placeholder="Type in a beer brand to update likes"
        />
        {/* <Counter /> */}
      </div>
    </form>
  );
}

export default LikeForm;
