import React from "react";
import { ThemeContext } from "../App";
import { UserConsumer } from "./UserContext";

const ComponentF = () => {
  return (
    <>
      <UserConsumer>
        {(userName) => {
          return (
            <ThemeContext.Consumer>
              {(theme) => {
                return (
                  <h2>
                    {userName} - {theme}
                  </h2>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </UserConsumer>
    </>
  );
};

export default ComponentF;
