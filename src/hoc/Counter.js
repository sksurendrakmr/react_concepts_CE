import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

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
          {this.props.name} Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(Counter);
/** 
Here instead of exporting the original component,
we exporting hoc.
So here in our case, all the component which exported as hoc (here Counter and HoverCounter)
will have a new props called name.

So our HOC injects a named prop to any component required.
*/
