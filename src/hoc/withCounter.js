import React from "react";

/**
 * 
 *A function which accept the original component and returns
 the new component.
 */
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name='surendra' />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
