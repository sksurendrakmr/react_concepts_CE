import React from "react";

/**
 * 
 *A function which accept the original component and returns
 the new component.
 */
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    //all the code that need to be share across the component.
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.counter}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
