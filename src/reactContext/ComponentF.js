import React from "react";
import { UserConsumer } from "./UserContext";

const ComponentF = () => {
  return (
    <>
      <UserConsumer>
        {(userName) => {
          return <div>Hello ${userName}</div>;
        }}
      </UserConsumer>
    </>
  );
};

export default ComponentF;
