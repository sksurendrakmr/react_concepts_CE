import React, { Component } from "react";
import withCounter from "./withCounter";

class Counter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(Counter);
/** 
Here instead of exporting the original component,
we exporting hoc.
So here in our case, all the component which exported as hoc (here Counter and HoverCounter)
will have a new props called name.

So our HOC injects a named prop to any component required.
*/
