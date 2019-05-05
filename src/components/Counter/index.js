import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="text-center">
        <div className="card-body">
          <p className="card-text">Likes: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Likes
          </button>
            {" "}
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Dislikes
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
