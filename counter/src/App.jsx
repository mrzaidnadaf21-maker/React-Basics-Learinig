import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./counter.css";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const [show, setShow] = useState(false);

  const [dark, setDark] = useState(false);

  // const addvalue = () => {
  //   if (counter < 10) {
  //     setCounter(counter + 1);
  //   }
  // };

  // const removeValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };

  return (
    <div
      style={{
        backgroundColor: dark ? "#111" : "#eee",
        color: dark ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <p>{dark ? "Dark Mode ON 🌙" : "Light Mode ON ☀️"}</p>
    </div>
    //     <div className="container">
    //       {/* <h1>Hello React</h1>
    //       <h2>Counter Value:{counter}</h2>
    //       <button onClick={addvalue}>Add value</button>
    //       <br />
    //       <button onClick={removeValue}>Remove value</button> */}
    // {/*
    //       <input type={show ? "text" : "password"} />
    //       <button onClick={() => setShow(!show)}>{show ? "hide" : "Show"}</button> */}
    //     </div>
  );
}

export default App;
