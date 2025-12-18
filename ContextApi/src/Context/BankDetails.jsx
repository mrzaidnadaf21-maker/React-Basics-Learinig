import React from "react";
import Bank from "./Bank";
const BankDetails = (props) => {
  const BankName = "Punjab bank";
  const BankLocation = "Punjab";
  return (
    <>
      <Bank.Provider value={{ BankName, BankLocation }}>
        {props.children}
      </Bank.Provider>
    </>
  );
};

export default BankDetails;
