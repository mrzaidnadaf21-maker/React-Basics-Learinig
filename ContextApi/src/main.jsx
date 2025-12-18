import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MoneyState from "./Context/MoneyState.jsx";
import BankDetails from "./Context/BankDetails.jsx";
createRoot(document.getElementById("root")).render(
  <MoneyState>
    <BankDetails>
      <App />
    </BankDetails>
  </MoneyState>
);

// abb app jo he ek children he or jitne bhi app ke under component aaye ge sub children hoge or sub  ko context se data pass hoga or props drilling nai hogi
