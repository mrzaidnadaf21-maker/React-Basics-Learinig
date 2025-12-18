import React from "react";
import { useContext } from "react";

import MyContext from "./Context/MyContext";

const DisrtictGovComponent = () => {
  const data = useContext(MyContext);
  return (
    <div>
      DisrtictGovComponent
      <h4>Name = {data.name}</h4>
      <h4>money = {data.money}</h4>
      <h4>counter = {data.counter}</h4>
      <hr />
    </div>
  );
};

export default DisrtictGovComponent;
