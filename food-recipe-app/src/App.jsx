import React from "react";
import Mainpage from "./Components/Mainpage";
import { Route, Routes } from "react-router-dom";
import Mealinfo from "./Components/Mealinfo";
// import Snowfall from "react-snowfall";
const App = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* <Mainpage /> */}
      {/* <Snowfall style={{ position: "fixed", width: "100%", height: "100vh" }} /> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:id" element={<Mealinfo />} />
      </Routes>
    </div>
  );
};

export default App;
