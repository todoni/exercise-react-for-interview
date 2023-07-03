import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./Props";
import FunctionVsClass from "./FunctionVSClass";
import SyncedInputs from "./syncState";

function App() {
  return (
    <Fragment>
      <Parent />
      <FunctionVsClass />
      <SyncedInputs />
    </Fragment>
  );
}

export default App;
