import React from "react";

function LikeForm(props) {
  return (
    <form className="like">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="brand"
          type="text"
          className="form-control"
          placeholder="Type in a beer brand to update likes"
        />
      </div>
    </form>
  );
}

export default LikeForm;
