import React from "react";
import BlockGovComponent from "./BlockGovComponent";
import People from "./People";
import DisrtictGovComponent from "./DisrtictGovComponent";
import IndianGovComponent from "./IndianGovComponent";
import StateGovComponent from "./StateGovComponent";
import VillageGovComponent from "./VillageGovComponent";

const App = () => {
  return (
    <div>
      <BlockGovComponent />
      <People />
      <DisrtictGovComponent />
      <IndianGovComponent />
      <StateGovComponent />
      <VillageGovComponent />
    </div>
  );
};

export default App;
