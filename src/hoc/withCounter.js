import React from "react";

/**
 * 
 *A function which accept the original component and returns
 the new component.
 */
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    //all the code that need to be share across the component.
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
        <OriginalComponent
          count={this.state.counter}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
