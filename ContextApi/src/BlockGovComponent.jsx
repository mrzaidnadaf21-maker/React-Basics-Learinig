import React from "react";
import { useContext } from "react";
import Bank from "./Context/Bank";

const BlockGovComponent = () => {
  const data = useContext(Bank);
  return (
    <>
      <div>
        BlockGovComponent
        <h4>Bank Location = {data.BankLocation}</h4>
        <h4>Bank = {data.BankName}</h4>
      </div>
      <hr />
    </>
  );
};

export default BlockGovComponent;
