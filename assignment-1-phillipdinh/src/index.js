import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import OpenDialog from "./OpenDialog";

// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/

function App() {
  return (
    <div>
      <OpenDialog />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
