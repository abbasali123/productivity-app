import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TimeProvider } from "./Context/time-context";
import { ThemeProvider } from "./Context/theme-context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <TimeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TimeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
