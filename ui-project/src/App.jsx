import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/Section2/Section2";
export const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388",
      intro: "Zaid Nadaf Kolhapur",
      color: "royalblue",
      tag: "Satisfied",
    },

    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
      intro: "Harsh",
      color: "green",
      tag: "Underserved",
    },

    {
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
      intro: "XYZ",
      color: "black",
      tag: "Underbanked",
    },

    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388",
      intro: "ABC",
      color: "pink",
      tag: "Satisfied",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};
export default App;
