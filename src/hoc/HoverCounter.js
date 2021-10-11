import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCounter}>
          Hovered {this.state.counter} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
