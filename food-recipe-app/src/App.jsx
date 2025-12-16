import React from "react";
import Mainpage from "./Components/Mainpage";
import { Route, Routes } from "react-router-dom";
import Mealinfo from "./Components/Mealinfo";
const App = () => {
  return (
    <div>
      {/* <Mainpage /> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:id" element={<Mealinfo />} />
      </Routes>
    </div>
  );
};

export default App;
