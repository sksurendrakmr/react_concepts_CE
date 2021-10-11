import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default Counter;
