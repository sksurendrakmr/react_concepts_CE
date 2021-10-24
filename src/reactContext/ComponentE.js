import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentE extends Component {
  //if the application supports the public class field syntax then we can replace component.contextType with static
  // static contextType = UserContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}
ComponentE.contextType = UserContext; //By doing so, in the render method the userContext value is available as this.context

export default ComponentE;
