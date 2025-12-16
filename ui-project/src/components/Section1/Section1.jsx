import React from "react";
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

export const Section1 = (props) => {
  // console.log(props.users);

  return (
    <div className="h-screen w-ful">
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
};

export default Section1;
