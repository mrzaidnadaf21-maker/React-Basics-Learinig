import React, { useState } from "react";
import MyContext from "./MyContext";

const MoneyState = (props) => {
  const money = 1000;
  const name = "zaid";
  const [counter, setCouner] = useState(10);
  return (
    <>
      <MyContext.Provider value={{ money, name, counter, setCouner }}>
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export default MoneyState;
