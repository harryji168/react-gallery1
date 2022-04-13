import React from "react";
import ReactDOM from "react-dom";
import RUG from "react-upload-gallery";
import "react-upload-gallery/dist/style.css";

import { initialState } from "./data";

function App() {
  return (
    <>
      <RUG action="http://example.com/upload" initialState={initialState} />
      <h1 style={style.title}>Hold Drag and Sort Items</h1>
    </>
  );
}

const style = {
  title: {
    textAlign: "center",
    fontFamily: "Helvetica",
    marginTop: 50
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
