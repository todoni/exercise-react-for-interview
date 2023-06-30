import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Props";
import FunctionVsClass from "./FunctionVSClass";

function App() {
  return (
    <Fragment>
      <Parent />
      <FunctionVsClass />
    </Fragment>
  );
}

export default App;
