import React, { useContext } from "react";
import { ThemeContext } from "../App";
import UserContext, { UserConsumer } from "./UserContext";

const ComponentF = () => {
  const userName = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <>
      <h2>
        {userName} - {theme}
      </h2>
    </>
  );
};

export default ComponentF;
