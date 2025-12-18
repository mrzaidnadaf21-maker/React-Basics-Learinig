import React from "react";
import { useContext } from "react";
import MyContext from "./Context/MyContext";

const People = () => {
  //   console.log("UseContext hook", useContext(MyContext));

  const data = useContext(MyContext);

  return (
    <>
      <h4>Welcome to people Component</h4>
      <h4>Name:{data.name}</h4>
      <h4>Money:{data.money}</h4>
      <h4>Counter = {data.counter}</h4>
      <hr />
    </>
  );
};

export default People;
